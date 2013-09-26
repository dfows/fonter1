window.onload = function() {
  var fontDD = document.getElementById('fontOptions');
  document.getElementById('makeChanges').onclick = function() {
    chrome.extension.sendMessage({
      type: fontDD.options[fontDD.selectedIndex].value 
    });
  }
}
