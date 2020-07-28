chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.message === 'TabUpdated') {
        API_URL = "https://192.249.19.244:1343/translate"
        var level = request.level;
        var body = document.body.innerHTML;
        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var nyanContent = this.responseText
                document.getElementsByTagName('body')[0].innerHTML = nyanContent
            }
        };

        xhr.open("POST", API_URL, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({
            content: body,
            level: level
        }));
    }
  })