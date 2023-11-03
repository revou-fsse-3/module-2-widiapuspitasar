/*let slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
  } */

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
  
  document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("menu-icon");
    const menuList = document.getElementById("menu-list");
  
    menuIcon.addEventListener("click", () => {
      menuList.classList.toggle("hidden"); // Menambah atau menghapus kelas "show"
    });
  });


  
  
  
  