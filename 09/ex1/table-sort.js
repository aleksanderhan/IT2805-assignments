document.getElementById("sort-button-1").addEventListener("click", function() {sortTable(0)});
document.getElementById("sort-button-2").addEventListener("click", function() {sortTable(1)});
document.getElementById("sort-button-3").addEventListener("click", function() {sortTable(2)});


function sortTable(col) {
	var table = document.getElementById("the-table-body")
	var sortList = []
	var rows = {}

	for (var i=0; i<table.rows.length; i++) {
		var elem = table.rows[i].cells[col].innerHTML
		sortList.push(elem)
		var row = []
		for (var j=0; j<table.rows[i].cells.length; j++) {
			row.push(table.rows[i].cells[j].innerHTML)
		}
		rows[elem] = row
	}

	sortList.sort()
	for (var i=0; i<table.rows.length; i++) {
		for (var j=0; j<3; j++) {
			table.rows[i].cells[j].innerHTML = rows[sortList[i]][j]
		}
	}
}