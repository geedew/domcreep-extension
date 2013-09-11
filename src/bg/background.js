
// Catch messagse from the Injected JS
chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
  	chrome.pageAction.show(sender.tab.id);

    // draw a number on the icon
  	setPageActionIcon(sender.tab.id);

    sendResponse();
});

// Attempting to create an icon that can show numbers in the icon.
function setPageActionIcon(tabId) {
    var canvas = document.createElement('canvas');
    var img = document.createElement('img');
    img.onload = function () {
        var context = canvas.getContext('2d');
        context.drawImage(img, 0, 2);
        context.fillStyle = "rgba(255,0,0,1)";
        context.fillRect(10, 0, 19, 19);
        context.fillStyle = "white";
        context.font = "11px Arial";
        context.fillText("3", 0, 19);

        chrome.pageAction.setIcon({
            imageData: context.getImageData(0, 0, 19, 19),
            tabId:     tabId
        });
    };
}


