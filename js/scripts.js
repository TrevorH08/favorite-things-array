const setFavoriteThingsConst = function(event) {
  event.preventDefault();
	const foodInput = document.getElementById("foodInput").value;
  const hobbyInput = document.getElementById("hobbyInput").value;
  const showInput = document.getElementById("showInput").value;
	
	const inputArray = [foodInput, hobbyInput, showInput];
	let newInputArray = inputArray[1];
	newInputArray.push(inputArray[0]);
	newInputArray.push(inputArray[2]);
	
	const ul = document.createElement("ul");
	const li1 = document.createElement("li").append(newInputArray[0]);
	const li2 = document.createElement("li").append(newInputArray[1]);
	const li3 = document.createElement("li").append(newInputArray[2]);
	console.log("inputs = " + newInputArray)
	console.log("hobby = " + hobbyInput)
	ul.append(li1, li2, li3);
	ul.after("p");
	
	document.body.append("ul");
	
  document.querySelector("span#food1").innerText = foodInput;
  document.querySelector("span#hobby1").innerText = hobbyInput;
  document.querySelector("span#show1").innerText = showInput;
	document.querySelector("div#outcome").removeAttribute("hidden");
}

const submitName = function () {
	let form = document.getElementById("favorite");
  form.addEventListener("submit", setFavoriteThingsConst)
};


window.addEventListener("load", submitName);