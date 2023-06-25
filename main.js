const accordionContent = document.querySelectorAll(".accordion-content");

accordionContent.forEach((item, index) => {
    let header = item.querySelector("header");
    header.addEventListener("click", () =>{
        item.classList.toggle("open");

        let description = item.querySelector(".list");
        if(item.classList.contains("open")){
            description.style.height = `${description.scrollHeight}px`; //scrollHeight property returns the height of an element including padding , but excluding borders, scrollbar or margin
            item.querySelector("i").classList.replace("fa-plus", "fa-minus");
        }else{
            description.style.height = "0px";
            item.querySelector("i").classList.replace("fa-minus", "fa-plus");
        }
        removeOpen(index); //calling the funtion and also passing the index number of the clicked header
    })
})

function removeOpen(index1){
    accordionContent.forEach((item2, index2) => {
        if(index1 != index2){
            item2.classList.remove("open");

            let des = item2.querySelector(".list");
            des.style.height = "0px";
            item2.querySelector("i").classList.replace("fa-minus", "fa-plus");
        }
    })
}

const links = document.querySelector('.primary-nav');
const menuOpen = document.querySelector('.menu-open');
const menuClose = document.querySelector('.menu-close');

menuOpen.addEventListener('click', () => {
    links.classList.add("active");
    menuOpen.classList.add("active");
    menuClose.classList.add("active");
});

menuClose.addEventListener('click', () => {
    links.classList.remove("active");
    menuOpen.classList.remove("active");
    menuClose.classList.remove("active");
})


document.addEventListener("click", e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]")
    if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return

    let currentDropdown
    if (isDropdownButton) {
    currentDropdown = e.target.closest("[data-dropdown]")
    currentDropdown.classList.toggle("active")
    }

    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
    if (dropdown === currentDropdown) return
    dropdown.classList.remove("active")
    })
})

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}


function scrollToTop() {
  document.documentElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

window.addEventListener('scroll', function() {
    const closeIcon = document.querySelector('.icon-menu.menu-close');
    const offset = 100; // Adjust this value as needed
  
    if (window.pageYOffset > offset) {
      closeIcon.classList.add('sticky');
    } else {
      closeIcon.classList.remove('sticky');
    }
  });

  window.addEventListener('scroll', function() {
    const openIcon = document.querySelector('.icon-menu.menu-open');
    const offset = 100; // Adjust this value as needed
  
    if (window.pageYOffset > offset) {
      openIcon.classList.add('sticky');
    } else {
      openIcon.classList.remove('sticky');
    }
  });
  
  const slider = new A11YSlider(document.querySelector(".grid-container"), {
    adaptiveHeight: false,
    dots: true,
    centerMode: true,
    arrows: false,
    responsive: {
      480: {
        dots: false, // dots enabled 1280px and up
      },
    },
  });
  