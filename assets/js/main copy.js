var swiper = new Swiper(".pkgsM", {
    slidesPerView: "auto",
    spaceBetween: 30,
  });

  var swiper2 = new Swiper('.teamSecImg', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    loopAdditionalSlides: 1,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
    on: {
      slideChange: function () {
        // Dapatkan indeks slide yang aktif
        var activeIndex = this.realIndex;
        
        // Reset properti CSS untuk semua elemen
        resetCSS();
        
        // Ubah properti CSS untuk slide gambar aktif
        var activeSlide = document.querySelectorAll('.swiper-slide')[activeIndex];
        
        // Ubah properti CSS untuk nama yang sesuai
        var nameList = document.querySelectorAll('.teamSecName li');
        nameList.forEach(function(name, index) {
          if (index === activeIndex) {
            name.querySelector('h2').style.color = '#9fef00';
          }
        });
      },
    },
  });
  
// swiper team
function resetCSS() {
    var allImages = document.querySelectorAll('.imgSlide img');
    var allNames = document.querySelectorAll('.teamSecName li h2');
    
    allImages.forEach(function(img) {
      img.style.filter = 'grayscale(100%)';
    });
    
    allNames.forEach(function(name) {
      name.style.color = '';
    });
  }


function hoverAnimation(target, xValue) {
    gsap.to(target, {
      x: xValue,
      duration: 0.3,
    });
}
$(function(){
    $('.sblSecPkgs').hover(function() {
        hoverAnimation('.sblSecAbout', 40);
    }, function() {
        hoverAnimation('.sblSecAbout', 0);
    });
    $('.sblSecTeam').hover(function() {
        hoverAnimation('.sblSecAbout', 80);
        hoverAnimation('.sblSecPkgs', 40);
    }, function() {
        hoverAnimation('.sblSecAbout', 0);
        hoverAnimation('.sblSecPkgs', 0);
    });
    $('.sblSecContact').hover(function() {
        hoverAnimation('.sblSecAbout', 120);
        hoverAnimation('.sblSecPkgs', 80);
        hoverAnimation('.sblSecTeam', 40);
    }, function() {
        hoverAnimation('.sblSecAbout', 0);
        hoverAnimation('.sblSecPkgs', 0);
        hoverAnimation('.sblSecTeam', 0);
    });
});

// function registerHov() {
//     if ($('.sblSecAbout').hasClass('active')) {
//         $('.sblSecPkgs, .sblSecTeam, .sblSecContact').off('mouseenter mouseleave');
//         $('.sblSecTeam').hover(function() {
//             hoverAnimation('.sblSecPkgs', 40);
//         }, function() {
//             hoverAnimation('.sblSecPkgs', 0);
//         });
//         $('.sblSecContact').hover(function() {
//             hoverAnimation('.sblSecPkgs', 80);
//             hoverAnimation('.sblSecTeam', 40);
//         }, function() {
//             hoverAnimation('.sblSecPkgs', 0);
//             hoverAnimation('.sblSecTeam', 0);
//         });
//     } else {
//         $('.sblSecPkgs').hover(function() {
//             hoverAnimation('.sblSecAbout', 40);
//         }, function() {
//             hoverAnimation('.sblSecAbout', 0);
//         });
//         $('.sblSecTeam').hover(function() {
//             hoverAnimation('.sblSecAbout', 80);
//             hoverAnimation('.sblSecPkgs', 40);
//         }, function() {
//             hoverAnimation('.sblSecAbout', 0);
//             hoverAnimation('.sblSecPkgs', 0);
//         });
//         $('.sblSecContact').hover(function() {
//             hoverAnimation('.sblSecAbout', 120);
//             hoverAnimation('.sblSecPkgs', 80);
//             hoverAnimation('.sblSecTeam', 40);
//         }, function() {
//             hoverAnimation('.sblSecAbout', 0);
//             hoverAnimation('.sblSecPkgs', 0);
//             hoverAnimation('.sblSecTeam', 0);
//         });
//     }
// }

