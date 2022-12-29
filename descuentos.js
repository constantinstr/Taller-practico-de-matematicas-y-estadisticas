const btn = document.querySelector("#calcular");
const inputPrice = document.querySelector("#price");
const inputDiscount = document.querySelector("#discount");
const pResult = document.querySelector("#result");

btn.addEventListener("click", calcularPrecioConDescuento);

function calcularPrecioConDescuento(){
    const price = Number(inputPrice.value);
    const discount = Number(inputDiscount.value);

    if(!price || !discount){
        pResult.innerText = "Los campos no pueden estar vacios";
        return;
    }

    if(discount > 100){
        pResult.innerText = "aja, ya quisieras, no puede ser mas de 100%";
        return;
    }
    const newPrice = (price * (100 - discount)) / 100;

    pResult.innerText = "El nuevo precio con descuento es $" + newPrice;
    
}


