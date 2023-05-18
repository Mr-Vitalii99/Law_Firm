

//*Автоматическая настройка падинга под высоту хедера */

// const pageHeaderHeight = document.querySelector("header").getBoundingClientRect().height
// document.body.style.paddingTop = pageHeaderHeight + 'px';

(() => {
     document.addEventListener('DOMContentLoaded', function () {
          gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

          if (ScrollTrigger.isTouch !== 1) {

               ScrollSmoother.create({
                    wrapper: '.wrapper',
                    content: '.content',
                    smooth: 4,
                    effects: true
               })

               gsap.fromTo('.hero', { opacity: 1 }, {
                    opacity: 0,
                    scrollTrigger: {
                         trigger: '.hero',
                         start: '200',
                         end: '720',
                         scrub: true
                    }
               })

               gsap.fromTo('.greeting', { opacity: 1 }, {
                    opacity: 0,
                    scrollTrigger: {
                         trigger: '.greeting',
                         start: '200',
                         end: '720',
                         scrub: true
                    }
               })
               gsap.fromTo('.approach', { opacity: 1 }, {
                    opacity: 0,
                    scrollTrigger: {
                         trigger: '.approach',
                         start: 'top',
                         end: 'bottom',
                         scrub: true
                    }
               })

               gsap.fromTo('.services', { opacity: 1 }, {
                    opacity: 0,
                    scrollTrigger: {
                         trigger: '.services',
                         start: '200',
                         end: '720',
                         scrub: true
                    }
               })

               gsap.fromTo('.advantage', { opacity: 1 }, {
                    opacity: 0,
                    scrollTrigger: {
                         trigger: '.advantage',
                         start: 'top',
                         end: 'bottom',
                         scrub: true
                    }
               })

               let listSetServices = gsap.utils.toArray('.list-set--services .list-set__item--services')

               listSetServices.forEach(item => {
                    gsap.fromTo(item, { opacity: 0, x: -150 }, {
                         opacity: 1, x: 0,
                         scrollTrigger: {
                              trigger: item,
                              start: '-850',
                              end: '-500',
                              scrub: 5,
                         },
                         rotation: 360
                    })
               })


               gsap.to(".application__form", {
                    scrollTrigger: {
                         trigger: ".application__form",
                         start: '-550',
                         end: '-100',
                         scrub: 10,
                    },
                    x: '160%',
               });

               gsap.to(".greeting__text-container", {
                    scrollTrigger: {
                         trigger: ".greeting__text-container",
                         start: '-550',
                         end: '-100',
                         scrub: 2,
                    },
                    x: "25%",
               });


               //* Автонабор
               const options = {
                    rootMargin: '0px',
                    threshold: 0.5
               };

               const callback = (entries, observer) => {
                    entries.forEach(entry => {
                         if (entry.isIntersecting) {
                              let typed = new Typed('#title-autofill', {
                                   strings: ["Ласкаво просимо до Batman Co Group"],
                                   typeSpeed: 50,
                                   backSpeed: 30,
                                   startDelay: 1000,
                                   loop: false,
                                   showCursor: false
                              });

                              let typed1 = new Typed('#text-autofill', {
                                   strings: ["Batman Co Group(BCG) — це спеціалізована юридична фірма, що спеціалізується на корпоративному праві.^200 Наша практика зосереджена в галузі управління бізнесом, захисту активів, венчурного капіталу та корпоративних угод.^200 Ми пишаємося тим, що будуємо справжні стосунки з нашими клієнтами та співпрацюємо з ними у довгостроковій перспективі."],
                                   typeSpeed: 25,
                                   backSpeed: 30,
                                   startDelay: 4000,
                                   loop: false,
                                   showCursor: false
                              });

                              observer.unobserve(entry.target);
                         }
                    });
               };

               const observer = new IntersectionObserver(callback, options);
               const target = document.querySelector('#title-autofill');
               observer.observe(target);
          }
     })
})();


//* Кнопка послуги в services-main-page
(() => {
     const body = document.querySelector('body');
     body.addEventListener('click', (e) => {
          if (e.target.closest('.services__btn')) {
               window.open("services.html");
          }
     })
})();
