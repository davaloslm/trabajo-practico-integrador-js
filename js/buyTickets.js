window.addEventListener("load", ()=>{

    var ticketPrice = 200
    const quantityInput = document.querySelector("#quantity")
    const categoryInput = document.querySelector("#category")
    const total = document.querySelector("#total")

    const calculateTotal = () =>{
        if(categoryInput.value !=="" && quantityInput.value > 0){
            total.value = quantityInput.value * ( ticketPrice - (ticketPrice * categoryInput.value) ) 
        } else{
            total.value = ""
        }
    }

    quantityInput.addEventListener("input", ()=>{
        calculateTotal()
    })
    categoryInput.addEventListener("input", ()=>{
        calculateTotal()
    })


})