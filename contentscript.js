chrome.extension.onMessage.addListener(function(message, sender, response) {
  switch(message.type) {
    case "fontchange":
      document.body.style.fontFamily = message.font;
      break;
    default:
      break;
  }
});
