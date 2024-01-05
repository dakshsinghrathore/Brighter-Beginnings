var liElements = document.querySelectorAll('.scroll-li');
  var initialOffsetTop = liElements[0].offsetTop;

  window.addEventListener('scroll', function () {
    // Check if the scroll position is greater than the initial position
    if (window.scrollY > initialOffsetTop) {
      // Apply Tailwind CSS classes for scrolled state
      liElements.forEach(function (li) {
        li.classList.add();
        li.classList.remove('border-transparent');
        
        // Change color of specific <a> element within the <li>
        var aElement = li.querySelector('.custom-color');
        if (aElement) {
          aElement.classList.add('text-white' , 'font-extrabold'); // Change to the desired color class
          aElement.classList.remove('text-gray-500');
        }
      });
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
    }
  });