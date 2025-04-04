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

    buttonSelected = document.querySelector(`#button-${value}`)
    buttonSelected.classList.add("button-selectd")

    
}

function removeClassButtonSelect(){
    if(buttonSelected !== null){
        buttonSelected.classList.remove("button-selectd")
        buttonSelected = null
    }
}

function caculate(){
    if(bill !== 0 && tipPorcentage !== 0 && numberOfPeople !== 0 ){
    }

    else{

    }

}