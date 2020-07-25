var onoff = document.getElementById("onoff");
var level1 = document.getElementById("bar1");
var level2 = document.getElementById("bar2");
var level3 = document.getElementById("bar3");
var level4 = document.getElementById("bar4");
var level5 = document.getElementById("bar5");
var red = '#FF0000';
var orange = '#FF8000';
var yellow = '#FFFF00';
var green = '#00FF00';
var blue = '#0000FF';
var black = '#000000';
var number = 0;


function changeColor1(){
    level1.style.backgroundColor = blue;
    level2.style.backgroundColor = black;
    level3.style.backgroundColor = black;
    level4.style.backgroundColor = black;
    level5.style.backgroundColor = black;
}

function changeColor2(){
    level1.style.backgroundColor = blue;
    level2.style.backgroundColor = green;
    level3.style.backgroundColor = black;
    level4.style.backgroundColor = black;
    level5.style.backgroundColor = black;
}

function changeColor3(){
    level1.style.backgroundColor = blue;
    level2.style.backgroundColor = green;
    level3.style.backgroundColor = yellow;
    level4.style.backgroundColor = black;
    level5.style.backgroundColor = black;
}

function changeColor4(){
    level1.style.backgroundColor = blue;
    level2.style.backgroundColor = green;
    level3.style.backgroundColor = yellow;
    level4.style.backgroundColor = orange;
    level5.style.backgroundColor = black;
}

function changeColor5(){
    level1.style.backgroundColor = blue;
    level2.style.backgroundColor = green;
    level3.style.backgroundColor = yellow;
    level4.style.backgroundColor = orange;
    level5.style.backgroundColor = red;
}

function changeBackground(){

    if(number==0){
        document.body.style.backgroundImage = "url('/bg.jpg')";
        number=1;
    }

    else if(number==1) {
        document.body.style.backgroundImage = "url('/bg_close.jpg')";
        number=0;
    }
}

level1.addEventListener("click",function(){
    changeColor1();
    document.body.style.backgroundImage = "url('/bg.jpg')";
})

level2.addEventListener("click",function(){
    changeColor2();
    document.body.style.backgroundImage = "url('/bg_level2.jpg')";
})

level3.addEventListener("click",function(){
    changeColor3();
    document.body.style.backgroundImage = "url('/bg_level3.jpg')";
})

level4.addEventListener("click",function(){
    changeColor4();
    document.body.style.backgroundImage = "url('/bg_level4.jpg')";
})

level5.addEventListener("click",function(){
    changeColor5();
    document.body.style.backgroundImage = "url('/bg_level5.jpg')";
})

onoff.addEventListener("click",function(){
    changeBackground();
})

// chrome.tabs.getSelected(null, function(tab) {
//     chrome.tabs.sendMessage(tab.id, {method: "getText"}, function(response) {
//         if(response.method=="getText"){
//             alltext = response.data;
//         }
//     });
// });

chrome.runtime.onMessage.addListener(function(request, sender) {
  if (request.action == "getSource") {
    message.innerText = request.source;
  }
});

function onWindowLoad() {

  var message = document.querySelector('#message');

  chrome.tabs.executeScript(null, {
    file: "getPagesSource.js"
  }, function() {
    // If you try and inject into an extensions page or the webstore/NTP you'll get an error
    if (chrome.runtime.lastError) {
      message.innerText = 'There was an error injecting script : \n' + chrome.runtime.lastError.message;
    }
  });

}

window.onload = onWindowLoad;