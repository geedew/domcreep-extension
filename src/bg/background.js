// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });


//example of using a message handler from the inject scripts
chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
  	chrome.pageAction.show(sender.tab.id);

  	setPageActionIcon(sender.tab.id);

    sendResponse();
});


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


