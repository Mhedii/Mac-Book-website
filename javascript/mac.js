
firstMemory.onclick = Update;
secondMemory.onclick = Update;
firstStorage.onclick = Update;
secondStorage.onclick = Update;
thirdStorage.onclick = Update;
regular.onclick = Update;
fast.onclick = Update;
totalPrice.onchange = Update;
finalPrice.onchange = Update;


document.getElementById('secondMemory').addEventListener('click', function () {
    const memoryPrice = document.getElementById('memoryCost');

    memoryPrice.innerText = "$" + 180;
    console.log(12);
    memoryPrice.value = 180;


})
document.getElementById('firstMemory').addEventListener('click', function () {
    const memoryPrice = document.getElementById('memoryCost');
    console.log(12);
    memoryPrice.value = 0;
    memoryPrice.innerText = "$" + 0;

})

document.getElementById('firstStorage').addEventListener('click', function () {
    const storagePrice = document.getElementById('storageCost');

    storagePrice.value = 0;
    storagePrice.innerText = "$" + 0;

})
document.getElementById('secondStorage').addEventListener('click', function () {
    const storagePrice = document.getElementById('storageCost');

    storagePrice.value = 100;
    storagePrice.innerText = "$" + 100;

})
document.getElementById('thirdStorage').addEventListener('click', function () {
    const storagePrice = document.getElementById('storageCost');

    storagePrice.value = 180;
    storagePrice.innerText = "$" + 180;

})

document.getElementById('fast').addEventListener('click', function () {
    const deliveryCost = document.getElementById('delivery');

    deliveryCost.value = 20;
    deliveryCost.innerText = "$" + 20;

})
document.getElementById('regular').addEventListener('click', function () {
    const deliveryCost = document.getElementById('delivery');

    deliveryCost.value = 20;
    deliveryCost.innerText = "$" + 0;

})
document.getElementById('totalPrice').addEventListener('change', function () {
    const totalPrice = document.getElementById('totalPrice');


    totalPrice.innerText = "$" + totalPrice;

})
document.getElementById('finalPrice').addEventListener('change', function () {
    const finalPrice = document.getElementById('finalPrice');

    finalPrice.value = 20;
    finalPrice.innerText = "$" + finalPrice;

})
document.getElementById('promo').addEventListener('change', function () {
    const code = document.getElementById('promo');


})



Update();
function Update() {


    let memoryPrice = document.getElementById('memoryCost');
    memoryCost = parseInt(memoryPrice.value);
    var totalPrice = parseInt(1299 + parseInt(memoryCost));
    console.log("memoryCost" + memoryCost);
    let storagePrice = document.getElementById('storageCost');
    storageCost = parseInt(storagePrice.value);
    var totalPrice = parseInt(1299 + parseInt(memoryCost) + parseInt(storageCost));
    console.log("storageCost" + storageCost);
    let deliveryCost = document.getElementById('delivery');
    delivery = parseInt(deliveryCost.value);
    console.log("delivery" + delivery);



    var totalPrice = parseInt(1299 + parseInt(memoryCost) + parseInt(storageCost) + parseInt(delivery));
    console.log(totalPrice);
    document.getElementById('totalPrice').innerText = "$" + parseInt(totalPrice);

    totalPrice.innerText = "$" + parseInt(totalPrice);
    document.getElementById('finalPrice').innerText = "$" + parseInt(totalPrice);

    finalPrice.innerText = "$" + parseInt(totalPrice);
    return totalPrice;


}

function Promo(promo) {
    // let finalPrice = document.getElementById('totalPrice');
    document.getElementById('promoBtn').addEventListener('click', function () {
        const code = document.getElementById('promo');
        if (code == "stevekaku") {
            let finalPrice = Update();
            document.getElementById('finalPrice').innerText = "$" + parseInt(finalPrice);
            document.getElementById('finalPrice').innerText = "$" + Update();


        }
        else {
            let finalPrice = Update() * 0.8;
            document.getElementById('finalPrice').innerText = "$" + parseInt(finalPrice);
        }
    })

}
Promo();






