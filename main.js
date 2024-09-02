/*cart js*/

//After clicking on  icon-cart  window will show
let iconCart = document.querySelector('.icon-cart');
let body = document.querySelector('body');
iconCart.addEventListener('click', () =>{
    body.classList.toggle('showCart')
})
//after click on close it will hide
let closeCart = document.querySelector('.close');
closeCart.addEventListener('click',()=>{
    body.classList.toggle('showCart')
})

//to show alert 
let listProductHTML = document.querySelector('.listproduct');
let carts =[];
listProductHTML.addEventListener ('click', (event) => {
    let positionClick = event.target;
    if (positionClick.classList.contains('.cart_btn')) {
        alert('Product add to Cart ');
    addToCart('.listproduct');
    }
})
var addToCart =document.getElementsByClassName('cart_btn') 
for (var i=0; i< addToCart.length; i++){
    var button = addToCart[i];
    button.addEventListener("click",addToCartClicked);
}              
function updateCart() {
    let listCart = document.querySelector('.listCart');
    listCart.innerHTML = ''; 
    cart.forEach((product, index) => {
        listCart.innerHTML += `
                     <div class="item">
               <div class="image">
                   <img src="shoes.jpg" alt="">
               </div>
               <div class="name">Shoes</div>
               <div class="totalPrice">150</div>
               <div class="quantity">
                   <span class="minus"><</span>
                   <span>1</span>
                   <span class="plus">></span>
               </div>
            </div>`;
    });
document.querySelectorAll('.cart_btn').forEach(button => {
    button.addEventListener('click', (event) => {
        let productElement = button.closest('.listproduct');
        let name = productElement.querySelector('.name').innerText;
        let price = productElement.querySelector('.price').innerText;
        let image = productElement.querySelector('.image').src;
            alert('Product added to cart');
        addProductToCart(name, price, image, quantity);
    });
});
// to decrease the  quantity 
document.querySelectorAll('.quantity .minus').forEach(button => {
    button.addEventListener('click', (event) => {
        let index = event.target.dataset.index;
        if (cart[index].quantity > 1) {
            cart[index].quantity--;
            updateCart();
        }
    });
});
// to increase the quantity 
document.querySelectorAll('.quantity .plus').forEach(button => {
    button.addEventListener('click', (event) => {
        let index = event.target.dataset.index;
        cart[index].quantity++;
        updateCart();
    });
});
}
/*chat boat js */
let mic = document.getElementById("mic");
let chatareamain = document.querySelector('.chatarea-main');
let chatareaouter = document.querySelector('.chatarea-outer');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

function showusermsg(usermsg){
    let output = '';
    output += <div class="chatarea-inner user">${usermsg}</div>;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}
recognition.onresult=function(e){
    let resultIndex = e.resultIndex;
    let transcript = e.results[resultIndex][0].transcript;
    chatareamain.appendChild(showusermsg(transcript));
  
   console.log(transcript);
}

mic.addEventListener("click", function(){
    recognition.start();
    console.log("Activated");
})




