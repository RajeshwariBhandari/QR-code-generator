const container = document.querySelector(".container"),
input= container.querySelector(".box input"),
generate = container.querySelector(".box button"),
qrimg = container.querySelector(".qrcode img");

generate.addEventListener("click",() => {
    let qrvalue = input.value;
    if(!qrvalue) return;
    generate.innerText = "Generating QR code..";

    qrimg.src=` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrvalue}`;

    qrimg.addEventListener("load", ()=>{
        container.classList.add("active");
    generate.innerText = "Generate QR code..";

    });
    

});

input.addEventListener("keyup", () =>{
    if(!input.value){
        container.classList.remove("active");
    }
});