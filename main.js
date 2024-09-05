/* cart js */

// After clicking on icon-cart, the cart window will show
let iconCart = document.querySelector('.icon-cart');
let body = document.querySelector('body');
iconCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
});

// After clicking on close, it will hide
let closeCart = document.querySelector('.close');
closeCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
}); 

// To show alert and add product to cart
let cart = [];
 document.querySelector('.listproduct').addEventListener('click', (event) => {
    let positionClick = event.target;
    if (positionClick.classList.contains('cart_btn')) { 
        alert(productName + ' added to cart!');
        addToCart(positionClick.closest('.product')); 
    }
});

function addToCart(productElement) {
    let name = productElement.querySelector('.name').innerText;
    let price = productElement.querySelector('.price').innerText;
    let image = productElement.querySelector('.image img').src;
    let quantity = 1;

    cart.push({ name, price, image, quantity });
    updateCart();
}

function updateCart() {
    let listCart = document.querySelector('.listCart');
    listCart.innerHTML = '';
    cart.forEach((product, index) => {
        listCart.innerHTML +=  /*`
        <div class="item">
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
            </div>`;*/

            `
            <div class="item">
                <div class="image">
                    <img src="${product.image}" alt="">
                </div>
                <div class="name">${product.name}</div>
                <div class="totalPrice">${product.price}</div>
                <div class="quantity">
                    <span class="minus" data-index="${index}"><</span>
                    <span>${product.quantity}</span>
                    <span class="plus" data-index="${index}">></span>
                </div>
            </div>`;

        });

    //To decrease the quantity 
    document.querySelectorAll('.quantity .minus').forEach(button => {
        button.addEventListener('click', (event) => {
            let index = event.target.dataset.index;
            if (cart[index].quantity > 1) {
                cart[index].quantity--;
                updateCart();
            }
        });
    });

    // To increase the quantity
    document.querySelectorAll('.quantity .plus').forEach(button => {
        button.addEventListener('click', (event) => {
            let index = event.target.dataset.index;
            cart[index].quantity++;
            updateCart();
        });
    });
}
/*--wishlist js--*/

document.querySelector(".Wishlist_btn").addEventListener("click", function () {
    addToWishlist(product);
});
function addToWishlist(product) {
    const wishlistItemHTML = `
        <div class="wishlist-item">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <button class="buy-now-btn"><i class="fa-solid fa-bag-shopping"></i>Buy Now</button>
        </div>
    `;
    document.getElementById("wishlistItems").insertAdjacentHTML('beforeend', wishlistItemHTML);
}