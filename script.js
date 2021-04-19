document.addEventListener("DOMContentLoaded", layers(), false);


function layers(){
   
      gsap.to(".layer", {
          x:'300vh',
          duration: 2,
          stagger : .2
      });
      gsap.from(".circle-small", {scale:0, duration:1, delay:.5});
      gsap.from(".circle-large", {scale:0, duration:1, delay:.5});
      gsap.fromTo('.watch-wrapper',
      {x: '30rem', opacity: 0},
      {x: 0, opacity: 1, ease: 'back.out(1.7)', delay:1.3});
      gsap.fromTo('.text',
      {
          x:'-30rem',
          opacity : 0
      },
      {
          x:0,
          opacity:1,
          duration:2,
          delay:1.3
      })
}