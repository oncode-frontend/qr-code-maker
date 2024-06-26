const $ = document
const inputElem = $.querySelector('input')
const btnElem = $.querySelector('.btn-gen')
const imgElem = $.querySelector('.qr-img')
const warnElem = $.querySelector('.warn')
const request = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data="

btnElem.addEventListener('click', ()=>{
    if (inputElem.value === "") {
        warnElem.innerHTML = "Fill input!"
        warnElem.style.color = "red"
        warnElem.style.textAlign = "center"
        setTimeout(() => {
            warnElem.innerHTML = ""
        }, 2000);
    } else{
        let inputValue = inputElem.value.trim()
        let qrUrl = request + inputValue
        imgElem.src = qrUrl
    }
})


const activateInput = () => {
    console.log("test");
}

inputElem.addEventListener('input', (ev) => {
    if (inputElem.value === "") {
        inputElem.style.padding = "0 0 0 25%";
        inputElem.style.letterSpacing = "5px"
    } else {
        inputElem.style.padding = "0 0 0 10%";
        inputElem.style.letterSpacing = "0px"
    }
})