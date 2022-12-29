const btn = document.querySelector("#calcular");
const inputPrice = document.querySelector("#price");
const inputCoupon = document.querySelector("#coupon");
const pResult = document.querySelector("#result");

btn.addEventListener("click", calcularPrecioConDescuento);

function calcularPrecioConDescuento(){
    const price = Number(inputPrice.value);
    const coupon = inputCoupon.value;

    if(!price || !coupon){
        pResult.innerText = "Los campos no pueden estar vacios";
        return;
    }

    let discount;

    switch(coupon){
        case "JuanDC_es_Batman":
        discount = 30;
        break;
        case "no_le_digas_a_nadie":
        discount = 25;
        break;
        default:
            pResult.innerText = "El cupón no es válido";
     return;
    }

    const newPrice = (price * (100 - discount)) / 100;

    pResult.innerText = "El nuevo precio con descuento es $" + newPrice;
   
}


