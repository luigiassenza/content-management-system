window.onload = function(){
	/* 
	* This function creates a spreadsheet and hihlights the selected cell
	*/
	var spreadsheet = function(){};
	
	spreadsheet.createCells = function(numerRows, numberCols){
		var spreadsheetDiv = document.createElement("div");
		spreadsheetDiv.id = "spreadsheet-div";
		spreadsheetDiv.innerHTML = "";
		
		for(var i=1; i <= numberRows; i++){
			var newRow = document.createElement("div");
			newRow.className = "cellRow",
			spreadsheetDiv.appendChild(newRow);
			
			for(var j=1; j <= numberCols; j++){
				var newCell = document.createElement("input");
				newCell.type = "text";
				newCell.className = "cellCol";
				newCell.id = j + "-" + i;
				setAttribute("contenteditable", "false");
				newCell.width='75px';
				newCell.height='10px';
				newCell.appendChild(document.createTextNode(i+1 + " - " + j+1));
				newCell.addEventListener("focus", function(event){
					selectCell(event);
					cellPosition(event);
				},true);
				newCell.addEventListener("blur", function(event){
					unSelectCell(event);
				},true);
				newCell.addEventListener("keydown", function(event){
					moveSelectCell(event);
				},true);
				newRow.appendChild(newCell);
			}
		}	
	};
	
	function selectCell(event){
		event.target.style.background = 'white';
		event.target.setAttribute("contenteditable", "true");
	}
	function unSelectCell(event){
		event.target.style.background = 'lightgrey';
		event.target.setAttribute("contenteditable", "false");
	}
	function cellPosition(event){
		var positionString = event.currentTarget.getAttribute("position");
		var row = parseInt(positionString.split("-")[0]);
		var column = parseInt(positionString.split("-")[1]);
		var position = [];
		position[0] = row;
		position[1] = column;
		return position;
	}
	function moveSelectCell(event){
		var position = cellPosition(event);
		var row = position[0];
		var column = position[1];
		if (event.keyCode == '38') {
        // up arrow
			var newRow = row - 1;
			var newColumn = column;
			if(document.getElementById(newRow + "-" + newColumn) == null){
				newRow = row;
			};
			document.getElementById(newRow + "-" + newColumn).focus();
		}
		else if (event.keyCode == '40') {
			// down arrow
			var newRow = row + 1;
			var newColumn = column;
			if(document.getElementById(newRow + "-" + newColumn) == null){
				newRow = row;
			};
			document.getElementById(newRow + "-" + newColumn).focus();
		}
		else if (event.keyCode == '37') {
		   // left arrow
			var newRow = row;
			var newColumn = column - 1;
			if(document.getElementById(newRow + "-" + newColumn) == null){
				newColumn = column;
			};
			document.getElementById(newRow + "-" + newColumn).focus();
		}
		else if (event.keyCode == '39') {
		   // right arrow
		    var newRow = row;
			var newColumn = column + 1;
			if(document.getElementById(newRow + "-" + newColumn) == null){
				newColumn = column;
			};
			document.getElementById(newRow + "-" + newColumn).focus();
		}
	}
}


