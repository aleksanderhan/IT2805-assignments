document.getElementById("addItem").addEventListener("click", addItem)
document.getElementById("clearCompleted").addEventListener("click", clearCompleted)
window.addEventListener("load", restoreSession)
var itemCounter = 1;


function addItem() {
	var item = document.getElementById("item")
	var itemID = "item"+itemCounter.toString()
	var table = document.getElementById("toDoList")

	var row = table.insertRow(-1)
	var cell1 = row.insertCell(0)
	var cell2 = row.insertCell(1)

	var div = document.createElement("div")
	div.setAttribute("class", "checkbox")

	var checkbox = document.createElement("input")
	checkbox.setAttribute("type", "checkbox")
	checkbox.setAttribute("id", itemID)

	var label = document.createElement("label")
	label.setAttribute("for", itemID)

	div.appendChild(checkbox)
	div.appendChild(label)
	cell1.appendChild(div)
	cell2.innerHTML = item.value
	
	sessionStorage.setItem(itemID, item.value)
	item.value = ""
	itemCounter++;
	sessionStorage.setItem("itemCounter", itemCounter)	
}


function clearCompleted() {
	var table = document.getElementById("toDoList")
	var i = 0
	while (i < table.rows.length) {
		if (table.rows[i].cells[0].firstChild.firstChild.checked == true) {
			sessionStorage.removeItem(table.rows[i].cells[0].firstChild.firstChild.getAttribute("id"))
			table.deleteRow(i)	
		} else {
			i++;
		}	
	}
}


function restoreSession() {
	var count = sessionStorage.getItem("itemCounter")
	sessionStorage.removeItem("itemCounter")
	if (count != null) {
		itemCounter = count
		var table = document.getElementById("toDoList")

		for (var i = 0; i < sessionStorage.length; i++) {
			var itemID = sessionStorage.key(i)
			var item = sessionStorage[itemID]

			var row = table.insertRow(-1)
			var cell1 = row.insertCell(0)
			var cell2 = row.insertCell(1)
			var div = document.createElement("div")
			div.setAttribute("class", "checkbox")
			var checkbox = document.createElement("input")
			checkbox.setAttribute("type", "checkbox")
			checkbox.setAttribute("id", itemID)
			var label = document.createElement("label")
			label.setAttribute("for", itemID)
			div.appendChild(checkbox)
			div.appendChild(label)
			cell1.appendChild(div)
			cell2.innerHTML = item
		}
		sessionStorage.setItem("itemCounter", itemCounter)
	}
}

