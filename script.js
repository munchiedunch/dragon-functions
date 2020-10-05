dragon = 10
function something(type,damage,Character){
  if(type=="fire "){
    damage= damage - 1
  }
   if(type=="ice "){
    damage= damage + 1
  }
  dragon= dragon - damage
  var ele= document.createElement("div")
  ele.innerHTML= type + damage +" "+ dragon
  if(dragon<=0){
  ele.innerHTML="You win, Dragon died"
}
   document.body.appendChild(ele)
  
}

document.body.querySelector(".button").addEventListener("click",function(){
  something("fire ",damage=3,"dragon")
})

document.body.querySelector(".second").addEventListener("click",function(){
  something("ice ",damage=1,"dragon")
})
document.body.querySelector(".third").addEventListener("click",function(){
  something("poison ",damage=4,)
})