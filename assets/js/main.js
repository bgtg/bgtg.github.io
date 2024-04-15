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

function registerHov() {
    if ($('.sblSecAbout').hasClass('active')) {
        // console.log('.sblSecAbout');
        /* REMOVING HOVER */
        $('.sblSecPkgs, .sblSecTeam, .sblSecContact').off('mouseenter mouseleave');

        /* CREATE NEW HOVER FUNC */
        $('.sblSecTeam').hover(function(){
            hoverAnimation('.sblSecPkgs', 40);
        }, function(){
            hoverAnimation('.sblSecPkgs', 0);
        });

        $('.sblSecContact').hover(function() {
            hoverAnimation('.sblSecPkgs', 80);
            hoverAnimation('.sblSecTeam', 40);
        }, function() {
            hoverAnimation('.sblSecPkgs', 0);
            hoverAnimation('.sblSecTeam', 0);
        });
    } 
    else if ($('.sblSecPkgs').hasClass('active')) {
        // console.log('.sblSecPkgs');
        $('.sblSecPkgs, .sblSecTeam, .sblSecContact').off('mouseenter mouseleave');
        $('.sblSecContact').hover(function() {
            hoverAnimation('.sblSecTeam', 40);
        }, function() {
            hoverAnimation('.sblSecTeam', 0);
        });
    }
    else if ($('.sblSecTeam').hasClass('active')) {
        // console.log('.sblSecTeam');
        $('.sblSecPkgs, .sblSecTeam, .sblSecContact').off('mouseenter mouseleave');
    }
    else if ($('.sblSecContact').hasClass('active')) {
        // console.log('.sblSecContact');
        $('.sblSecPkgs, .sblSecTeam, .sblSecContact').off('mouseenter mouseleave');
    }
    else {
        // console.log('No one has active class');
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
    }
}

function checkXValue(className, targetXValue, targetClass, addingClass, removingClass) {
    // Mengecek nilai x menggunakan gsap.getProperty()
    var xValue = gsap.getProperty(className, 'x');

    // Memeriksa apakah nilai x sama dengan targetXValue
    if (xValue >= targetXValue) {
        $(targetClass).addClass(addingClass);
        $(targetClass).removeClass(removingClass);
    } else {
        $(targetClass).removeClass(removingClass);
    }
}

$(document).on('click', '.nxtToConq, .backToHome', function() {
    if ($('.aboutNav').hasClass('nxtToConq')) {
        $('.aboutNav').toggleClass('nxtToConq backToHome');
        gsap.to('.sblSecAbout', {
            x: -84 + "%",
            duration: 1,
        });
        $('.sblSecAbout').addClass('active');
        $('.sblSecPkgs').removeClass('active');
    } else if ($('.aboutNav').hasClass('backToHome')) {
        $('.aboutNav').toggleClass('backToHome nxtToConq');
        gsap.to('.sblSecAbout', {
            x: 0,
            duration: 1,
        });
        $('.sblSecAbout').removeClass('active');
    }
    registerHov();
});

$(document).on('click', '.nxtToPkgs, .backToConq', function() {
    if ($('.pkgsNav').hasClass('nxtToPkgs')) {
        $('.pkgsNav').toggleClass('nxtToPkgs backToConq');
        
        gsap.to('.sblSecAbout', {
            x: -84 + "%",
            duration: 1,
            onComplete: function() {
                checkXValue('.sblSecAbout', -84, '.aboutNav', 'backToHome', 'nxtToConq');
            }
        });
        gsap.to('.sblSecPkgs', {
            x: -88 + "%",
            duration: 1,
        });

        $('.sblSecPkgs').addClass('active');
        $('.sblSecAbout').removeClass('active');
    } else if ($('.pkgsNav').hasClass('backToConq')) {
        $('.pkgsNav').toggleClass('nxtToPkgs backToConq');
        gsap.to('.sblSecPkgs', {
            x: 0,
            duration: 1,
        });
        $('.sblSecPkgs').removeClass('active');
        $('.sblSecAbout').addClass('active');
    }
    registerHov();
});

