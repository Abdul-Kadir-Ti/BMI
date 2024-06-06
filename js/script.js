
let height = document.querySelector(".height")
let Weight = document.querySelector(".Weight")
let hError = document.querySelector(".hError")
let wError = document.querySelector(".wError")
let Rbtn = document.querySelector(".Rbtn")
let result = document.querySelector(".result")
let sugg = document.querySelector(".sugg")
let submit = document.querySelector(".submit")
let claculeter = document.querySelector("#claculeter")
let backBtn = document.querySelector(".backBtn")

submit.addEventListener("click", function(){
    if(height.value==""){
        hError.innerHTML="height is requied"
    }else{
        hError.innerHTML=""
    }
    if(Weight.value==""){
        wError.innerHTML="Width is requied"
    }else{
        wError.innerHTML=""
    }
    if(height.value !== "" && Weight.value != ""){
        let bmi = Weight.value*2.20462262/ (height.value**2)*703
        result.innerHTML=bmi.toFixed(2)
        if(bmi>=18.5 && bmi<=24.9){
            sugg.innerHTML="perfect"
            sugg.style.color="green"
            result.style.color="green"
            claculeter.style.display="none"
            resultPart.style.display="block"
        }
        else if(bmi<18.5){
            sugg.innerHTML="Under Weight"
            sugg.style.color="red"
            result.style.color="red"
            claculeter.style.display="none"
            resultPart.style.display="block"
        }else{
            sugg.innerHTML="Over Weight"
            sugg.style.color="red"
            result.style.color="red"
            claculeter.style.display="none"
            resultPart.style.display="block"
        }
        
    }
})

backBtn.addEventListener("click" , function(){
    if(bmi=true){
        resultPart.style.display="none"
        claculeter.style.display="block"
    }
})