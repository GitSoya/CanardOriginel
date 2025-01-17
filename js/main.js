console.log("Target confirmed")


// GSAP Modules
gsap.registerPlugin(ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin);


// GSAP DEMO ANIMATION
gsap.fromTo("#demo",{
    rotation : 180,
},{
    rotation : 360,
    duration : 2,
})

Draggable.create("#demo");
