/* ---------- 1. PRODUCT DATA ---------- */
const products = [
  // ----- TOPS -----
  {
    id: "top-1", category: "tops", name: "Nova Gingham Blouse", price: 799,
    image: "images/products/top-1.jpg",
    description: "A checked babydoll blouse with puff sleeves, a rounded collar, and a tie detail at the front.",
    sizes: ["XS", "S", "M", "L"],
    colors: [{ name: "Blue check", hex: "#6f84a3" }, { name: "Grey check", hex: "#9ea3ab" }]
  },
  {
    id: "top-2", category: "tops", name: "Luna Striped Button-Up", price: 899,
    image: "images/products/top-2.jpg",
    description: "A fitted short-sleeve shirt with fine stripes, chest pockets, and a classic collar.",
    sizes: ["XS", "S", "M", "L"],
    colors: [{ name: "Cocoa stripe", hex: "#6b4a3c" }, { name: "Mocha", hex: "#8b6b5a" }]
  },
  {
    id: "top-3", category: "tops", name: "Dusk Stripe Long Sleeve", price: 699,
    image: "images/products/top-3.jpg",
    description: "A long-sleeve top with bold horizontal stripes and a wide scoop neckline.",
    sizes: ["XS", "S", "M", "L"],
    colors: [{ name: "Navy stripe", hex: "#3a4560" }, { name: "Black stripe", hex: "#2a2a2e" }]
  },
  {
    id: "top-4", category: "tops", name: "Vega Cat Baby Tee", price: 599,
    image: "images/products/top-4.jpg",
    description: "A cropped baby tee with a cat-wearing-glasses print on the front. Easy to pair with anything.",
    sizes: ["XS", "S", "M", "L"],
    colors: [{ name: "White", hex: "#fbfaf7" }, { name: "Sky", hex: "#dde7f1" }]
  },
  {
    id: "top-5", category: "tops", name: "Stella Ruched Cami", price: 749,
    image: "images/products/top-5.jpg",
    description: "A sleeveless cami with a ruched bust, delicate trim, and a small bow.",
    sizes: ["XS", "S", "M", "L"],
    colors: [{ name: "Dusty blue", hex: "#8797b2" }, { name: "Slate", hex: "#5d6b7a" }]
  },
  {
    id: "top-6", category: "tops", name: "Sol Denim Shirt", price: 999,
    image: "images/products/top-6.jpg",
    description: "A fitted short-sleeve button-up in a denim finish, with flap pockets on the chest.",
    sizes: ["XS", "S", "M", "L"],
    colors: [{ name: "Denim blue", hex: "#5f7ea6" }, { name: "Washed grey", hex: "#8a97a8" }]
  },
 
  // ----- BOTTOMS -----
  {
    id: "bottom-1", category: "bottoms", name: "Orion Lace Wrap Jeans", price: 1299,
    image: "images/products/bottom-1.jpg",
    description: "Washed wide-leg jeans with a lace wrap overlay tied at the waist and star details on the legs.",
    sizes: ["S", "M", "L", "XL"],
    colors: [{ name: "Washed blue", hex: "#6f90b8" }, { name: "Light wash", hex: "#a9bfd3" }]
  },
  {
    id: "bottom-2", category: "bottoms", name: "Lyra Barrel Jeans", price: 1199,
    image: "images/products/bottom-2.jpg",
    description: "Dark barrel-leg jeans with a relaxed, roomy fit and a high waist.",
    sizes: ["S", "M", "L", "XL"],
    colors: [{ name: "Indigo", hex: "#26365e" }, { name: "Black", hex: "#222222" }]
  },
  {
    id: "bottom-3", category: "bottoms", name: "Comet Denim Jorts", price: 999,
    image: "images/products/bottom-3.jpg",
    description: "Knee-length denim jorts with a faded finish and a loose fit.",
    sizes: ["XS", "S", "M", "L"],
    colors: [{ name: "Deep blue", hex: "#2f4f86" }, { name: "Faded blue", hex: "#6f8bb3" }]
  },
  {
    id: "bottom-4", category: "bottoms", name: "Nebula Camo Shorts", price: 899,
    image: "images/products/bottom-4.jpg",
    description: "Camo-print shorts with a ruffled mesh waistband and a graphic patch on the leg.",
    sizes: ["XS", "S", "M", "L"],
    colors: [{ name: "Blue camo", hex: "#7d90a8" }, { name: "Grey camo", hex: "#8c8f94" }]
  },
  {
    id: "bottom-5", category: "bottoms", name: "Andromeda Plaid Skirt", price: 799,
    image: "images/products/bottom-5.jpg",
    description: "An asymmetrical plaid skirt with draped folds at the front.",
    sizes: ["XS", "S", "M", "L"],
    colors: [{ name: "Mauve plaid", hex: "#a8909e" }, { name: "Grey plaid", hex: "#8a8794" }]
  },
  {
    id: "bottom-6", category: "bottoms", name: "Cosmo Pleated Denim Skirt", price: 699,
    image: "images/products/bottom-6.jpg",
    description: "A denim mini skirt with a pleated, flared hem. Light and easy to move in.",
    sizes: ["XS", "S", "M", "L"],
    colors: [{ name: "Light wash", hex: "#a9c4e0" }, { name: "Mid wash", hex: "#6f93c0" }]
  }
];


