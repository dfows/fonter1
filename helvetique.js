chrome.extension.onMessage.addListener(function(request,sender,sendResponse) {
  switch(request.type) {
    case "helvetica":
      helvetique();
      break;
    case "verdana":
      verdanique();
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
  alert("im in fontme"+codeSnip);
  chrome.tabs.getSelected(null,function(tab) {
    alert("i'm in fontme>tabsgetselect and my tab id is "+tab.id);
    chrome.tabs.sendMessage(tab.id, {
      type: "fontchange",
      font: codeSnip
    });
  });
}

var helvetique = function() {
  return fontme("Helvetica Neue, Helvetica, Arial, sans-serif");
}

var verdanique = function() {
  return "wtf bro verdana is fukin ugly";
}

var courieraza = function() {
  return fontme("courier");
}

var comicussansi = function() {
  return fontme("Comic Sans MS");
}

