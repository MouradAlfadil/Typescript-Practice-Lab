"use strict";
exports.__esModule = true;
var Mountains = [
    {
        name: "Kilimanjaro",
        height: 19341
    },
    {
        name: "Everest",
        height: 29029
    },
    {
        name: "Denali",
        height: 20310
    }
];
function findNameOfTallestMountain(Mountain) {
    var tallest = Mountains[0];
    Mountains.forEach(function (m) {
        if (m.height > tallest.height) {
            tallest = m;
        }
    });
    return tallest.name;
}
var bigboi = findNameOfTallestMountain(Mountains);
console.log(bigboi);
var products = [
    {
        name: "beans",
        price: 100.00
    },
    {
        name: "banana",
        price: 2.00
    },
    {
        name: "redbull",
        price: 5.00
    },
    {
        name: "Wizard's Mind Bomb",
        price: 1.00
    }
];
function calcAverageProductPrice(products) {
    var average = 0;
    // let counter:number = 0;
    products.forEach(function (i) {
        average = average + (i.price);
    });
    average = average / (products.length);
    return average;
}
console.log(calcAverageProductPrice(products));
var inventory = [
    {
        product: {
            name: "motor",
            price: 10.00
        },
        quantity: 10
    },
    {
        product: {
            name: "sensor",
            price: 12.50
        },
        quantity: 4
    },
    {
        product: {
            name: "LED",
            price: 1.00
        },
        quantity: 20
    }
];
function calcInventoryValue(inventory) {
    var sum = 0;
    inventory.forEach(function (i) {
        sum = sum + (i.quantity * i.product.price);
    });
    return sum;
}
console.log(calcInventoryValue(inventory));
