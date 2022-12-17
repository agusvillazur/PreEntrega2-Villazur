//Catalog array & Cart array (empty).
const catalog = [{
    id:1,
    title:"Power Up!",
    description: "original flavor",
    price: 4.99}
  ,{
    id:2,
    title:"Nasty Juice",
    description: "Perfect mix of energy and fruit juice",
    price: 6.55}
  ,{
    id:3,
    title:"Extra Energy",
    description: "20% more taurine for extra power",
    price: 6.55}
  ,{
    id:4,
    title:"Zero Ultra",
    description: "sugar-free and low calorie",
    price: 5.99}
]

const cart = [];

alert("Welcome to Power Up!");

let shop = prompt("Want to make a purchase? (yes or no)");

while(shop != "yes" && shop !="no"){
    alert("Please enter yes or no")
    shop = prompt("Want to make a purchase? (yes or no)")
}

if(shop == "yes"){
    // Age check
    var agePrompt=prompt("Please enter your age");
    if (agePrompt<16) {
        alert('Sorry! Our products contain high levels of caffeine and are not recommended for customers under the age of 16.');
        window.location.href = 'http://www.google.com';
        alert(`Come back in a few years!`);   
    } else {
        alert('You now have access to our catalog:')
    }
}else if (shop =="no"){
    alert("thanks for coming, see you soon!")
}

let product;
let objectsCheck;

let confirmProduct = true;

//Cart.find (búsqueda) de cada objeto.
const catalogSearch = (id)=>{
    return catalog.find(item => item.id === id);
}

while(confirmProduct){
    objectsCheck = parseInt(prompt("Add an item to your cart, CHOOSE ACCORDING TO INDEX (for example: 1 to select Power Up!) :" + "\n" + catalog.map(product=> "\n" +product.id + " - " + product.title + " " + "(" + product.description + ")" + " - "+"$" + product.price + "\n").join(".")));

    if(objectsCheck >= 1 && objectsCheck <= 4){
        product = catalogSearch(objectsCheck);
        confirmProduct = confirm("Want to continue shopping?");       
    }else{
        alert("invalid number")
    }   
    cart.push(product);
}console.log(cart);

confirmProduct = true;

let productRemoved;
let productsCheck;

const cartSearch = (id)=>{
    return cart.find(item => item.id === id);
}

let Total = 0;

while(confirmProduct){
    productsCheck = parseInt(prompt("If you want to delete a product, write it's index number: " + "\n" + "Your cart contains: \n" + cart.map(item=> "\n" +item.id + " - " + item.title + " $" + item.price + "\n").join(" - ")));
    if(productsCheck>=1 && productsCheck <= 4){
        productRemoved = cartSearch(productsCheck);
        // product removed
        cart.splice(((productRemoved.id)-1),1);
    }else{
        alert("invalid number");
    }
    confirmProduct = confirm("Do you want to continue removing items from your cart?");
}console.log(cart);

for(products of cart){
    Total += products.price;
}

alert("Thanks for your purchase! Your total spend is: $" + Total);