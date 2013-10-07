chrome.extension.onMessage.addListener(function(request,sender,sendResponse) {
  switch(request.type) {
    case "helvetica":
      helvetique();
      break;
    case "courier":
      courieraza();
      break;
    case "comicsans":
      comicussansi();
      break;
    default:
      break;
  }
  return true;
});

var fontme = function(codeSnip) {
  chrome.tabs.getSelected(null,function(tab) {
    chrome.tabs.sendMessage(tab.id, {
      type: "fontchange",
      font: codeSnip
    });
  });
}

var helvetique = function() {
  return fontme("Helvetica Neue, Helvetica, Arial, sans-serif");
}

var courieraza = function() {
  return fontme("courier");
}

var comicussansi = function() {
  return fontme("Comic Sans MS");
}

