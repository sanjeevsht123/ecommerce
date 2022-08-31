/*
function btclick(){
var countdown=document.getElementById('count');

var bgImg=document.getElementById('bg');

var initialCount=countdown.innerHTML;

console.log(initialCount)

var interval=setInterval(function(){
    //For CountDown.....
    initialCount= initialCount > 0 ? initialCount-1:0;
    countdown.innerHTML=initialCount;

    //For Background Image
var bgpath=initialCount%2===0?'Image/bg1.jpg':'Image/bg2.jpg';
bgImg.src=bgpath;


},1000)

}

var btn=document.getElementById('click')
btn.onclick=btclick;

var h2=document.getElementById('parag');
h2.classList.add('para1')

var clk=document.getElementById('c')
function cl(){
    h2.classList.remove('para1');
}

clk.onclick=cl;
*/

var navi=document.getElementById('nav')
var click=document.getElementById('click1')
click.onclick=show;
function show(){
if(navi.classList.contains('hide'))
{
    navi.classList.add('show');
    navi.classList.remove('hide');
}
else{
    navi.classList.add('hide');
    navi.classList.remove('show');
}
}