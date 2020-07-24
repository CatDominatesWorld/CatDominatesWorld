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

level1.addEventListener("click",function(){
    changeColor1();
})



level2.addEventListener("click",function(){
    changeColor2()
})

level3.addEventListener("click",function(){
    changeColor3()
})
level4.addEventListener("click",function(){
    changeColor4()
})

level5.addEventListener("click",function(){
    changeColor5()
})