const tl = new TimelineMax()
const myText = new SplitType('.text', { type: 'chars' })
const chars = myText.chars

tl.from('.mainDubai', 1, {
    x: -20,
    opacity: 0,
    // scale: 0.9,
})
tl.from('.huracan', 1, {
    x: '100%',
    // scale: 0.9,
})
tl.from('.huracan__wrapper__left', 1, {
    opacity: 0,
    // scale: 0.5,
    y: -20,
    // scale: 0.9,
})
tl.from('.special', 1, {
    opacity: 0,
    // scale: 0.5,
    x: -20,
    // scale: 0.9,
})
tl.from('.specai__block', 3, {
    opacity: 0,
    scale: 0.5,
    y: 200,
    // scale: 0.9,
})
tl.from('.about', 3, {
    opacity: 0,
    scale: 0.5,
    y: 200,
})
tl.from('.znak', 1, {
    x: '100%',
    opacity: 0,
})
tl.from('.videoCont', 1, {
    y: 500,
    opacity: 0,
})

// tl.from('.header__line', 1, {
//     y: '-100%',
// })

// tl.from('nav', .5, {
//     y: -20,
//     opacity: 0,
// })
// // tl.to юхотади обекти
// // tl.to('button', 5, {

// //     opacity: 0,
// // }, 1)
// // 

tl.staggerFrom(chars, .45, { opacity: 0 }, .1)

// tl.staggerFrom('.star', .35, { opacity: 0 }, .1)

// tl.from('button', 1, {
//     y: 50,
//     opacity: 0,
// })
// // tl.to('button',  {
// //     y: 50,
// //     opacity: 0,
// // })

// gsap.from('.header__image', 3, {
//     opacity: 0,
//     x: 200,
//     delay: 2.5, 
//     skewX: -5,
//     skewY: -5,
// })