function setFavoriteThings(); {
  const foodInput = document.getElementById("foodInput").value;
  const hobbyInput = document.getElementById("hobbyInput").value;
  const showInput = document.getElementById("showInput").value;

  document.querySelector("span#food1").innerText = foodInput;
  document.querySelector("span#hobby1").innerText = hobbyInput;
  document.querySelector("span#show1").innerText = showInput;
}

function setFormSubmissionEventHandler() {
  let form = document.querySelector("favorite");
  form.addEventListener("submit", setFavoriteThings(event) {
    event.preventDefault();
    setFavoriteThings();
    document.querySelector("div#outcome").removeAttribute("hidden");
  });
}

window.addEventListener("load", setFormSubmissionEventHandler());