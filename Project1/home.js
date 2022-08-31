/*

var number=document.getElementById('count') //select the id count
var initial_number=number.innerHTML //for updating the value of selected item

var image=document.getElementById('bg1') //select the bgimage by id..
var interval=setInterval(function countdown(){
    initial_number=initial_number>0?initial_number-1:0 //condition to count down
    number.innerHTML=initial_number //update the value of the content of selected id..

    //for image

    */
    /*var img_path=initial_number%2===0?'bg1.jpg':'bg2.jpg'
    image.src=img_path*/
/*
    number.style.fontSize=initial_number*10+"px"
    image.style.width=initial_number*10+"%"

    if(initial_number<=0){
       clearInterval(interval)
    }
},1000) */

/*
var btn=document.getElementById('click')
var main=document.getElementById('body')
*/


/*function fun(){
   
   main.style.backgroundColor="rgb(" +Math.floor(Math.random()*255)+ "," +Math.floor(Math.random()*255)+ "," +Math.floor(Math.random()*255)+ ")"
}*/
//btn.onclick=fun
//setInterval(function fun(){btn.onclick=fun},1000)
/*main.innerHTML=setInterval(function(){
  fun()
},1000)

*/

/*
btn.addEventListener('click',function(){
   if(btn.classList.contains('big')){
      btn.classList.add('small')
      btn.classList.remove('big')
   }
   else
   {
      btn.classList.add('big')
      btn.classList.remove('small')
   }
})
*/

/*
var main=document.getElementById('font')
var fontInc=document.getElementById('inc')
var fontdec=document.getElementById('dec')

var initialfont= window.getComputedStyle(main).fontSize
initialfont=parseInt(initialfont.substr(0,(initialfont.length-2)))

fontInc.addEventListener('click',function(){
    initialfont=initialfont+10
  main.style.fontSize=initialfont +"px"
})
fontdec.addEventListener('click',function(){
   initialfont=initialfont-10
   main.style.fontSize=initialfont + "px"
})

*/
var add=document.getElementById('add')
var btn =document.getElementById('btn');
var list= document.getElementById('item')
/*
var function1=function(){
var newElement=document.createElement('li');
newElement.id="item2"
newElement.appendChild(document.createTextNode("Item"+" "+ (list.childElementCount+1)));
list.appendChild(newElement);
}

btn.addEventListener('click',function1);
*/

btn.addEventListener('click',function(){
   var newadd=document.createElement('li')
newadd.appendChild(document.createTextNode(add.value))
   list.appendChild(newadd)

})