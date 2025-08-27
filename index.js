const favList = document.getElementsByClassName("like-it");
const favCounter = document.querySelector("#heart-counter");

// heart cards
let temp = parseInt(favCounter.innerHTML);
for(let i = 0; i < favList.length; i++) {
    let  currentElem = favList[i];
    
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
const callHistContainer = document.getElementById("call-hist-container");

function addCall(serviceName, serviceNum, callTime) {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = `
        <div class="bg-[#FEF7FF] mb-2 p-4 rounded-md flex flex-wrap gap-2 justify-between items-center">
            <div class="flex flex-col flex-wrap w-[60%]">
                <h2 class="font-bold inter-font">${serviceName}</h2>
                <p class="text-gray-500">${serviceNum}</p>
            </div>
            <p class="text-gray-600 font-semibold">${callTime}</p>
        </div>
    `

    callHistContainer.appendChild(tempDiv);
}

function getCardElem(e) {
    return e.target.parentNode.parentNode;
}

// add history
for(let i = 0; i < callBtns.length; i++) {
    let btn = callBtns[i];
    
    btn.addEventListener("click", (e) => {
        let temp = parseInt(coins.innerText);
        const cardElem = getCardElem(e);
        const serviceName = cardElem.querySelectorAll("div")[0].querySelector("h2").innerText;
        const serviceNum = cardElem.querySelectorAll("div")[1].querySelector("p").innerText;
        
        
        if(temp < 20) {
            alert("❌ You must have at least 20 coins to make a call!");
        }
        else {
            alert(`📞 Calling ${serviceName} ${serviceNum}...`);
            temp -= 20;
            coins.innerText = temp;
            
            let callTime = new Date().toLocaleTimeString();
            addCall(serviceName, serviceNum, callTime);
        }
    })
}

// clear history
document.getElementById("clear-hist-btn").addEventListener("click", (e) => {
    callHistContainer.innerHTML = "";
})

// copy service number
copyCounter = document.getElementById("copy-counter");
copyBtns = document.querySelectorAll(".copy-btn");

for(let i = 0; i < copyBtns.length; i++) {
    let btn = copyBtns[i];
    
    btn.addEventListener("click", (e) => {
        const cardElem = getCardElem(e);
        const serviceNum = cardElem.querySelectorAll("div")[1].querySelector("p").innerText;
        let temp = parseInt(copyCounter.innerText);
        
        navigator.clipboard.writeText(serviceNum);
        alert(`Copied ${serviceNum}`);

        temp += 1;
        copyCounter.innerText = temp;
    })
}