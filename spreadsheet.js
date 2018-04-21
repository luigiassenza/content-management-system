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
				newCell.setAttribute("position", j + "-" + i);
				setAttribute("contenteditable", "false");
				newCell.width='75px';
				newCell.height='10px';
				newCell.appendChild(document.createTextNode(i+1 + " - " + j+1));
				newCell.addEventListener("focus", function(event){
					selectCell(event);
					cellPosition(event);
				});
				newCell.addEventListener("blur", function(event){
					unSelectCell(event);
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
}