/* ---------- 2. GRAB THE HTML ELEMENTS ----------
   getElementById finds an element by its id="..." in index.html. */
const topsGrid = document.getElementById("topsGrid");
const bottomsGrid = document.getElementById("bottomsGrid");

// navbar cart
const cartBtn = document.getElementById("cartBtn");
const cartCount = document.getElementById("cartCount");

// cart panel
const cartOverlay = document.getElementById("cartOverlay");
const cartItemsEl = document.getElementById("cartItems");
const cartEmpty = document.getElementById("cartEmpty");
const cartTotal = document.getElementById("cartTotal");
const checkoutBtn = document.getElementById("checkoutBtn");

// product details popup
const productOverlay = document.getElementById("productOverlay");
const pmImage = document.getElementById("pmImage");
const pmName = document.getElementById("pmName");
const pmPrice = document.getElementById("pmPrice");
const pmDesc = document.getElementById("pmDesc");
const pmSizes = document.getElementById("pmSizes");
const pmColors = document.getElementById("pmColors");
const pmColorName = document.getElementById("pmColorName");
const pmAddBtn = document.getElementById("pmAddBtn");

// checkout popup
const checkoutOverlay = document.getElementById("checkoutOverlay");
const checkoutView = document.getElementById("checkoutView");
const successView = document.getElementById("successView");
const checkoutForm = document.getElementById("checkoutForm");
const coSummary = document.getElementById("coSummary");
const formError = document.getElementById("formError");
const successMsg = document.getElementById("successMsg");

// toast message
const toast = document.getElementById("toast");


/* ---------- 3. HELPER FUNCTIONS ---------- */

// 1199 -> "₱1,199"
function formatPrice(amount) {
  return "₱" + amount.toLocaleString("en-PH");
}

// Find a product in the list using its id
function getProduct(id) {
  return products.find((product) => product.id === id);
}

function loadCart() {
  try {
    const saved = JSON.parse(localStorage.getItem("astra-cart"));
    if (!Array.isArray(saved)) return [];
    return saved.filter((item) => getProduct(item.id) && item.qty > 0);
  } catch (error) {
    return [];   // nothing saved yet, or the saved data is broken
  }
}

function saveCart() {
  try {
    localStorage.setItem("astra-cart", JSON.stringify(cart));
  } catch (error) {
    // Storage can be blocked (private mode). The cart still works, it just won't be remembered.
  }
}

let cart = loadCart();

function getCartTotal() {
  return cart.reduce((sum, item) => sum + getProduct(item.id).price * item.qty, 0);
}

// pop up small message at the bottom for 3 seconds
let toastTimer;
function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 3000);
}


/* ---------- 4. POPUPS ----------
   A popup is shown when its ".overlay" has the class "open"
   (the CSS handles the fade and zoom). */
function openOverlay(overlay) {
  overlay.classList.add("open");
  overlay.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");   // stop the page behind from scrolling

  const closeButton = overlay.querySelector(".close-btn");
  if (closeButton) closeButton.focus();
}

