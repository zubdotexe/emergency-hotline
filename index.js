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

const callBtns = document.querySelectorAll(".call-btn");
const coins = document.getElementById("coin-counter");


for(let i = 0; i < callBtns.length; i++) {
    btn = callBtns[i];
    
    btn.addEventListener("click", (e) => {
        let temp = parseInt(coins.innerText);
        console.log('temp', temp);
        console.log('', e.target.parentNode.parentNode);
        const cardElem = e.target.parentNode.parentNode;
        const serviceName = cardElem.querySelectorAll("div")[0].querySelector("h2").innerText;
        const serviceNum = cardElem.querySelectorAll("div")[1].querySelector("p").innerText;
        console.log('', serviceNum);
        
        
        if(temp < 20) {
        alert("❌ You must have at least 20 coins to make a call!");
        }
        else {
            alert(`📞 Calling ${serviceName} ${serviceNum}...`);
            temp -= 20;
            coins.innerText = temp;
        }
    })
}