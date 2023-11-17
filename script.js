let imagebox = document.getElementById("imagebox");
let Qrimag = document.getElementById("Qrimag");
let Qrtext = document.getElementById("Qrtext");


function Generateqr() {
    if(Qrtext.value.length > 0){
        Qrimag.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + Qrtext.value;
    imagebox.classList.add("show-image")
    }else{
        Qrtext.classList.add('error');
        setTimeout(()=>{
            Qrtext.classList.remove('error');
        },1000);
    }
    

}
