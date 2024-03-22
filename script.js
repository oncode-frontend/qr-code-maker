const $ = document
const inputElem = $.querySelector('input')
const btnElem = $.querySelector('.btn-gen')
const imgElem = $.querySelector('.qr-img')

const request = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data="

btnElem.addEventListener('click', ()=>{
    let inputValue = inputElem.value
    let qrUrl = request + inputValue

    imgElem.src = qrUrl
})