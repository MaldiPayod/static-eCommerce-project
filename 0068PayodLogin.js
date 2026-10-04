/* ==========================================================
   0068PayodLogin.js

   This is a STATIC site, so there's no real server or database.
   To still make Sign Up / Log In "work", we fake it using
   localStorage (the same browser storage we used for the cart):

   - "astra-accounts"  -> an array of every account that signed up,
                          e.g. [{firstName, lastName, email, password}, ...]
   - "astra-session"   -> set when someone is currently logged in.
                          0068PayodMyWebPage.html checks for this
                          and redirects back here if it's missing.

   This is NOT secure (passwords aren't even encrypted), but it is
   enough to satisfy "validation only using javascript" for a demo.
   ========================================================== */


/* ---------- 1. GRAB THE HTML ELEMENTS ---------- */
const tabLogin = document.getElementById("tabLogin");
const tabSignup = document.getElementById("tabSignup");

const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

const loginError = document.getElementById("loginError");
const signupError = document.getElementById("signupError");

const goSignup = document.getElementById("goSignup");
const goLogin = document.getElementById("goLogin");


/* ---------- 2. SWITCHING BETWEEN "LOG IN" AND "SIGN UP" ----------
   Both forms already exist in the HTML. We just show one and hide
   the other, and move the "active" highlight on the tabs. */
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
goSignup.addEventListener("click", showSignup);   // the "Sign up here" link inside the login form
goLogin.addEventListener("click", showLogin);     // the "Log in" link inside the signup form


/* ---------- 3. HELPERS ---------- */

// a simple check for "does this look like an email?"
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// read the saved accounts list (or an empty list if walang pa laman)
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

// after a successful login/signup: remember who's logged in, then
// send them to the main site
function startSession(account) {
  localStorage.setItem("astra-session", JSON.stringify({
    firstName: account.firstName,
    email: account.email
  }));
  window.location.href = "0068PayodMyWebPage.html";
}


/* ---------- 4. SIGN UP ---------- */
signupForm.addEventListener("submit", (event) => {
  event.preventDefault();   // stop the browser from reloading the page

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

  // all good: save the new account, then log them in right away
  const newAccount = { firstName, lastName, email, password };
  accounts.push(newAccount);
  saveAccounts(accounts);

  signupError.textContent = "";
  startSession(newAccount);
});


/* ---------- 5. LOG IN ---------- */
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