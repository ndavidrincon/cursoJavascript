const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart")
const burgerIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const aside = document.querySelector(".product-detail");
const extendedProductDetail = document.querySelector(".extended-product-detail");
const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleDesktopMenu);
burgerIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);


function toggleDesktopMenu () {
    const isMenuCarritoIconClosed = menuCarritoIcon.classList.contains("inactive");

    if (!isMenuCarritoIconClosed) {
        aside.classList.add("inactive")
    };

    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu () {
    const isMenuCarritoIconClosed = menuCarritoIcon.classList.contains("inactive");

    if (!isMenuCarritoIconClosed) {
        aside.classList.add("inactive")
    }

    mobileMenu.classList.toggle("inactive");
}

function toggleCarritoAside () {
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add("inactive")
    };
    aside.classList.toggle("inactive");
}

const productList = [];
productList.push ({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=600"
});

productList.push ({
    name: "Tv",
    price: 300,
    image: "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=600"
});

productList.push ({
    name: "Compu",
    price: 620,
    image: "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=600"
});

function renderProducts (arr) {
    for (product of arr) {

        const productCard=document.createElement('div');
        productCard.classList.add('product-card');

        productImg = document.createElement('img');
        productImg.setAttribute('src',product.image);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerText ='$'+product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
        productInfoDiv.append(productPrice, productName);

        const productInfoFigure = document.createElement('figure');

        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');

        productInfoFigure.appendChild(productImgCart);
        productInfo.append(productInfoDiv, productInfoFigure);
        productCard.append(productImg, productInfo);
        cardsContainer.appendChild(productCard);       
    };
}

renderProducts(productList)
