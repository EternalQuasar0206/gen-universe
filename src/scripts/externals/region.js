/* Replace first letter of region name to upper case */
var regionInfo = document.querySelector("h1");
regionInfo.innerText = regionInfo.innerText.replace(regionInfo.innerText[0], regionInfo.innerText[0].toUpperCase());

/* Turn content screen Dynamic */


var closeContentButton = (`
    <div style="cursor: pointer" onclick="document.querySelectorAll('.content')[0].style.right = '-35%';">
        (X)
    </div>
`);

document.querySelectorAll(".content")[0].firstElementChild.innerHTML += (closeContentButton);