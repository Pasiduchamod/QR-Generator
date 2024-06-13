let imgBox = document.getElementById("imgBox"); 
let qrImage = document.getElementById("qrImage"); 
let qrText = document.getElementById("qrText"); 
const errorId = document.getElementById("errorId");
function generateQR(){
    if(qrText.value.length>0){
        errorId.innerHTML="";
        qrText.style.border="1px solid #494eea";
    qrImage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrText.value;
    imgBox.classList.add("show-img");
    }else{
        error();
    }
}

function error(){

    qrText.classList.add('error');
        setTimeout(()=>{
            qrText.classList.remove('error');
        },300)
    qrText.style.border="1px solid red";
    errorId.innerHTML="Cannot be left blank";
    imgBox.classList.remove("show-img");

}