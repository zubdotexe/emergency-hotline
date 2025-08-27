const favList = document.getElementsByClassName("like-it");
const favCounter = document.querySelector("#heart-counter");

let temp = parseInt(favCounter.innerHTML);
for(let i = 0; i < favList.length; i++) {
    const currentElem = favList[i];
    currentElem.addEventListener("click", () => {
        if(currentElem.classList.contains("clicked")) {
            currentElem.classList.remove("clicked");
            currentElem.querySelector("img").src = "./assets/emptyHeart.svg";
            temp -= 1;
        }
        else {
            currentElem.classList.add("clicked");
            currentElem.querySelector("img").src = "./assets/heart.png";
            temp += 1;
            // console.log('clicked', favList[i].querySelector("img").src);
        }
        favCounter.innerHTML = temp;
    })
}
