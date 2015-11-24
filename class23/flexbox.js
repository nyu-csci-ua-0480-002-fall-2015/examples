(function() {

  var count = 0;
  document.addEventListener('DOMContentLoaded', main);
  
  function main() {
    var divSizeSlider = document.querySelector('#divSize');
    var addDivButton = document.querySelector('#addDiv');
    var removeDivButton = document.querySelector('#removeDiv');
    divSizeSlider.value = 150;
    divSizeSlider.addEventListener('input', changeSize);
    addDivButton.addEventListener('click', addDiv);
    removeDivButton.addEventListener('click', removeDiv);

    for(var i = 0; i < 5; i++) {
      addDiv();
    }
  }

  function changeSize(evt) {
    updateDivs("width", this.value + "px");
    updateDivs("height", this.value + "px");
  }
  
  function updateDivs(prop, val) {
    var container = document.querySelector("#container");
    var items = document.querySelectorAll(".item");
    Array.prototype.forEach.call(items, function(ele) {
      ele.style[prop] = val;
    });
  }

  function removeDiv(evt) {
    if(count > 0) {
      var container = document.querySelector("#container");
      var div = document.querySelector("#item" + count);
      count = count - 1;
      container.removeChild(div);
    }
  }
  
  function addDiv(evt) {

    var container = document.querySelector("#container");
    var size = document.querySelector('#divSize').value;
    var div = document.createElement('div');

    count = count + 1;
    div.id = "item" + count;
    div.classList.add('item');
    div.style.width = size + "px";
    div.style.height = size + "px";

    container.appendChild(div).textContent = count + ' ' + generateSentence(1, 1, 1, 4); 
  }

  function generateSentence(minWords, maxWords, minLength, maxLength) {
    minWords = minWords || 5;
    maxWords = maxWords || 12;
    minLength = minLength || 1;
    maxLength = maxLength || 8;
    var numWords = randInt(minWords, maxWords);
    var sentence = '';
    for(var i = 0; i < numWords; i ++) {
      sentence += generateWord(minLength, maxLength) + ' '; 
    }
    return sentence;
  }

  /* terrible idea; just use explicit charset instead */
  function generateWord(minLength, maxLength,  startChar, endChar, exclude) {
    startChar = startChar || 127812; // 97; //128512;
    endChar = endChar || 127867;// 122; // 128591;
    exclude = exclude || [127818, 127824];
    var numChars = randInt(minLength, maxLength);
    var s = '';
    for(var i = 0; i < numChars; i++) {
      var c;
      do {
        c = String.fromCodePoint(randInt(startChar, endChar)); 
      } while (exclude.indexOf(c) != -1);
      s += c;
    }
    return s;
  }

  function randInt(minInt, maxInt) {
    return Math.floor(Math.random() * (maxInt - minInt + 1) + minInt); 
  
  }
})();
