window.onload = function(){
		
	document.getElementById("save-button").setAttribute("hidden","hidden");
	document.getElementById("cancel-button").setAttribute("hidden","hidden");
	function edit() {
		document.getElementById("container").setAttribute("contenteditable","true");
		document.getElementById("container").setAttribute("class", "edit-container");
		document.getElementById("save-button").removeAttribute("hidden");
		document.getElementById("cancel-button").removeAttribute("hidden");
		document.getElementById("edit-button").setAttribute("hidden","hidden");
	}
	function save(){
		document.getElementById("container").setAttribute("contenteditable","false");
		document.getElementById("container").removeAttribute("class");
		document.getElementById("save-button").setAttribute("hidden","hidden");
		document.getElementById("cancel-button").setAttribute("hidden","hidden");
		document.getElementById("edit-button").removeAttribute("hidden");
	}
	function cancel(){
		document.getElementById("container").setAttribute("contenteditable","false");
		document.getElementById("container").removeAttribute("class");
		document.getElementById("cancel-button").setAttribute("hidden","hidden");
		document.getElementById("save-button").setAttribute("hidden","hidden");
		document.getElementById("edit-button").removeAttribute("hidden");
	}
	document.getElementById("edit-button").onclick = function(){
		edit();	
	};
	document.getElementById("save-button").onclick = function(){
		getHTML();
		save();		
	};
	document.getElementById("cancel-button").onclick = function(){
		cancel();		
	};

	function getHTML(){
		var lines = "";
		
		var children  = document.getElementById('container').children;
		
        for (i = 0; i <= children.length - 1; i++) {	
			var line = children[i].outerHTML;
			lines = lines + line;
		}
		document.getElementById("output").innerHTML = lines;
	}

};

