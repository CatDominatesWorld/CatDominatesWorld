var level = 0;

  chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status === 'complete' && level !== 0 ) {
      chrome.tabs.sendMessage(tabId, {
        message: 'TabUpdated',
        level: level
      });
    }
  })

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.message === 'setLevel'){
      level = request.level;
    }
});