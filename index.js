var discord = document.getElementById('discord');
for(i=0;i<document.querySelectorAll('.animLetters').length;i++){
    var current = document.querySelectorAll('.animLetters')[i]
    var arr = current.innerHTML.split('')
    var temp = []
    for(j=0;j<arr.length;j++){
        temp.push(`<span class="animLetter">${arr[j]}</span>`)
    }
    current.innerHTML = temp.join('')
}
for(i=0;i<document.querySelectorAll('.animLetter').length;i++){
    var time = Math.floor(Math.random()*1000)+1000
    var offset = Math.floor(Math.random()*100)+100
    var elem = document.querySelectorAll('.animLetter')[i]
    elem.onmouseleave  = (event) => {remHoverGlow(event.target)};
    elem.onmouseover = (event) => {hoverGlow(event.target)};
    elem.style.position = 'relative'
    elem.style.top = `${offset}px`;
    elem.style.opacity = '0'
    elem.style.filter = 'blur(10px)'
    elem.style.transition = `top ${time}ms, opacity ${time}ms, filter ${time}ms, text-shadow 250ms`;
    turnVisible(elem)
}
function turnVisible(elem){
    discord.style.transition = `bottom 1500ms, opacity 1500ms, filter 1500ms, text-shadow 250ms`;
    setTimeout(function(){
        elem.style.top = '0px'
        elem.style.opacity = '1'
        elem.style.filter = 'blur(0px)'
    },100)
    setTimeout(function(){
        discord.style.bottom = '1em'
        discord.style.opacity = '1'
        discord.style.filter = 'blur(0px)'
    },1500)
}

function remHoverGlow(elem){
    elem.style.textShadow = 'none';
    if(elem.previousElementSibling !== null){elem.previousElementSibling.style.textShadow = 'none';}
    if(elem.nextElementSibling !== null){elem.nextElementSibling.style.textShadow = 'none';}
}

function hoverGlow(elem){
    var prev = elem.previousElementSibling;
    var next = elem.nextElementSibling;

    elem.style.textShadow = `0px 0px 10px ${window.getComputedStyle(elem).color}`;
    if(elem.previousElementSibling !== null){prev.style.textShadow = `0px 0px 5px ${window.getComputedStyle(prev).color}`;}
    if(elem.nextElementSibling !== null){next.style.textShadow = `0px 0px 5px ${window.getComputedStyle(next).color}`;}
}