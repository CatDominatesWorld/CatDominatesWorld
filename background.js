chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if(request.action === "getSource"){
            console.log(request.source);
        }
    }
);

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
    if(changeInfo.status != 'complete') return;
    onWindowLoad(tabId); 
});

function onWindowLoad(tabId) {
    chrome.tabs.executeScript(tabId, { code: 'chrome.runtime.sendMessage({action: "getSource", source: document.body.outerHTML});' },
    function() {
      if (chrome.runtime.lastError) {
        console.log(chrome.runtime.lastError.message);
      }
    });
}
