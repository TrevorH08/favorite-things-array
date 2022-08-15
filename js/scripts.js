const setFavoriteThingsConst = function(event) {
  event.preventDefault();
	const foodInput = document.getElementById("foodInput").value;
  const hobbyInput = document.getElementById("hobbyInput").value;
  const showInput = document.getElementById("showInput").value;
	
	const inputArray = [foodInput, hobbyInput, showInput];
  const reverseInputArray = inputArray.reverse();
  console.log(typeof reverseInputArray);
  const slice = reverseInputArray.slice(0,1);
  reverseInputArray.push(slice);
 // const hobbySlice = inputArray.slice(1,2);
 // const foodSlice = inputArray.slice(0,1);
 // const showSlice = inputArray.slice(2);

//	let newInputArray = hobbySlice;
	//newInputArray.push(foodSlice);
	//newInputArray.push(showSlice);
	
	const ul = document.createElement("ul");
	const li1 = document.createElement("li").append(reverseInputArray[0]);
	const li2 = document.createElement("li").append(reverseInputArray[1]);
	const li3 = document.createElement("li").append(reverseInputArray[2]);
	console.log(typeof reverseInputArray);
	console.log("hobby = " + reverseInputArray[1]);
	ul.append(li1, li2, li3)
	console.log(reverseInputArray[1]);
  console.log(reverseInputArray[2]);
  console.log(reverseInputArray[3]);
  li2.after(li1);
  li3.after(li2);
	ul.after("p");
	document.body.append(ul);
	
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