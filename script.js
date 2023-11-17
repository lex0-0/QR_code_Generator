let imagebox = document.getElementById("imagebox");
let Qrimag = document.getElementById("Qrimag");
let Qrtext = document.getElementById("Qrtext");


function Generateqr() {
    Qrimag.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + Qrtext.value;
    imagebox.classList.add("show-image")

}
