export const particleSliderConfig = {
  type: 'carousel',
  // 'slider': not dynamically generate slides(no infinite loop)
  // 'carousel': dynamically create slides e.g when we reach at last slide we see first slide
  // next to it(changes slides without starting over)
  rewind: false,
  // only for type="slider" , slider will rewind to the first/last slide when it's
  // at the start/end.
  rewindDuration: 800, // rewinding animation duration in ms
  startAt: 0, // start index
  perView: 5, // number of slides visible on the single viewport
  focusAt: 'center', // position of active slide related to viewport , 'center',0,1,2,...
  gap: 10, // size of the gap added between slides
  autoplay: 4000, // number of ms , false to stop autoplay
  hoverpause: true, // stop autoplay on hover
  keyboard: false, // allow for changing slides with left/right keyboard arrows
  swipeThreshold: 80, // only for mobile,min swipe distance to change slide,false for turn off
  dragThreshold: 150, // only for desktop,min drag distance to change slide,false for turn off
  perTouch: false, // max number of slides change when swipe/drag , false for  unlimited
  animationDuration: 400, // in ms
  animationTimingFunc: 'ease', // string ... 'linear','ease','ease-in','ease-out','ease-in-out',
  // 'cubic-bezier(0.165,0.840,0.440,1.000)' (default)
  direction: 'ltr', // 'ltr' , 'rtl'
  peek: 0, // distance value of the next/previous viewports which have to peek in the current view , 50px from left and 50px from right
  // peek and focusAt will affect each other , if we use focusAt: 'center' set peek:0
  breakpoints: {
    1000: { perView: 4, peek: 0 },
    750: { perView: 3, peek: 0 },
    500: { perView: 2, peek: 0 },
  },
}
