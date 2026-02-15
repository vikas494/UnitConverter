const inputEl = document.getElementById("input-el")

//1m = 3.28084ft
//1L = 0.2642gal
//1kg = 2.20462p

const convertBtn = document.getElementById("convert-btn")

convertBtn.addEventListener("click", function(){
    let n = inputEl.value
    let nfeets = n*3.28084
    let nmeters = n/3.28084
    console.log(nmeters)
    console.log(nfeets)
})