function closeOverlay(overlay) {
  overlay.classList.remove("open");
  overlay.setAttribute("aria-hidden", "true");

  // only unlock scrolling if no other popup is still open
  if (!document.querySelector(".overlay.open")) {
    document.body.classList.remove("no-scroll");
  }
}

// every popup closes when you click the dark area outside it or any [data-close] button
document.querySelectorAll(".overlay").forEach((overlay) => {
  overlay.addEventListener("click", (event) => {
    if (event.target === overlay || event.target.closest("[data-close]")) {
      closeOverlay(overlay);
    }
  });
});

// ...and pag you press the Escape key
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    document.querySelectorAll(".overlay.open").forEach(closeOverlay);
  }
});


/* ---------- 5. SHOW THE PRODUCT CARDS ----------
   For every product, build a card and put it in the right grid. */
function renderProducts() {
  products.forEach((product) => {
    const grid = product.category === "tops" ? topsGrid : bottomsGrid;

    grid.insertAdjacentHTML("beforeend", `
      <button class="product-card" type="button" data-id="${product.id}">
        <span class="card-img"><img src="${product.image}" alt="${product.name}" loading="lazy"></span>
        <span class="card-name">${product.name}</span>
        <span class="card-price">${formatPrice(product.price)}</span>
      </button>
    `);
  });
}

// one click listener per grid (instead of one per card).
function handleCardClick(event) {
  const card = event.target.closest(".product-card");
  if (card) openProductModal(card.dataset.id);
}
topsGrid.addEventListener("click", handleCardClick);
bottomsGrid.addEventListener("click", handleCardClick);


/* ---------- 6. PRODUCT DETAILS POPUP ---------- */
let currentProduct = null;
let selectedSize = null;
let selectedColor = null;

function openProductModal(id) {
  currentProduct = getProduct(id);
  selectedSize = currentProduct.sizes[0];        // pick the first size + color by default
  selectedColor = currentProduct.colors[0].name;

  pmImage.src = currentProduct.image;
  pmImage.alt = currentProduct.name;
  pmName.textContent = currentProduct.name;
  pmPrice.textContent = formatPrice(currentProduct.price);
  pmDesc.textContent = currentProduct.description;

  renderOptions();
  openOverlay(productOverlay);
}

// draw the size buttons and color circles.the selected ones get the class "selected".
function renderOptions() {
  pmSizes.innerHTML = currentProduct.sizes.map((size) => `
    <button type="button" class="opt-btn ${size === selectedSize ? "selected" : ""}"
            data-size="${size}" aria-pressed="${size === selectedSize}">${size}</button>
  `).join("");

  pmColors.innerHTML = currentProduct.colors.map((color) => `
    <button type="button" class="swatch ${color.name === selectedColor ? "selected" : ""}"
            data-color="${color.name}" style="background:${color.hex}"
            aria-label="${color.name}" aria-pressed="${color.name === selectedColor}"></button>
  `).join("");

  pmColorName.textContent = selectedColor;
}

pmSizes.addEventListener("click", (event) => {
  const button = event.target.closest("[data-size]");
  if (!button) return;
  selectedSize = button.dataset.size;
  renderOptions();
});

pmColors.addEventListener("click", (event) => {
  const button = event.target.closest("[data-color]");
  if (!button) return;
  selectedColor = button.dataset.color;
  renderOptions();
});

pmAddBtn.addEventListener("click", () => {
  addToCart(currentProduct.id, selectedSize, selectedColor);
  closeOverlay(productOverlay);
});


/* ---------- 7. THE CART ---------- */

// Add one item. If the same product + size + color is already there,
// just increase its qty. Otherwise add a new row.
function addToCart(id, size, color) {
  const existing = cart.find((item) => item.id === id && item.size === size && item.color === color);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: id, size: size, color: color, qty: 1 });
  }

  saveCart();
  renderCart();
  bumpCartBadge();
  showToast("Added to cart");
}

// pop animation on the number bubble
function bumpCartBadge() {
  cartCount.classList.remove("bump");
  void cartCount.offsetWidth;   // forces the browser to restart the animation
  cartCount.classList.add("bump");
}

