const showAnim = gsap.from('.header', { 
    yPercent: -100,
    paused: true,
    duration: 0.2
  }).progress(1);
  
  ScrollTrigger.create({
    start: "50px top",
    end: 99999,
    onUpdate: (self) => {
      self.direction === -1 ? showAnim.play() : showAnim.reverse()
    }
  });
  


  