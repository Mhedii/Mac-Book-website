
firstMemory.onclick = Update;
secondMemory.onclick = Update;
firstStorage.onclick = Update;
secondStorage.onclick = Update;
thirdStorage.onclick = Update;
regular.onclick = Update;
fast.onclick = Update;


document.getElementById('secondMemory').addEventListener('click', function () {
    const memoryPrice = document.getElementById('memoryCost');
    console.log(12);
    memoryPrice.value = 180;
    memoryPrice.innerText = "$" + 180;

})
document.getElementById('firstMemory').addEventListener('click', function () {
    const memoryPrice = document.getElementById('memoryCost');
    console.log(12);
    memoryPrice.value = 0;
    memoryPrice.innerText = "$" + 0;

})
//Update();
document.getElementById('firstStorage').addEventListener('click', function () {
    const storagePrice = document.getElementById('storageCost');
    console.log(12);
    storagePrice.value = 0;
    storagePrice.innerText = "$" + 0;

})
document.getElementById('secondStorage').addEventListener('click', function () {
    const storagePrice = document.getElementById('storageCost');
    console.log(12);
    storagePrice.value = 100;
    storagePrice.innerText = "$" + 100;

})
document.getElementById('thirdStorage').addEventListener('click', function () {
    const storagePrice = document.getElementById('storageCost');
    console.log(12);
    storagePrice.value = 180;
    storagePrice.innerText = "$" + 180;

})

document.getElementById('fast').addEventListener('click', function () {
    const deliveryCost = document.getElementById('delivery');
    console.log(12);
    deliveryCost.value = 20;
    deliveryCost.innerText = "$" + 20;

})
document.getElementById('regular').addEventListener('click', function () {
    const deliveryCost = document.getElementById('delivery');
    console.log(12);
    deliveryCost.value = 20;
    deliveryCost.innerText = "$" + 0;

})


console.log(23)
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
    return totalPrice;


}
Update();
function Promo(promo) {
    // let finalPrice = document.getElementById('totalPrice');
    document.getElementById('promoBtn').addEventListener('click', function () {
        if (promo != "stevekaku") {
            let finalPrice = Update();
            document.getElementById('finalPrice').innerText = "$" + parseInt(finalPrice);
            alert(sd);
            document.getElementById('finalPrice').innerText = "$" + Update();


        }
        else {
            let finalPrice = Update() * 0.8;
            document.getElementById('finalPrice').innerText = "$" + parseInt(finalPrice);
        }
    })

}
Promo();






