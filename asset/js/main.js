
(function(){
  // split text   
  const splitText = (ele)=>{
    const textAry = ele.innerText.split("");
    let html = "<div class='split-chars'>";
    textAry.forEach(function(ele){
      html+= "<div class='split-char'>" + ele + "</div>";
    })
    html+= "</div>";  

    ele.innerHTML = html;
  }

  // motiosn
  const motions = {
    init: ()=>{
      gsap.registerPlugin(ScrollTrigger);
      gsap.defaults({ease:  "power1.inOut"});
    },
    menuMotion : ()=>{
      const $btnOpenMenu = document.querySelector(".js-btn-open-menu");
      const $btnCloseMenu = document.querySelector(".js-btn-close-menu");
      const $menuBg = document.querySelector(".js-menu-bg");
      const $body = document.body;

      $btnOpenMenu.addEventListener("click", ()=>{
        document.body.classList.add("active-menu");
      })

      $btnCloseMenu.addEventListener("click", ()=>{
        document.body.classList.remove("active-menu");
      })
      $menuBg.addEventListener("click", ()=>{
        document.body.classList.remove("active-menu");
      })
    },
    loadingMotion : ()=>{
      const $introTitle= document.querySelector(".js-intro-title");
      splitText($introTitle);
      document.body.style.overflow = "hidden";

      gsap.set(".split-char", {
        opacity: 0,
        transform: "rotateX(90deg)",
        y: "30vh"
      })
      gsap.set(".js-intro-frame-01", {yPercent: 100});

      const tl = gsap.timeline();
      tl.to(".js-loading-text", {
        opacity: 0,
        duration: 0.7,
        repeat: 3,
        yoyo:true
      }).to(".js-loading-text", {y:-100});

      gsap.utils.toArray(".js-loading-bg").forEach((ele, idx)=>{
        tl.to(ele, {y:0, ease: "power2.out", duration: 0.6}, "-=0.4");
      });

      tl.to(".js-loading", {yPercent: -100, duration: 0.8, onComplete:()=>{
        document.body.style.overflow = "visible";
      }}, "-=0.5")      
      .to(".js-intro-frame-01",{yPercent: 0, duration: 0.8, ease: "power2.out"}, "-=0.4")
      .to(".split-char",{opacity: 1, transform: "rotateX(0)", y: "0", stagger: 0.04}, "-=0.4");
    },
    introMotion: ()=>{
      gsap.set(".intro-frame",{height: "100vh"});
      gsap.set(".js-intro-bg-01",{height: "100vh"});
      gsap.set(".js-intro-frame-02",{height: "100vh"});
      gsap.set(".js-intro-frame-03",{height: "100vh"});
      gsap.set(".js-intro-frame-04",{yPercent: 100});
      gsap.set(".js-intro-word",{yPercent: 100});
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".intro",
          start: "top top",
          end: "+=6000",
          scrub: 4,
          pin: true
        }
      })      
      tl.addLabel("motion-01")
      .to(".js-intro-img-01", {rotation: "0", duration: 10}, "motion-01")
      .to(".js-intro-title", {y: "-700vh", duration: 10}, "motion-01")
      .addLabel("motion-02")
      .to(".js-intro-frame-01", {height: 0, duration: 5}, "motion-02")
      .to(".js-intro-bg-01", {height: 0, duration: 5}, "motion-02")
      .to(".js-intro-frame-02", {height: 0, duration: 5})
      .to(".js-intro-frame-04", {yPercent: 0, duration: 5})
      .to(".js-intro-word", {yPercent: 0, duration: 6, stagger: 3}, "-=2");
    },
    goodsMotion: ()=>{
      gsap.set(".js-goods-wrap", {yPercent: 100});
      gsap.set(".js-goods-img", {yPercent: 100});

      gsap.utils.toArray(".goods-figure").forEach(function(ele){  
        const $wrap = ele.querySelector(".js-goods-wrap");
        const $img = ele.querySelector(".js-goods-img");
      
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ele,
            start: "top 80%",
            end: "bottom bottom",
            toggleActions: "restart none none reset",    
          }
        })
        tl.to($wrap, {yPercent:0, duration: .5})
        .to($img, {yPercent:0, duration: .5}, "-=0.4");
      })
    },
    studioMotion: ()=>{
      gsap.set(".js-rolling-03", {y: -150});
      gsap.set(".js-rolling-05", {y: -150});

      const tl = gsap.timeline({
        scrollTrigger : {
          trigger: ".rolling",
          start: "top 70%",
          end: "bottom top",
          scrub: 2
        }
      })

      tl.addLabel("ani-01")
      .to(".js-rolling-02", {y: -100}, "ani-01")
      .to(".js-rolling-03", {y: -50}, "ani-01")
      .to(".js-rolling-04", {y: -100}, "ani-01")
      .to(".js-rolling-05", {y: -50}, "ani-01");
    },
    faceMotion: ()=>{      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".face",
          start: "top 50%",
          end: "bottom 50%",
          scrub: 1,
          ease: Power0.easeNone
        }
      });
      gsap.utils.toArray(".face-screen").forEach((ele, idx)=>{      
        if(idx == 0) return;
        tl.to(".js-face-track", {
          x : -ele.offsetWidth * idx,
          duration: 1
        }, "+=1")
      })
    },
    challengeMotion: ()=>{
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".challenge",
          start : "top bottom",
          end:"top top",
          scrub: 2
        }
      })
      tl.addLabel('ani-01')
      .to(".js-user-01", {scaleX:1, scaleY:1, duration: 0.5, y:50}, "ani-01")
      .to(".js-user-02", {scaleX:1, scaleY:1, duration: 0.5, y: -30}, "ani-01");
    },
    analysisMotion: ()=>{
      gsap.to(".js-analysis-screen", {
        yPercent: -70,        
        scrollTrigger: {
          trigger: ".analysis",
          start: "top 30%",
          end: "bottom 70%",
          scrub: 1,
          ease: Power0.easeNone
        }
      })
    },
    sleepMotion: ()=>{
      gsap.to(".js-sleep", {
        color:"#fff",
        backgroundColor: "#000",
        scrollTrigger: {
          trigger: ".js-sleep",
          start: "top 80%",
          end: "top 60%",
          scrub: 1
        }
      })
      
      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".sleep",
          start: "top 200",
          end: "top -100",
          scrub: 1,
        }
      })
      tl.to(".js-sleep-screen-01", {opacity: 1})
      .to(".js-sleep-screen-02", {opacity: 1});
    },
    osMotion: ()=>{
      gsap.utils.toArray(".js-os-line").forEach(function(ele, idx, all){
        gsap.set(ele,{rotation: idx * (360 / all.length)})
      })
      gsap.to(".js-os-circle",{
        rotation : 180,
        scaleX : 1, scaleY : 1,
        scrollTrigger: {
          trigger: ".os",
          start: "top 50%",
          end: "30% 30%",
          scrub: 1,
        }
      })
    },
    resizeRefresh: ()=>{
      window.addEventListener("resize", ()=>{
        ScrollTrigger.refresh();
      })
    }
  }

  
  motions.init();
  motions.menuMotion();
  motions.loadingMotion();
  motions.introMotion();
  motions.goodsMotion();
  motions.studioMotion();
  motions.faceMotion();
  motions.challengeMotion();
  motions.analysisMotion();
  motions.sleepMotion();
  motions.osMotion();
  motions.resizeRefresh();
})()