// redraw everything that shows the cart: the number, the list, and the total
function renderCart() {
  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  cartCount.textContent = totalQty;
  cartCount.classList.toggle("show", totalQty > 0);

  cartEmpty.hidden = cart.length > 0;

  cartItemsEl.innerHTML = cart.map((item, index) => {
    const product = getProduct(item.id);
    return `
      <li class="cart-item" data-index="${index}">
        <img class="ci-thumb" src="${product.image}" alt="${product.name}">

        <div class="ci-info">
          <p class="ci-name">${product.name}</p>
          <p class="ci-variant">Size ${item.size}, ${item.color}</p>
          <p class="ci-price">${formatPrice(product.price * item.qty)}</p>
        </div>

        <div class="ci-actions">
          <button class="ci-remove" type="button" data-action="remove" aria-label="Remove ${product.name}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/>
            </svg>
          </button>
          <div class="qty">
            <button type="button" data-action="minus" aria-label="Decrease quantity" ${item.qty === 1 ? "disabled" : ""}>−</button>
            <span>${item.qty}</span>
            <button type="button" data-action="plus" aria-label="Increase quantity">+</button>
          </div>
        </div>
      </li>
    `;
  }).join("");

  cartTotal.textContent = formatPrice(getCartTotal());
  checkoutBtn.disabled = cart.length === 0;
}

// one listener for the whole list (event delegation).
// checks which button was clicked (data-action) and which row it belongs to (data-index).
cartItemsEl.addEventListener("click", (event) => {
  const button = event.target.closest("[data-action]");
  if (!button) return;

  const index = Number(button.closest(".cart-item").dataset.index);
  const action = button.dataset.action;

  if (action === "plus") cart[index].qty += 1;
  if (action === "minus" && cart[index].qty > 1) cart[index].qty -= 1;
  if (action === "remove") cart.splice(index, 1);   // splice removes 1 item at that position

  saveCart();
  renderCart();
});

cartBtn.addEventListener("click", () => openOverlay(cartOverlay));


/* ---------- 8. CHECKOUT ---------- */
checkoutBtn.addEventListener("click", () => {
  if (cart.length === 0) return;

  closeOverlay(cartOverlay);
  checkoutForm.reset();
  formError.textContent = "";
  checkoutView.hidden = false;
  successView.hidden = true;

  // order summary inside the popup
  coSummary.innerHTML = cart.map((item) => {
    const product = getProduct(item.id);
    return `
      <div class="sum-row">
        <span>${product.name} (${item.size}, ${item.color}) × ${item.qty}</span>
        <span>${formatPrice(product.price * item.qty)}</span>
      </div>
    `;
  }).join("") + `
    <div class="sum-row sum-total"><span>Total</span><span>${formatPrice(getCartTotal())}</span></div>
  `;

  openOverlay(checkoutOverlay);
});

checkoutForm.addEventListener("submit", (event) => {
  event.preventDefault();   // stop the browser from reloading the page

  // read what the customer typed
  const data = new FormData(checkoutForm);
  const name = data.get("name").trim();
  const phone = data.get("phone").replace(/[\s-]/g, "");   // remove spaces and dashes
  const address = data.get("address").trim();
  const payment = data.get("payment");

  // check each field. stop at the first problem and tell the customer what to fix.
  if (name === "") return showFormError("Enter your full name.");
  if (!/^(09|\+639)\d{9}$/.test(phone)) return showFormError("Enter a valid mobile number, like 09171234567.");
  if (address.length < 10) return showFormError("Enter your complete delivery address.");

  // if all good: make an order number, show the success view, and empty the cart ulit
  const orderNo = "AST-" + Math.floor(100000 + Math.random() * 900000);
  const total = getCartTotal();
  const paymentLabel = payment === "gcash" ? "GCash" : "cash on delivery";

  successMsg.textContent =
    "Thank you, " + name.split(" ")[0] + "! Your order " + orderNo + " (" + formatPrice(total) +
    ") is confirmed. We will text " + phone + " to arrange delivery. Payment: " + paymentLabel + ".";

  cart = [];
  saveCart();
  renderCart();

  checkoutView.hidden = true;
  successView.hidden = false;
});

function showFormError(message) {
  formError.textContent = message;
}


/* ---------- 9. START EVERYTHING ---------- */
renderProducts();
renderCart();