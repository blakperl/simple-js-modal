openbtn = document.getElementById("openbtn");
modalbox = document.getElementById("modal")
closebtn = document.getElementById("closebtn");

openbtn.addEventListener("click", function() {
    modalbox.classList.contains("hidden") ? modalbox.classList.remove("hidden") : modalbox.classList.add("hidden");

})

closebtn.addEventListener("click", function() {
   modalbox.classList.add("hidden");
    
})

window.addEventListener("click", function (e) {
    if (e.target === modalbox  || e.target === closebtn) {
        modalbox.style.display = "none"
    }
})