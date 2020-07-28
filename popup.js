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
var level = 0;

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

level1.addEventListener("click", function(){
    saveAndNotifyLevel(1);
    changeColor1();
    document.body.style.backgroundImage = "url('/bg.jpg')";
})

level2.addEventListener("click",function(){
    saveAndNotifyLevel(2);
    changeColor2();
    document.body.style.backgroundImage = "url('/bg_level2.jpg')";
})

level3.addEventListener("click",function(){
    saveAndNotifyLevel(3);
    changeColor3();
    document.body.style.backgroundImage = "url('/bg_level3.jpg')";
})

level4.addEventListener("click",function(){
    saveAndNotifyLevel(4);
    changeColor4();
    document.body.style.backgroundImage = "url('/bg_level4.jpg')";
})

level5.addEventListener("click",function(){
    saveAndNotifyLevel(5);
    changeColor5();
    document.body.style.backgroundImage = "url('/bg_level5.jpg')";
})

onoff.addEventListener("click",function(){
    changeBackground();
    if (number === 0){
        saveAndNotifyLevel(0);
    }
})


function saveAndNotifyLevel(_level){
    chrome.runtime.sendMessage({
        message: 'setLevel',
        level: _level
      });
      chrome.storage.local.set({
        'options': _level
    });
}

init = function() {
    chrome.storage.local.get('options', function(options) {
        if(Object.keys(options).length === 0) {
            chrome.storage.local.set({
                'options': level
            });
        } else {
            level = options.options
        }

        saveAndNotifyLevel(level);
        switch(level){
            case 0:
                document.body.style.backgroundImage = "url('/bg_close.jpg')";
                break;
            case 1:
                changeColor1();
                document.body.style.backgroundImage = "url('/bg.jpg')";
                break;
            case 2:
                changeColor2();
                document.body.style.backgroundImage = "url('/bg_level2.jpg')";
                break;
            case 3:
                changeColor3();
                document.body.style.backgroundImage = "url('/bg_level3.jpg')";
                break;
            case 4:
                changeColor4();
                document.body.style.backgroundImage = "url('/bg_level4.jpg')";
                break;
            case 5:
                changeColor5();
                document.body.style.backgroundImage = "url('/bg_level5.jpg')";
                break;
            default:
                console.log(error);
        }   
    })
}

window.onload = init;