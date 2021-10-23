/* Replace first letter of region name to upper case */
var regionInfo = document.querySelector("h1");
regionInfo.innerText = regionInfo.innerText.replace(regionInfo.innerText[0], regionInfo.innerText[0].toUpperCase());

/* Turn content screen Dynamic */

var closeContentButton = document.createElement("div");
closeContentButton.addEventListener("click", () => {
    document.querySelectorAll(".content")[0].style.right = "-9999";
})
closeContentButton.style.cursor = "pointer";
closeContentButton.innerText = "(X)";

document.querySelectorAll(".content")[0].firstElementChild.appendChild(closeContentButton);