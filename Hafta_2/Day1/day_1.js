// Kişi bilgilerini al
let person = {};

let products = [
    {
        productName: "Laptop",
        productPrice: "25000"
    },
    {
        productName: "Mouse",
        productPrice: "400"
    },
    {
        productName: "Keyboard",
        productPrice: "1000"
    },
    {
        productName: "Mouse pad",
        productPrice: "500"
    },
    {
        productName: "Headphone",
        productPrice: "2500"
    }
];

person.name = prompt("Adınız nedir ?");
person.age = prompt("Yaşınız kaç ?");
person.job = prompt("Mesleğiniz nedir ?");

console.log(person);

let basket = [];
while (true) {
    let usersChoice = prompt("Sepete eklemek istediğiniz ürünü yazın (Daha fazla ürün eklemek istemiyorsanız 'bitti' yazınız) : ");

    if (usersChoice.toLowerCase() === "bitti") {
        break;
    }

    let getProduct = products.find(product => product.productName.toLowerCase() === usersChoice.toLowerCase());

    if (getProduct) {
        basket.push(getProduct);
        console.log(` "${getProduct.productName}"`);
    }
    else {
        console.log("Ürün bulunamadı");
    }

}

const totalPrice = basket.reduce((total, product) => total + Number(product.productPrice), 0);



console.log("Sepete eklenen ürünler: ", basket);
console.log("Toplam tutar : " + totalPrice + "TL");

