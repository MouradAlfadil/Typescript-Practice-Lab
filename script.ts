export {}
interface Mountain{
    name:string;
    height:Number;
}

let Mountains:Mountain[] = [
    {
        name:"Kilimanjaro",
        height:19341
    },
    {
        name:"Everest",
        height:29029
    },
    {
        name:"Denali",
        height:20310
    }
]

function findNameOfTallestMountain(Mountain:Mountain[]):string{
    let tallest:Mountain = Mountains[0];

    Mountains.forEach((m:Mountain) => {
        if(m.height > tallest.height){
            tallest = m;
        }
    });

    return tallest.name;
}

let bigboi:string = findNameOfTallestMountain(Mountains);
console.log(bigboi);

///////////////////////////////////////////////////////////////

interface Product{
    name:string;
    price:number;
}
let products:Product[] = [
    {
        name:"beans",
        price: 100.00
    },
    {
        name:"banana",
        price: 2.00
    },
    {
        name:"redbull",
        price: 5.00
    },
    {
        name:"Wizard's Mind Bomb",
        price: 1.00
    }
];

function calcAverageProductPrice(products:Product[]):number{
    let average:number = 0;
    // let counter:number = 0;
    products.forEach((i:Product) => {
        average = average + (i.price); 
    });
    average = average/(products.length);
    return average;
}

console.log(calcAverageProductPrice(products));

////////////////////////////////
interface InventoryItem{
    product:Product;
    quantity:number;
}

let inventory:InventoryItem[] = [
    {
        product: {
            name:"motor",
            price: 10.00
        },
        quantity:10
    },
    {
        product: {
            name:"sensor",
            price: 12.50
        },
        quantity:4
    },
    {
        product: {
            name:"LED",
            price: 1.00
        },
        quantity:20
    }
];

function calcInventoryValue(inventory:InventoryItem[]):number{
    let sum:number = 0;
    inventory.forEach((i:InventoryItem) => {
        sum = sum + (i.quantity * i.product.price); 
    });
    return sum;
}

console.log(calcInventoryValue(inventory));




