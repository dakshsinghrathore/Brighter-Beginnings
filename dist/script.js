// m2 content toggle 
document.querySelector("#content").addEventListener("click", function (e) {
    let clickedElement = e.target;
    
    if (
      clickedElement.parentElement.firstElementChild === clickedElement && 
      clickedElement.parentElement.tagName === 'LI' && clickedElement.parentElement.parentElement.id === 'content'
    ) {
      let ele = clickedElement.nextElementSibling;
      let topicName = clickedElement;
  
      ele.classList.toggle("afterClick");
  
      if (ele.classList.contains("afterClick")) {
        setTimeout(function () {
          topicName.style.transition = "border-radius 0.1s";
          topicName.style.borderRadius = "0.75rem 0.75rem 0 0";
        }, 0);
      } else {
        setTimeout(function () {
          topicName.style.transition = "border-radius 0.1s";
          topicName.style.borderRadius = "0.75rem";
        }, 600);
      }
    }
  });
