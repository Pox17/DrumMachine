function buttonClicked(event) {
    clickedButton = event.target;
    innerDot = clickedButton.children[0];
    innerDot.classList.toggle("selected-dot");
  }
  allKeys = document.querySelectorAll(".button");
  
  function assignClick(item) {
    item.onclick = buttonClicked;
  }
  
  allKeys.forEach(assignClick);
  
  
  
  function turnOnAll() {
    dots = document.querySelectorAll(".unselected-dot")
        dots.forEach(function (item) {
            item.classList.add("selected-dot")
        }
                    
                    )
  }
  
  function turnOffAll() {
    dots = document.querySelectorAll(".unselected-dot")
        dots.forEach(function (item) {
            item.classList.remove("selected-dot")
        }
                    
                    )
  }
  ON.onclick = turnOnAll;
  OFF.onclick = turnOffAll;