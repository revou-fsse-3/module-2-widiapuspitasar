
  // Menambahkan alert ketika submit selesai dan mengkosongkan form 
  function submitForm() {
    alert("Thank you for submitting the form! 😊");
    document.getElementById("fullName").value = ""; 
    document.getElementById("email").value = "";
    document.getElementById("yes").checked = true; 
    document.getElementById("no").checked = false;
    document.getElementById("anime").checked = false;
    document.getElementById("manga").checked = false;
    document.getElementById("news").checked = false;
    document.querySelector("textarea").value = ""; 
    document.getElementById("photo").value = ""; 
  }
 
  // menu hamburger
  document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("menu-icon");
    const menuList = document.getElementById("menu-list");
  
    menuIcon.addEventListener("click", () => {
      menuList.classList.toggle("hidden"); 
    });
  });


// dark mode
const darkModeToggle = document.getElementById("checkbox");
const body = document.body;
const isDarkMode = localStorage.getItem("darkMode");

function setDarkMode(isDark) {
  if (isDark) {
    body.classList.add("dark");
    darkModeToggle.checked = true;
  } else {
    body.classList.remove("dark");
    darkModeToggle.checked = false;
  }
}

setDarkMode(isDarkMode === "true");

darkModeToggle.addEventListener("change", function() {
  if (this.checked) {
    body.classList.add("dark");
    localStorage.setItem("darkMode", true); 
  } else {
    body.classList.remove("dark");
    localStorage.setItem("darkMode", false); 
  }
});


  
  
  