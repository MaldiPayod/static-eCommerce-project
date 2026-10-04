/* for login page to work kumyare, wala real database cuz we fake it using localStorage 
(the same browser storage we used for the cart) (astra-accounts & astra-session) */


/* @@@@@@@@@@@@@@@@@ 1. GRAB THE HTML ELEMENTS @@@@@@@@@@@@@@@@@ */
const tabLogin = document.getElementById("tabLogin");
const tabSignup = document.getElementById("tabSignup");

const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

const loginError = document.getElementById("loginError");
const signupError = document.getElementById("signupError");

const goSignup = document.getElementById("goSignup");
const goLogin = document.getElementById("goLogin");


/* @@@@@@@@@@@@@@@@@ 2. SWITCHING BETWEEN LOGIN/SIGNUP @@@@@@@@@@@@@@@@@
   ito magtatago/maglalabas ng tab */
function showLogin() {
  loginForm.hidden = false;
  signupForm.hidden = true;
  tabLogin.classList.add("active");
  tabSignup.classList.remove("active");
  loginError.textContent = "";
}

function showSignup() {
  loginForm.hidden = true;
  signupForm.hidden = false;
  tabSignup.classList.add("active");
  tabLogin.classList.remove("active");
  signupError.textContent = "";
}

tabLogin.addEventListener("click", showLogin);
tabSignup.addEventListener("click", showSignup);
goSignup.addEventListener("click", showSignup);   // mga button link
goLogin.addEventListener("click", showLogin);     


/* @@@@@@@@@@@@@@@@@ 3. NAGVAVALIDATE @@@@@@@@@@@@@@@@@ */

// a simple check for "does this look like an email?"
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// read the saved accounts list,, or an empty list if wala pa laman
function loadAccounts() {
  try {
    const saved = JSON.parse(localStorage.getItem("astra-accounts"));
    return Array.isArray(saved) ? saved : [];
  } catch (error) {
    return [];
  }
}

function saveAccounts(accounts) {
  localStorage.setItem("astra-accounts", JSON.stringify(accounts));
}

// after successful login/signup, tp sa main dashboard
function startSession(account) {
  localStorage.setItem("astra-session", JSON.stringify({
    firstName: account.firstName,
    email: account.email
  }));
  window.location.href = "0068PayodMyWebPage.html";
}


/* @@@@@@@@@@@@@@@@@ 4. SIGN UP @@@@@@@@@@@@@@@@@ */
signupForm.addEventListener("submit", (event) => {
  event.preventDefault();  // stop the browser from reloading the page

  const data = new FormData(signupForm);
  const firstName = data.get("firstName").trim();
  const lastName = data.get("lastName").trim();
  const email = data.get("email").trim().toLowerCase();
  const password = data.get("password");
  const confirmPassword = data.get("confirmPassword");

  // check each field. stop at the first problem and tell the user what to fix.
  if (firstName === "" || lastName === "") {
    return (signupError.textContent = "Enter your first and last name.");
  }
  if (!isValidEmail(email)) {
    return (signupError.textContent = "Enter a valid email address.");
  }
  if (password.length < 6) {
    return (signupError.textContent = "Password must be at least 6 characters.");
  }
  if (confirmPassword !== password) {
    return (signupError.textContent = "Passwords do not match.");
  }

  const accounts = loadAccounts();
  const alreadyExists = accounts.some((account) => account.email === email);
  if (alreadyExists) {
    return (signupError.textContent = "That email is already registered. Try logging in instead.");
  }

  // if all goods: save the new account, then log them in right away
  const newAccount = { firstName, lastName, email, password };
  accounts.push(newAccount);
  saveAccounts(accounts);

  signupError.textContent = "";
  startSession(newAccount);
});


/* @@@@@@@@@@@@@@@@@ 5. LOG IN @@@@@@@@@@@@@@@@@ */
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(loginForm);
  const email = data.get("email").trim().toLowerCase();
  const password = data.get("password");

  if (!isValidEmail(email) || password === "") {
    return (loginError.textContent = "Enter your email and password.");
  }

  const accounts = loadAccounts();
  const match = accounts.find((account) => account.email === email && account.password === password);

  if (!match) {
    return (loginError.textContent = "Invalid email or password. No account yet? Sign up instead.");
  }

  loginError.textContent = "";
  startSession(match);
});