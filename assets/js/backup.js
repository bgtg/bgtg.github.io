function pageTransition() {
    let tl = gsap.timeline();

    tl.to(".loading-screen", {
        duration: 1.2,
        width: "100%",
        left: "0%",
        ease: "Expo.easeInOut",
        delay: 2,
    });

    tl.to(".loading-screen", {
        duration: 1,
        width: "100%",
        left: "100%",
        ease: "Expo.easeInOut",
        delay: .8,
    });
    tl.set(".loading-screen", { left: "-100%" });
}

function contentAnimation() {
    let tl = gsap.timeline();

    tl.to('.imgHero', {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        duration: 1,
        stagger: 0.4,
        delay: 1
    });
}

function contentBefLeave() {
    let tl = gsap.timeline();

    tl.to('.a1', {
        x: 150,
        duration: 0,
        stagger: 0.4,
    });
    tl.to('.a2', {
        x: 100,
        duration: 0,
        stagger: 0.4,
    });
    tl.to('.a3', {
        x: 50,
        duration: 0,
        stagger: 0.4,
    });
}

$(function() {
    // Animasi hover menggunakan GSAP
    function hoverAnimation(target, xValue) {
      gsap.to(target, {
        x: xValue,
        duration: 0.3,
        zIndex: 0
      });
    }
  
    // Event hover menggunakan jQuery
    $('.a2').hover(function() {
      hoverAnimation('.a1', 30);
    }, function() {
      hoverAnimation('.a1', 0);
    });
  
    $('.a3').hover(function() {
      hoverAnimation('.a1', 60);
      hoverAnimation('.a2', 30);
    }, function() {
      hoverAnimation('.a1, .a2', 0);
    });
  
    $('.a4').hover(function() {
      hoverAnimation('.a1', 90);
      hoverAnimation('.a2', 60);
      hoverAnimation('.a3', 30);
    }, function() {
      hoverAnimation('.a1, .a2, .a3', 0);
    });
  });

// trigger everything to barba
$(function () {
    barba.init({
        sync: true,
        transitions: [
            {
                async beforeLeave(data) {
                    contentBefLeave();
                },

                async leave(data) {
                    const done = this.async();
                    
                    pageTransition();
                    await delay(1000);
                },

                async enter(data) {
                    contentAnimation();
                },

                async once(data) {
                    contentAnimation();
                },
            },
        ],
    });
});