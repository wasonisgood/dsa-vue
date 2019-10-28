$(function () {
	var table1 = document.getElementById("machineLife");
	var i = 0;
	var first = 1;

	for (i = 1; i <= 3; i++) {
		table1.rows[i].cells[9].style.display = false ? '' : 'none';
		table1.rows[i].cells[10].style.display = false ? '' : 'none';
	}
	document.getElementById("col1").onclick = function () {
		for (i = 1; i <= 3; i++) {
			table1.rows[i].cells[1].style.display = false ? '' : 'none';
			table1.rows[i].cells[9].style.display = true ? '' : 'none';
		}
		document.getElementById("col2").innerHTML = "◄ DSA002";
		document.getElementById("col8").innerHTML = " DSA008";
		document.getElementById("col9").innerHTML = "DSA009 ►";
		first++;
	};
	document.getElementById("col2").onclick = function () {
		if (first == 2) {
			for (i = 1; i <= 3; i++) {
				table1.rows[i].cells[2].style.display = false ? '' : 'none';
				table1.rows[i].cells[10].style.display = true ? '' : 'none';
			}
		}
		document.getElementById("col9").innerHTML = " DSA009";
		document.getElementById("col10").innerHTML = "DSA010 ►";
		first++;
	};
	//show next
	document.getElementById("col9").onclick = function () {
		if (first == 2) {
			for (i = 1; i <= 3; i++) {
				table1.rows[i].cells[9].style.display = false ? '' : 'none';
				table1.rows[i].cells[1].style.display = true ? '' : 'none';
			}
		}
		document.getElementById("col1").innerHTML = "◄ DSA001";
		document.getElementById("col2").innerHTML = " DSA002";
		first--;
	};
	document.getElementById("col10").onclick = function () {
		for (i = 1; i <= 3; i++) {
			table1.rows[i].cells[10].style.display = false ? '' : 'none';
			table1.rows[i].cells[2].style.display = true ? '' : 'none';
		}
		document.getElementById("col2").innerHTML = "◄ DSA002";
		document.getElementById("col9").innerHTML = "DSA009 ►";
		first--;
	};

});