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


// GSAP ScrollTrigger ANIMATION

gsap.to(".object",{
    scrollTrigger:{
        trigger:"#sect2",
        markers: true,
        id:"sect2",
        start:"top 0%",
        end: "bottom 50%",
        toggleActions: "play none none none",
        // "play green green, red red, (sens inverse) red red, green green"
        scrub: 1,
    },
    rotation: 360,
    duration: 2,
})



//GSAP ANIMATION - MOTION PATH
gsap.to(".video",{
    duration: 8,
    motionPath: {
    path:"M427 1C346.166 16.3333 184.5 104.8 184.5 336C184.5 567.2 335.5 568.5 427 578.5C545 578.5 683.8 597.2 659 424C628 207.5 370 217.5 365 377.5C361 505.5 363.333 857.167 365 1017C349.4 1200.6 176.5 1323.83 91.9999 1362.5C-177 1449.5 210.1 1675.8 478.5 1651C746.9 1626.2 710.667 1448.33 659 1362.5C629.833 1302.17 542.6 1196 427 1254C311.4 1312 306.833 1725.17 319 1924.5V2172",
    }
})



//GSAP ANIMATION TIMELINE
let timelineex4 = gsap.timeline();

timelineex4.to('.ex4',{x:100,})
.to('ex4',{y:100})
.to('ex4',{x:-100})
.to('ex4',{y:-100})
.to(".yeah",{
    opacity:1,
})