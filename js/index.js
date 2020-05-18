// Your code goes here

//1

let fun = document.querySelector('h1');
fun.addEventListener('mouseover', (event) => event.target.style.color = 'purple');

//2

let title = document.querySelector('.intro h2');
title.addEventListener('dblclick', (e) => e.target.style.background = 'hotpink');

//3

let bus = document.querySelector('.intro img');
bus.addEventListener('mouseleave', (e) => {
    console.log(e);
    bus.style.transform = 'scale(1.1)';
    bus.style.transform = 'transform 0.5s';
});

//4
bus.addEventListener('mouseover', (e) => e.target.style.opacity = '.5');

// 5
let bodyGreen = document.querySelector('body');
bodyGreen.addEventListener('click', e => {
  bodyGreen.style.backgroundColor ='green';
});

//6
const destImage = document.querySelector('.content-destination img')
destImage.addEventListener('dblclick', (e) => e.target.style.opacity = '.5');

//7
let btn = document.querySelector('.btn');
btn.addEventListener('click',(e) => e.target.style.backgroundColor = 'red');

//8
let footer = document.querySelector('.footer p');
footer.addEventListener('click', (e) => e.target.style.fontSize = '2rem');

//9
let destinations = document.querySelectorAll('.destination h4');
destinations.forEach(a => a.addEventListener('mouseover', (e) => e.target.style.color = 'orange'));

//10
const backgroundColor = document.querySelector('.text-content p');
backgroundColor.addEventListener('mouseover', (e) => {
  backgroundColor.style.backgroundColor ="yellow";
  console.log(`event bubbled up again`);
});

//Stop propagation

title.addEventListener('mouseover', function(event) {
    console.log(`clicked`);
    title.style.color ='green';
    title.style.transition = 'color 0.5s';
     event.stopPropagation();
  });
  
  
let img = document.querySelector("img-fluid rounded").addEventListener('dblclick',() => {
    gsap.to("img-fluid rounded",{
        duration:1,
        rotateY:180,
        ease: "elastic(1,0.75)"
    })
})
gsap.to("img-fluid rounded",{
    duration:1,
    x:200,
    scale:2,
    rotate:180
})
// img.to('.img-content', {duration: 2, x: 100, opacity: 0.5});