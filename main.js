let bill = 0
let tipPorcentage = 0
let numberOfPeople = 0
let buttonSelected = null

let billInput = document.querySelector("#bill")
billInput.addEventListener("input", receiveBillValue )

let numberOfPeopleInput = document.querySelector("#people")
numberOfPeopleInput.addEventListener("input", )

function receiveBillValue(){
    bill = billInput.valueAsNumber

    caculate()
}

function receiveNumberOfPeopleValue(){
    numberOfPeople = numberOfPeopleInput.valueAsNumber

    caculate()
}

function receiveTipPorcentageValue(value){

    tipPorcentage = value / 100

    removeClassButtonSelect()

    document.querySelector("#custom-tip").value = ""

    buttonSelected = document.querySelector(`#button-${value}`)
    buttonSelected.classList.add("button-selectd")

    
}

function removeClassButtonSelect(){
    if(buttonSelected !== null){
        buttonSelected.classList.remove("button-selectd")
        buttonSelected = null
    }
}

function receiveCustomTipPorcentageValue(){
    tipPorcentage = document.querySelector("#custom-tip").valueAsNumber / 100

    removeClassButtonSelect()

    caculate()
}

function caculate(){
    if(bill !== 0 && tipPorcentage !== 0 && numberOfPeople !== 0 ){
        let tipAmountStrong = document.querySelector(".amount strong")
        let tipAmountPerson = bill * tipPorcentage / numberOfPeople
        tipAmountStrong.innerText = `$${tipAmountPerson.toFixed(2)}`

        let totalStrong = document.querySelector(".total strong")
        let totalPerson = (bill +  numberOfPeople) / tipAmountPerson
        totalStrong.innerText = `$${totalPerson.toFixed(2)}`
    }

    else{

    }

}

function reset(){
    removeClassButtonSelect()
    document.querySelector("#custom-tip").value = ""

    numberOfPeopleInput.value = ""
    numberOfPeople = 0
}