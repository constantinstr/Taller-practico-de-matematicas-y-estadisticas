const btn = document.querySelector("#calcular");
const inputPrice = document.querySelector("#price");
const inputCoupon = document.querySelector("#coupon");
const pResult = document.querySelector("#result");

btn.addEventListener("click", calcularPrecioConDescuento);

const couponsObj = {
    "JuanDC_es_Batman": 30,
    "1234": 25,
    "567": 15,
}
//utilizando find
const couponsList = [];
couponsList.push({
    name: "JuanDC_es_Batman",
    discount: 30,
    limit: 500,
});
couponsList.push({
    name: "pero_es_un_secreto",
    discount: 15,
    limit: 500,
});
// Fin de utilizando find


function calcularPrecioConDescuento(){
    const price = Number(inputPrice.value);
    const coupon = inputCoupon.value;

    if(!price || !coupon){
        pResult.innerText = "Los campos no pueden estar vacios";
        return;
    }

    let discount;

    // Utilizando Find
    function isCouponInArray(couponElement){ // {name, discount}
        return couponElement.name == coupon;

    }

    const couponInArray = couponsList.find(isCouponInArray);// {}

    if(couponInArray){
        discount = couponInArray.discount;
    }else{
        pResult.innerText = "El cupón no es válido";
        return;
    }
    // Fin de utilizando find

    //UTILIZANDO UN ARRAY solucion del problema, luego probaremos utilizando un obj list
    // if(couponsObj[coupon]){
    //     discount = couponsObj[coupon].name ;
    // }else{
    //     pResult.innerText = "El cupón no es válido";
    //     return;
    // }
    //fin de utilizando arrays

    const newPrice = (price * (100 - discount)) / 100;

    pResult.innerText = "El nuevo precio con descuento es $" + newPrice;
   
}

// RETO CLASE 10 
// En este desafío vas a recibir un array de objetos. Cada objeto representa a un usuario. Debes encontrar al usuario con cierto ID y retornar su nombre. En caso de no existir, debes retornar false.

// Input

// const users = [];
// users.push({ id: 123, name: 'Juanito Alcachofa' });
// users.push({ id: 456, name: 'Juanita Alcaparra' });

// solution(users, 456);
// solution(users, 999);

// Output

// Juanita Alcaparra
// false

// export function solution(users, id) {
//     // Tu código aquí 👈
//     const user = users.find(user => user.id == id);
//   return user?.name || false
//   }
  
