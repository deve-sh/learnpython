// Scripts for the index page.

let introblock=document.getElementById("intro");
let openblock=document.getElementById("open");

// If the intro block is opened.

if(introblock.style.display!="block"){
    openblock.innerHTML="<i class='fas fa-plus'></i>";
}

// Function to toggle the icon in intro block.

let intro = function(){
	if(introblock.style.display!="block"){
     introblock.style.display="block";
     openblock.innerHTML="<i class='fas fa-minus'></i>";
	}
	else{
		introblock.style.display="none";
		openblock.innerHTML="<i class='fas fa-plus'></i>";
	}
};

// Similary a function to close the intro block.

let close = function(){
	introblock.style.display="none";
}

let getIDLE=document.getElementById("get");

let get = function(){
  if(getIDLE.style.display!="block"){
     getIDLE.style.display="block";
	}
	else{
	 getIDLE.style.display="none";
	}
};

let basicsblock = document.getElementById("basics");

let basics = function(){
  if(basicsblock.style.display!="block"){
     basicsblock.style.display="block";
	}
	else{
	 basicsblock.style.display="none";
	}
};