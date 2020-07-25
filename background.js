//background.js
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
if(changeInfo.status != 'complete')
return;

function getText(){
    return document.body.innerText;
}

function getHTML(){
    return document.body.outerHTML;
}

chrome.extension.onMessage.addListener(
    function(request, sender, sendResponse) {
        if(request.method == "getText"){
            sendResponse({data: document.all[0].innerText, method: "getText"}); //same as innerText
        }
    }
);

console.log("update");
console.log(getText());
console.log(getHTML());
});
