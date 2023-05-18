gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

    if (ScrollTrigger.isTouch !== 1) {

        ScrollSmoother.create({
            wrapper: '.wrapper',
            content: '.content',
            smooth: 5,
            effects: true
        })

        gsap.fromTo('.hero-team', { opacity: 1 }, {
            opacity: 0,
            scrollTrigger: {
                trigger: '.hero-team',
                start: '200',
                end: '720',
                scrub: true
            }
        })

        let itemsL = gsap.utils.toArray('.team__left .team__item')

        itemsL.forEach(item => {
            gsap.fromTo(item, { opacity: 0, x: -50 }, {
                opacity: 1, x: 0,
                scrollTrigger: {
                    trigger: item,
                    start: '-750',
                    end: '-50',
                    scrub: true
                }
            })
        })

        let itemsR = gsap.utils.toArray('.team__right .team__item')

        itemsR.forEach(item => {
            gsap.fromTo(item, { opacity: 0, x: 50 }, {
                opacity: 1, x: 0,
                scrollTrigger: {
                    trigger: item,
                    start: '-750',
                    end: 'top',
                    scrub: true
                }
            })
        })
    }

