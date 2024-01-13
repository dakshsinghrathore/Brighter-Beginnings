var liElements = document.querySelectorAll('.scroll-li');
var navElement = document.querySelector('.scroll-nav');
var navButtonElements = document.querySelectorAll('.nav-button');
var loginButtonElements = document.querySelector('.login')
var registerButtonElements = document.querySelector('.register');
  var initialOffsetTop = liElements[0].offsetTop;

  window.addEventListener('scroll', function () {
    // Check if the scroll position is greater than the initial position
   
    if (window.scrollY > initialOffsetTop) {
      // Apply Tailwind CSS classes for scrolled state
   
      liElements.forEach(function (li) {
        li.classList.add();
        li.classList.remove('border-transparent');
        
    
        var aElement = li.querySelector('.custom-color');
        if (aElement) {
          aElement.classList.add('text-black' , 'font-bold'); // Change to the desired color class
          aElement.classList.remove('text-gray-500');
          
        }
      });
      navElement.classList.add('bg-white');
      navButtonElements.forEach(function (navButtonElement) {
        navButtonElement.classList.add('border-gray-600');
      });
      loginButtonElements.classList.add('boder-theme');
      loginButtonElements.classList.add('text-theme');
      loginButtonElements.classList.add('hover:text-white');
      registerButtonElements.classList.add('hover:text-theme');
      
    } else {
      // Apply Tailwind CSS classes for normal state
      liElements.forEach(function (li) {
        li.classList.remove();
        li.classList.add('border-transparent');
        
        // Change color of specific <a> element within the <li>
        var aElement = li.querySelector('.custom-color');
        if (aElement) {
          aElement.classList.remove('text-white' , 'font-extrabold');
          aElement.classList.add('text-gray-500');
        }
      });
      navElement.classList.remove('bg-white');
      navButtonElements.forEach(function (navButtonElement) {
        navButtonElement.classList.remove('border-gray-600');
      });
      loginButtonElements.classList.remove('text-white');
      
    }
  });