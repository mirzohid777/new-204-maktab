// ====================
// DROB DOWN START
// ====================
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("close-btn");
const body = document.body;

function toggleMenu() {
  navMenu.classList.toggle("active");
  overlay.classList.toggle("active");
  closeBtn.classList.toggle("active");
  menuToggle.classList.toggle("hide");
  body.classList.toggle("menu-open");
}

function closeMenu() {
  navMenu.classList.remove("active");
  overlay.classList.remove("active");
  closeBtn.classList.remove("active");
  menuToggle.classList.remove("hide");
  body.classList.remove("menu-open");
}

menuToggle.addEventListener("click", toggleMenu);
overlay.addEventListener("click", closeMenu);
closeBtn.addEventListener("click", closeMenu);

const navLinks = document.querySelectorAll("nav a");
navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && navMenu.classList.contains("active")) {
    closeMenu();
  }
});

// ====================
// CONATCT START
// ====================
const form = document.getElementById("registrationForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = {
    child: {
      name: document.getElementById("childName").value,
      surname: document.getElementById("childSurname").value,
      age: document.getElementById("childAge").value,
    },
    father: {
      name: document.getElementById("fatherName").value,
      surname: document.getElementById("fatherSurname").value,
    },
    mother: {
      name: document.getElementById("motherName").value,
      surname: document.getElementById("motherSurname").value,
    },
    address: {
      district: document.getElementById("district").value,
      street: document.getElementById("address").value,
      city: "Toshkent",
    },
  };

  console.log("Ro'yxatdan o'tish ma'lumotlari:", formData);

  successMessage.classList.add("show");

  setTimeout(() => {
    form.reset();
    successMessage.classList.remove("show");
  }, 3000);
});
