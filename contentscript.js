chrome.extension.onMessage.addListener(function(message, sender, response) {
  alert("in the contentscrhitp");
  switch(message.type) {
    case "fontchange":
      alert("changindafont"+message.font);
      document.body.style.fontFamily = message.font;
      break;
    default:
      break;
  }
});