$(document).on('click', '.nxtToTeam, .backToPkgs', function() {
    if ($('.teamNav').hasClass('nxtToTeam')) {
        $('.teamNav').toggleClass('nxtToTeam backToPkgs');
        gsap.to('.sblSecAbout', {
            x: -84 + "%",
            duration: 1,
            onComplete: function() {
                checkXValue('.sblSecAbout', -84, '.aboutNav', 'backToHome', 'nxtToConq');
            }
        });
        gsap.to('.sblSecPkgs', {
            x: -88 + "%",
            duration: 1,
            onComplete: function() {
                checkXValue('.sblSecPkgs', -88, '.pkgsNav', 'backToConq', 'nxtToPkgs');
            }
        });
        gsap.to('.sblSecTeam', {
            x: -92 + "%",
            duration: 1,
        });
        $('.sblSecTeam').addClass('active');
        $('.sblSecPkgs').removeClass('active');
        $('.sblSecAbout').removeClass('active');
    } else if ($('.teamNav').hasClass('backToPkgs')) {
        $('.teamNav').toggleClass('nxtToTeam backToPkgs');
        gsap.to('.sblSecTeam', {
            x: 0,
            duration: 1,
        });
        $('.sblSecTeam').removeClass('active');
        $('.sblSecPkgs').addClass('active');
    }
    registerHov();
});

$(document).on('click', '.nxtToContact, .backToTeam', function() {
    if ($('.contNav').hasClass('nxtToContact')) {
        $('.contNav').toggleClass('nxtToContact backToTeam');
        gsap.to('.sblSecAbout', {
            x: -84 + "%",
            duration: 1,
            onComplete: function() {
                checkXValue('.sblSecAbout', -84, '.aboutNav', 'backToHome', 'nxtToConq');
            }
        });
        gsap.to('.sblSecPkgs', {
            x: -88 + "%",
            duration: 1,
            onComplete: function() {
                checkXValue('.sblSecPkgs', -88, '.pkgsNav', 'backToConq', 'nxtToPkgs');
            }
        });
        gsap.to('.sblSecTeam', {
            x: -92 + "%",
            duration: 1,
            onComplete: function() {
                checkXValue('.sblSecTeam', -92, '.teamNav', 'backToPkgs', 'nxtToTeam');
            }
        });
        gsap.to('.sblSecContact', {
            x: -96 + "%",
            duration: 1,
        });
        $('.sblSecContact').addClass('active');
        $('.sblSecPkgs').removeClass('active');
        $('.sblSecTeam').removeClass('active');
        $('.sblSecAbout').removeClass('active');
    } else if ($('.contNav').hasClass('backToTeam')) {
        $('.contNav').toggleClass('nxtToContact backToTeam');
        gsap.to('.sblSecContact', {
            x: 0,
            duration: 1,
        });
        $('.sblSecContact').removeClass('active');
        $('.sblSecTeam').addClass('active');
    }
    registerHov();
});

window.addEventListener('load', function() {
    // Animasi untuk memindahkan logo ke kiri atas
    gsap.to('.loadLogo', { 
        duration: 1,
        opacity: 1,
        onComplete: function() {
            gsap.to('.loadLogo', {
                duration: 1.5,
                x: "-92%",
                y: "-188%",
                scale: 0.45,
                ease: 'power2.out',
                onComplete: function() {
                    gsap.to('.loader-container', {
                        opacity: 0,
                        duration: .5,
                        zIndex: -999
                    })
                    gsap.to('.sblMain', {
                        opacity: 1,
                        duration: .5,
                        onComplete: function() {
                            let tl = gsap.timeline();
                            tl.from('.trigAnim', {
                                duration: 2,
                                opacity: 0,
                                ease: 'power2.out',
                                y: 50
                            });
                        }
                    })
                }
            });
        }
    });
});