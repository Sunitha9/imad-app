console.log('Loaded!');
//change the text of the main-text div
var element=document.getElementById('main-text');
element.innerHTML='New value';

//move an img
var img=document.getElementById('madi');
var marginLeft=0;
fuction moveRight(){
    marginLeft=marginLeft+1;
    img.style.marginLeft=marginLeft+'px';
}
img.onclick=function(){
var interval=setInterval(movieRight,50);
};