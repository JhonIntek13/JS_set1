function setElementStyles(color = 'black', fontSize = '16px', backgroundColor = 'white') {
    this.style.color = color;
    this.style.fontSize = fontSize;
    this.style.backgroundColor = backgroundColor;
  }
  
  var element1 = document.getElementById('element1');
  setElementStyles.call(element1, 'red', '20px', 'lightblue');
  
  var element2 = document.getElementById('element2');
  setElementStyles.call(element2, 'green', '24px');
  

  var element3 = document.getElementById('element3');
  setElementStyles.call(element3);
  