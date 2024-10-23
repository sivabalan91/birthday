 let btn1 = document.querySelector('.btn1')
 let hapbtn = document.querySelector('.hapbtn')
 let cakebtn=document.querySelector('.cakebtn')
 let audio = document.querySelector('#bday')
 let audio1 = document.querySelector('#sister')
 let playb = document.querySelector('.play')
 let pauseb = document.querySelector('.pause')

function show(){
    audio.play()
    let flex = document.querySelector('.top')
    flex.style.display = 'block'
    let btn = document.querySelector('.btn')
    btn.style.display = 'none'
    btn1.style.display = 'block'
}

function ball(){
     let balloon = document.querySelector('.balloons')
     balloon.style.display = 'block'
     btn1.style.display = 'none'
     hapbtn.style.display = 'block'
 }
function cakes(){
   let happy = document.querySelector('.happy')
   happy.style.display = 'block'
   let cake = document.querySelector('.cake')
   cake.style.display = 'block'
   let name = document.querySelectorAll('span')
   name.forEach(n=>{
    n.style.display = 'block'
   })
   let hapbtn = document.querySelector('.hapbtn')
   hapbtn.style.display = 'none'
  let par=document.querySelector('.par')
   par.style.display='block'

   let wrap=document.querySelector('.wrapper')
   wrap.style.display='block'
}

function play(){
    audio.pause()
    audio1.play()
    playb.style.display = 'none'
    pauseb.style.display = 'block'
}
function pause(){
    audio1.pause()
    playb.style.display = 'block'
    pauseb.style.display = 'none'

}