// Loader
window.addEventListener("load", () => {
  const loader = document.getElementById("stackly-loader");

  setTimeout(() => {
    loader.classList.add("hide");
  }, 1500);
});

// Mobile Menu
// function toggleMenu() {
//   const navLinks = document.getElementById("navLinks");
//   const menuBtn = document.querySelector(".menu");

//   navLinks.classList.toggle("active");

//   if (navLinks.classList.contains("active")) {
//     menuBtn.innerHTML = "✖";
//   } else {
//     menuBtn.innerHTML = "☰";
//   }
// }

function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    const menuBtn = document.querySelector(".menu");
    const body = document.body;

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuBtn.innerHTML = "✖";
        body.style.overflow = "hidden";
    } else {
        menuBtn.innerHTML = "☰";
        body.style.overflow = "auto";
    }
}

// Scroll to plans
function scrollPlans() {
  document.getElementById("plans").scrollIntoView({
    behavior: "smooth"
  });
}

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Close menu after clicking link
const navItems = document.querySelectorAll("#navLinks a");

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    document.getElementById("navLinks").classList.remove("active");
    document.querySelector(".menu").innerHTML = "☰";
    document.body.style.overflow = "auto";
  });
});