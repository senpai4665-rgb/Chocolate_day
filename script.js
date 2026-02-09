function createChocolate() {
    const choco = document.createElement("div");
    choco.classList.add("choco");
    choco.innerText = "🍫";

    choco.style.left = Math.random() * 100 + "vw";
    choco.style.animationDuration = Math.random() * 3 + 4 + "s";
    choco.style.fontSize = Math.random() * 10 + 20 + "px";

    document.body.appendChild(choco);
    setTimeout(() => choco.remove(), 7000);
}

setInterval(createChocolate, 600);

window.onload = () => {
    const popup = document.querySelector(".popup");
    if (popup) {
        setTimeout(() => popup.classList.add("active"), 2000);
    }
};

function closePopup() {
    document.querySelector(".popup").classList.remove("active");
               }
