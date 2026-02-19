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

    let nfeets = (n*3.28084).toFixed(3)
    let nmeters = (n/3.28084).toFixed(3)

    let ngals = (n*0.2642).toFixed(3)
    let nliters = (n/0.2642).toFixed(3)

    let npounds = (n*2.20462).toFixed(3)
    let nkgs = (n/2.20462).toFixed(3)

    showLen.textContent = `${n} meters = ${nfeets} | ${n} feet = ${nmeters}`
    showVol.textContent = `${n} liters = ${ngals} | ${n} gallons = ${nliters}`
    showMass.textContent = `${n} kilos = ${npounds} | ${n} pounds = ${nkgs}`
})