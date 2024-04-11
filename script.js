searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
  searchForm.classList.toggle('active');
}

let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () =>{
  loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () =>{
  loginForm.classList.remove('active');
}

window.onscroll = () =>{

  searchForm.classList.remove('active');

  if(window.scrollY > 80){
    document.querySelector('.header .header-2').classList.add('active');
  }else{
    document.querySelector('.header .header-2').classList.remove('active');
  }

}

window.onload = () =>{

  if(window.scrollY > 80){
    document.querySelector('.header .header-2').classList.add('active');
  }else{
    document.querySelector('.header .header-2').classList.remove('active');
  }

  fadeOut();

}

function loader(){
  document.querySelector('.loader-container').classList.add('active');
}

function fadeOut(){
  setTimeout(loader, 4000);
}

var swiper = new Swiper(".books-slider", {
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".featured-slider", {
  spaceBetween: 10,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

var swiper = new Swiper(".arrivals-slider", {
  spaceBetween: 10,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".reviews-slider", {
  spaceBetween: 10,
  grabCursor:true,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".blogs-slider", {
  spaceBetween: 10,
  grabCursor:true,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
// script.js

// Function to add items to the cart
function addToCart(bookId, title, price) {
    // Check if there is a cart in localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the book is already in the cart
    let existingItem = cart.find(item => item.bookId === bookId);

    if (existingItem) {
        // If the item exists, increment the quantity
        existingItem.quantity += 1;
    } else {
        // If the item doesn't exist, add it to the cart
        cart.push({
            bookId: bookId,
            title: title,
            price: price,
            quantity: 1
        });
    }

    // Save the updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Function to display cart items on the cart page
function displayCart() {
    // Check if there is a cart in localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Select the container to display cart items
    let cartContainer = document.querySelector('.cart');

    // Clear the previous content
    cartContainer.innerHTML = '';

    // Loop through each item in the cart and display it
    cart.forEach(item => {
        // Create a div for each cart item
        let cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        // Display item details
        cartItem.innerHTML = `
            <img src="https://example.com/book-image.jpg" alt="${item.title} Image">
            <div class="item-details">
                <h3>${item.title}</h3>
                <p>Price: $${item.price.toFixed(2)}</p>
                <p>Quantity: ${item.quantity}</p>
                <p>Total: $${(item.price * item.quantity).toFixed(2)}</p>
            </div>
        `;

        // Append the cart item to the container
        cartContainer.appendChild(cartItem);
    });

    // Display the total price
    let totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    let totalElement = document.createElement('div');
    totalElement.classList.add('total');
    totalElement.innerHTML = `<h3>Total Price: $${totalPrice.toFixed(2)}</h3>`;
    cartContainer.appendChild(totalElement);

    // Add a checkout button
    let checkoutButton = document.createElement('div');
    checkoutButton.classList.add('checkout-btn');
    checkoutButton.innerHTML = `<a href="#">Proceed to Checkout</a>`;
    cartContainer.appendChild(checkoutButton);
}

// Call displayCart() when the cart page is loaded
document.addEventListener('DOMContentLoaded', displayCart);

// JavaScript to handle form submission
document.addEventListener('DOMContentLoaded', function() {
  var productForms = document.querySelectorAll('form');
  productForms.forEach(function(form) {
      form.addEventListener('submit', function(event) {
          event.preventDefault(); // Prevent default form submission

          // Collect form data
          var formData = new FormData(form);
          var queryString = new URLSearchParams(formData).toString();

          // Redirect to checkout page with query string
          window.location.href = './checkout.html?' + queryString;
      });
  });
});
