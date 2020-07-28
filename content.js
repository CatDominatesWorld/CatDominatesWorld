chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.message === 'TabUpdated') {
        var level = request.level;

        API_URL = "https://192.249.19.244:1343/translate"
        
        var body = document.body.innerHTML;
        var url = window.location.href;
        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var nyanContent = this.responseText
                document.getElementsByTagName('body')[0].innerHTML = nyanContent
                if (level === 5){
                    var style = document.createElement("link");
                    style.href = chrome.runtime.getURL("src/nyancat/style.css")
                    style.rel = "stylesheet"
                    document.head.appendChild(style);
        
                    var nyan = document.createElement("div");
                    nyan.className = "nyan";
                    document.body.appendChild(nyan);
        
                    // var jQuery = document.createElement("script");
                    // jQuery.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js";
                    // jQuery.type = "text/javascript";
                    // document.body.appendChild(jQuery);
        
                    var nyanScript = document.createElement("script");
                    nyanScript.src = chrome.runtime.getURL("src/nyancat/script.js");
                    nyanScript.type = "text/javascript"
                    document.body.appendChild(nyanScript);
                }
            }
        };

        xhr.open("POST", API_URL, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({
            content: body,
            level: level,
            url: url
        }));
    }
  })