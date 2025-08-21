const maskedImage = document.querySelector('.masked-img')
const art = document.querySelector('.art')
const description = document.querySelector('.texting')
const hidden = document.querySelectorAll('.hidden')
const smoothWrapper = document.getElementById('smooth-wrapper')
const smoothContent = document.getElementById('smooth-content')

gsap.registerPlugin(ScrollTrigger,SplitText, ScrollSmoother);


ScrollSmoother.create({
    wrapper:smoothWrapper,
    content:smoothContent,
    smooth:1.5,
    effects:true,
})

function splitText() {
    const splitter = SplitText.create('.welcome',{
      type: 'words,chars',
    })
    gsap.from(splitter.chars,{
        autoAlpha: 0,
        duration:1,
        delay: 0.5,
        stagger: 0.1,
        y:100,
        // x:100,
        ease:"power2.out",
    })
}
splitText()
function coolAnimation(){

    const splitz =  SplitText.create('.split',{
        type:'words,chars'
    })


    const maskTimeLine = gsap.timeline({
        scrollTrigger:{
            trigger:art,
            start:'top 70%',
            end:'bottom 90%',
            scrub:1.5,


            // You can add 'pin: true' here if you want the section to stay fixed
            // while you scroll through the animation.
        },
    })

    maskTimeLine
        .to(maskedImage,{
            y:400,
            webkitMaskSize:'500%',
            maskSize:'500%',
            duration:20,
            ease:'power1.inOut',
            scale:1,

        })
        .fromTo(splitz.chars,
            {
                opacity: 0,
                ease:'power2.out',
                y:0,
                autoAlpha: 0,
                scale:0.9

            },
            {
                opacity:1,
                ease:'power2.out',
                y:40,
                duration:5,
                stagger: 0.05,
                scale:1,
            },
            '<'
        );

}
coolAnimation()

function multiReveal(){
    gsap.utils.toArray(hidden).forEach((el) =>{
        gsap.to(el,{
            opacity: 1,
            y:0,
            duration:1,
            delay:0,

            scrollTrigger:{
                trigger:el,
                start:'top 90%',
                toggleActions:'play none none reverse',
            }
        })
    })
}
multiReveal()