// $(document).on('click', '.nxtToConq, .backToHome', function() {
//     if ($('.aboutNav').hasClass('nxtToConq')) {
//         $('.aboutNav').toggleClass('nxtToConq backToHome');
//         gsap.to('.sblSecAbout', {
//             xPercent: -84,
//             duration: 1,
//         });
//     } else if ($('.aboutNav').hasClass('backToHome')) {
//         $('.aboutNav').toggleClass('nxtToConq backToHome');
//         gsap.to('.sblSecAbout', {
//             xPercent: 0,
//             duration: 1,
//         });
//     }
//     $('.sblSecAbout').toggleClass('active');
//     registerHov();
// });


function registerHov() {
    if ($('.sblSecAbout').hasClass('active')) {
        $('.sblSecPkgs, .sblSecTeam, .sblSecContact').off('mouseenter mouseleave');
        $('.sblSecTeam').hover(function() {
            hoverAnimation('.sblSecPkgs', 40);
        }, function() {
            hoverAnimation('.sblSecPkgs', 0);
        });
        $('.sblSecContact').hover(function() {
            hoverAnimation('.sblSecPkgs', 80);
            hoverAnimation('.sblSecTeam', 40);
        }, function() {
            hoverAnimation('.sblSecPkgs', 0);
            hoverAnimation('.sblSecTeam', 0);
        });
    } else {
        if ($('.sblSecAbout').hasClass('active')) {
            console.log('sblSecAbout');
        } else if ($('.sblSecPkgs').hasClass('active')) {
            console.log('sblSecPkgs');
        } else if ($('.sblSecTeam').hasClass('active')) {
            console.log('sblSecTeam');
        } else if ($('.sblSecContact').hasClass('active')) {
            console.log('sblSecContact');
        } else {
            console.log('No One Has Active Class');
        }
    }
}

function registerHovB() {
    if ($('.sblSecPkgs').hasClass('active')) {
        $('.sblSecPkgs .sblSecTeam, .sblSecContact').off('mouseenter mouseleave');
        $('.sblSecContact').hover(function() {
            hoverAnimation('.sblSecTeam', 40);
        }, function() {
            hoverAnimation('.sblSecTeam', 0);
        });
    } else {
        $('.sblSecContact').hover(function() {
            hoverAnimation('.sblSecTeam', 40);
        }, function() {
            hoverAnimation('.sblSecTeam', 0);
        });
    }
}

function registerHovC() {
    // Logic for handling hover effects for the third section (if needed)
}

$(document).on('click', '.nxtToConq, .backToHome', function() {
    if ($('.aboutNav').hasClass('nxtToConq')) {
        $('.aboutNav').toggleClass('nxtToConq backToHome');
        gsap.to('.sblSecAbout', {
            xPercent: -84,
            duration: 1,
        });
        $('.sblSecAbout').addClass('active');
        $('.sblSecPkgs').removeClass('active');
    } else if ($('.aboutNav').hasClass('backToHome')) {
        $('.aboutNav').toggleClass('nxtToConq backToHome');
        gsap.to('.sblSecAbout', {
            xPercent: 0,
            duration: 1,
        });
        $('.sblSecAbout').removeClass('active');
    }
    registerHov();
});

$(document).on('click', '.nxtToPkgs, .backToConq', function() {
    if ($('.pkgsNav').hasClass('nxtToPkgs')) {
        $('.pkgsNav').toggleClass('nxtToPkgs backToConq');
        gsap.to('.sblSecPkgs', {
            xPercent: -88,
            duration: 1,
        });
        $('.sblSecPkgs').addClass('active');
        $('.sblSecAbout').removeClass('active');
    } else if ($('.pkgsNav').hasClass('backToConq')) {
        $('.pkgsNav').toggleClass('nxtToPkgs backToConq');
        gsap.to('.sblSecPkgs', {
            xPercent: 0,
            duration: 1,
        });
        $('.sblSecPkgs').removeClass('active');
        $('.sblSecAbout').addClass('active');
    }
    registerHovB();
});


// Add similar click event handler for the third section if needed



// $('.nxtToPkgs').click(function(){
//     console.log('click')
//     gsap.to('.sblSecPkgs', {
//         xPercent: -88,
//         duration: 1,
//     });
// });

// $('.nxtToTeam').click(function(){
//     console.log('click')
//     gsap.to('.sblSecTeam', {
//         xPercent: -92,
//         duration: 1,
//     });
// });

// $('.nxtToContact').click(function(){
//     console.log('click')
//     gsap.to('.sblSecContact', {
//         xPercent: -96,
//         duration: 1,
//     });
// });