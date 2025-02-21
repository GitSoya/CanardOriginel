// GSAP Modules
gsap.registerPlugin(ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin);



// GSAP matchMedia responsive ------------------------------------------------------
let mm = gsap.matchMedia();
mm.add({
    isMobile: '(max-width: 799px)', 
    isDesktop: '(min-width: 800px)',
}, (context) => {
    let {isMobile, isDesktop} = context.conditions;

    // GSAP from to titre
gsap.fromTo("#demo",{
    y:'100px',
},{
    y:'0px',
    duration : 2,
})

//GSAP ANIMATION TIMELINE 
let timelineimgtxt1 = gsap.timeline();

timelineimgtxt1.to('.imgtxt1',{x:0,})
.to('imgtxt1',{y:100})
.to('imgtxt1',{x:-100})
.to('imgtxt1',{y:-100})
.to(".einstein, .description",{
    opacity:1,
})

// GSAP ScrollTrigger, ROTATION

gsap.to(".object",{
    scrollTrigger:{
        trigger:"#sect2",
        id:"sect2",
        start:"top 0%",
        end: "bottom 40%",
        toggleActions: "play none none none",
        // "play green green, red red, (sens inverse) red red, green green"
        scrub: 1,
    },
    rotation: 360,
    duration: 2,
});

//GSAP ANIMATION Notre TERRE

Draggable.create(".planet1", {
    type: "x,y",
    bounds: "#sect3",
    dragResistance: 0.4,


    onDragEnd: function(){  
        let zone = document.getElementById('drop3');

        if (this.hitTest(zone, '20%')) {
            zone.style.backgroundColor = 'green';
        }
    },
});

// Uranus

Draggable.create(".planet2", {
    type: "x,y",
    bounds: "#sect3",
    dragResistance: 0.5,

    onDragEnd: function(){  
        let zone = document.getElementById('drop7');

        if (this.hitTest(zone, '50%')) {
            zone.style.backgroundColor = 'green';
        }
    },
});

// VENUS

Draggable.create(".planet3", {
    type: "x,y",
    bounds: "#sect3",
    dragResistance: 0.3,
    
    onDragEnd: function(){  
        let zone = document.getElementById('drop2');

        if (this.hitTest(zone, '50%')) {
            zone.style.backgroundColor = 'green';
        }
    },
});

// MARS

Draggable.create(".planet4", {
    type: "x,y",
    bounds: "#sect3",
    dragResistance: 0.2,
    
    onDragEnd: function(){  
        let zone = document.getElementById('drop4');

        if (this.hitTest(zone, '50%')) {
            zone.style.backgroundColor = 'green';
        }
    },
});

// NEPTUNE

Draggable.create(".planet5", {
    type: "x,y",
    bounds: "#sect3",
    dragResistance: 0.6,
    
    onDragEnd: function(){  
        let zone = document.getElementById('drop8');

        if (this.hitTest(zone, '50%')) {
            zone.style.backgroundColor = 'green';
        }
    },
});

// MERCURE

Draggable.create(".planet6", {
    type: "x,y",
    bounds: "#sect3",
    dragResistance: 0.1,
    
    onDragEnd: function(){  
        let zone = document.getElementById('drop1');

        if (this.hitTest(zone, '50%')) {
            zone.style.backgroundColor = 'green';
        }
    },
});

// JUPITER

Draggable.create(".planet7", {
    type: "x,y",
    bounds: "#sect3",
    dragResistance: 0.8,
    
    onDragEnd: function(){  
        let zone = document.getElementById('drop5');

        if (this.hitTest(zone, '50%')) {
            zone.style.backgroundColor = 'green';
        }
    },
});

// SATURNE

Draggable.create(".planet8", {
    type: "x,y",
    bounds: "#sect3",
    dragResistance: 0.7,
    
    onDragEnd: function(){  
        let zone = document.getElementById('drop6');

        if (this.hitTest(zone, '50%')) {
            zone.style.backgroundColor = 'green';
        }
    },
});

//GSAP ANIMATION - MOTION PATH TROU NOIR STELLAIRE

gsap.to(".one",{
    duration: 5,
    motionPath: {
    path:"M65.5981 66.5018C68.2648 66.5018 73.7981 65.4018 74.5981 61.0018C75.3981 56.6018 74.9314 51.8351 74.5981 50.0018C74.0981 47.1685 70.8981 41.5018 62.0981 41.5018C53.2981 41.5018 50.4314 51.5018 50.0981 56.5018V73.0018C49.9314 75.8351 52.0981 81.1018 62.0981 79.5018C74.5981 77.5018 86.5981 76.5018 87.5981 66.5018C88.5981 56.5018 94.5981 39.5018 87.5981 31.0018C81.9981 24.2018 64.5981 21.1685 56.5981 20.5018C53.2648 20.3351 44.5981 23.0018 36.5981 35.0018C26.5981 50.0018 25.0981 58.5018 27.0981 66.5018C29.0981 74.5018 23.0981 98.0018 36.5981 97.0018C50.0981 96.0018 59.5981 99.5018 69.0981 97.0018C78.5981 94.5018 100.598 86.5018 102.598 73.0018C104.598 59.5018 104.598 16.5018 82.0981 12.0018C59.5981 7.50182 42.0981 -3.49818 25.0981 12.0018C8.09811 27.5018 -3.40189 42.5018 4.59811 61.0018C10.9981 75.8018 46.5981 70.8351 63.5981 66.5018",
},
scrollTrigger: {
    trigger: ".one",
    start: "top 50%",  
    end: "bottom 20%",
    toggleActions: "play none none none",
}
})

//GSAP ANIMATION - MOTION PATH TROU NOIR INTERMEDIAIRE

gsap.to(".two",{
    duration: 8,
    motionPath: {
    path:"M65.5981 66.5018C68.2648 66.5018 79.2 65.4018 80 61.0018C80.8 56.6018 82.4314 40.8333 82.0981 39C81.5981 36.1667 68.3 28 59.5 28C50.7 28 36.9314 46 36.5981 51V76C36.4314 78.8333 50.5 91.6 60.5 90C73 88 97 80 98 70C99 60 97 34.5 90 26C84.4 19.2 62.5 15.1667 54.5 14.5C51.1667 14.3333 38 22 30 34C20 49 13.5 58.5018 15.5 66.5018C17.5 74.5018 27 100.5 40.5 99.5C54 98.5 69 102 78.5 99.5C88 97 104 89.5 106 76C108 62.5 109 9.5 86.5 5C64 0.499999 36.5 -4.5 19.5 11C2.5 26.5 -0.499996 50.4982 7.5 68.9982C13.9 83.7982 48.5981 60.8333 65.5981 56.5",
},
scrollTrigger: {
    trigger: ".two",
    start: "top 50%", 
    end: "bottom 20%",
    toggleActions: "play none none none",
}
})

//GSAP ANIMATION - MOTION PATH TROU NOIR SUPERMASSIF

gsap.to(".three",{
    duration: 14,
    motionPath: {
    path:"M65.5981 66.5018C68.2648 66.5018 79.2 65.4018 80 61.0018C80.8 56.6018 82.4314 40.8333 82.0981 39C81.5981 36.1667 68.3 28 59.5 28C50.7 28 36.9314 46 36.5981 51V76C36.4314 78.8333 50.5 91.6 60.5 90C73 88 97 80 98 70C99 60 97 34.5 90 26C84.4 19.2 62.5 15.1667 54.5 14.5C51.1667 14.3333 38 22 30 34C20 49 13.5 58.5018 15.5 66.5018C17.5 74.5018 27 100.5 40.5 99.5C54 98.5 69 102 78.5 99.5C88 97 104 89.5 106 76C108 62.5 109 9.5 86.5 5C64 0.499999 36.5 -4.5 19.5 11C2.5 26.5 -0.499996 50.4982 7.5 68.9982C13.9 83.7982 48.5981 60.8333 65.5981 56.5",
},
scrollTrigger: {
    trigger: ".one",
    start: "top 50%",
    end: "bottom 20%",
    toggleActions: "play none none none",
}
})

//GSAP Scrolltrigger blur 1

gsap.to(".titretxt1, .titretxt2",{
    scrollTrigger:{
        trigger:"#sect5",
        start:"top 60%",
        end: "bottom 100%",
        markers:true,
        toggleActions: "play none none none",
        scrub: 1,
    },
    filter: "blur(0px)",
});

//GSAP Scrolltrigger blur 2

gsap.to(".titretxt1, .titretxt2",{
    scrollTrigger:{
        trigger:"#sect5",
        start:"bottom 75%",
        end: "bottom 100%",
        toggleActions: "play none none none",
        scrub: 1,
    },
    filter: "blur(12px)",
});

//GSAP Scrolltrigger timeline 1

gsap.to(".sonic1",{
    scrollTrigger:{
        trigger:"#sect6",
        start:"top 20%",
        toggleActions: "play none none none",
        scrub: 1,
    },
        x: "-100px",
        y: "1300px",
        rotation: "360",
});

//GSAP Scrolltrigger timeline 2

gsap.to(".sonic2",{
    scrollTrigger:{
        trigger:"#sect6",
        start:"top 20%",
        toggleActions: "play none none none",
        scrub: 1,
    },
        x: "400px",
        y: "1800px",
        rotation: "-360",
});

//GSAP Scrolltrigger timeline 3

gsap.to(".sonic3",{
    scrollTrigger:{
        trigger:"#sect6",
        start:"top 20%",
        toggleActions: "play none none none",
        scrub: 1,
    },
        x: "-100px",
        y: "1400px",
        rotation: "-360",
});

//GSAP Scrolltrigger timeline 4

gsap.to(".sonic4",{
    scrollTrigger:{
        trigger:"#sect6",
        start:"top 20%",
        toggleActions: "play none none none",
        scrub: 1,
    },
        x: "200px",
        y: "1600px",
        rotation: "-360",
});

//GSAP Scrolltrigger timeline 5

gsap.to(".sonic5",{
    scrollTrigger:{
        trigger:"#sect6",
        start:"top 20%",
        toggleActions: "play none none none",
        scrub: 1,
    },
        x: "-1100px",
        y: "1800px",
        rotation: "360",
}); 
}
)




