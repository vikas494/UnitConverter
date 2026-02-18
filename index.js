const inputEl = document.getElementById("input-el")
let showLen = document.getElementById("show-len")
let showVol = document.getElementById("show-vol")
let showMass = document.getElementById("show-mass")

//1m = 3.28084ft
//1L = 0.2642gal
//1kg = 2.20462p

const convertBtn = document.getElementById("convert-btn")

convertBtn.addEventListener("click", function(){
    let n = inputEl.value

    let nfeets = n*3.28084
    let nmeters = n/3.28084

    let ngals = n*0.2642
    let nliters = n/0.2642

    let npounds = n*2.20462
    let nkgs = n/2.20462

    showLen.textContent = `${n} meters = ${nfeets} | ${n} feet = ${nmeters}`
    showVol.textContent = `${n} liters = ${ngals} | ${n} gallons = ${nliters}`
    showMass.textContent = `${n} li;os = ${npounds} | ${n} pounds = ${nkgs}`
})