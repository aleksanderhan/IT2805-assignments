document.getElementById("addItem").addEventListener("click", addItem)
document.getElementById("clearCompleted").addEventListener("click", clearCompleted)
var itemCount = 0;


function addItem() {
	var item = document.getElementById("item")
	var table = document.getElementById("toDoList")

	var row = table.insertRow(-1)
	var cell1 = row.insertCell(0)
	var cell2 = row.insertCell(1)

	var div = document.createElement("div")
	div.setAttribute("class", "checkbox")

	var checkbox = document.createElement("input")
	checkbox.setAttribute("type", "checkbox")
	checkbox.setAttribute("id", "item"+itemCount.toString())

	var label = document.createElement("label")
	label.setAttribute("for", "item"+itemCount.toString())

	div.appendChild(checkbox)
	div.appendChild(label)
	cell1.appendChild(div)
	cell2.innerHTML = item.value
	item.value = ""
	itemCount++;
}


function clearCompleted() {
	var table = document.getElementById("toDoList")
	var i = 0
	while (i < table.rows.length) {
		if (table.rows[i].cells[0].firstChild.firstChild.checked == true) {
			table.deleteRow(i)
		} else {
			i++;
		}	
	}
}