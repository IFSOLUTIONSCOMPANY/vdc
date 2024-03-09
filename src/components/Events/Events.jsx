import React from 'react'

const Events = () => {
    const handleCarouselNavigation = (slideId) => {
        const slideElement = document.getElementById(slideId);
        const carousel = document.querySelector('.carousel');

        if (slideElement && carousel) {
            carousel.scrollLeft = slideElement.offsetLeft;
        }
    };
    return (
        <>
            <section id="events">
                <div className="hero max-h-screen bg-gradient-to-r from-green-800 to-red-800">
                    <div className="hero-content">
                        <div className="text-center  text-white" data-lg-scroll-animate="{'x': ['0%', '100%'], 'opacity': ['0', '1']}">
                            <h1 className="text-5xl font-bold my-12">Évènements</h1>
                            <div className="carousel w-full">
                                <div id="slide1" className="carousel-item relative w-full">
                                    <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden md:max-w-2xl">
                                        <div className="md:flex">
                                            <div className="md:shrink-0">
                                                <img className="h-56 w-full object-cover md:h-full md:w-48" src="../../../image/event_1.jpg" alt="Modern building architecture" />
                                            </div>
                                            <div className="p-8">
                                                <div className="uppercase tracking-wide text-lg text-indigo-500 font-semibold">Event 1</div>
                                                <a href="#" className="block mt-1 text-md leading-tight font-medium text-black hover:underline">1 Avenue Lorem Ipsum - 23/03/2024</a>
                                                <p className="mt-2 text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium modi minima sint nobis at velit quam fuga nulla ea officiis itaque, porro unde suscipit molestiae sit tenetur. Assumenda, quos rerum.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 top-1/2">
                                        <button onClick={() => handleCarouselNavigation('slide4')} className="btn btn-circle bg-slate-900">❮</button>
                                        <button onClick={() => handleCarouselNavigation('slide2')} className="btn btn-circle bg-slate-900">❯</button>
                                    </div>
                                </div>
                                <div id="slide2" className="carousel-item relative w-full">
                                    <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden md:max-w-2xl">
                                        <div className="md:flex">
                                            <div className="md:shrink-0">
                                                <img className="h-56 w-full object-cover md:h-full md:w-48" src="../../../image/event_2.jpg" alt="Modern building architecture" />
                                            </div>
                                            <div className="p-8">
                                                <div className="uppercase tracking-wide text-lg text-indigo-500 font-semibold">Event 2</div>
                                                <a href="#" className="block mt-1 text-md leading-tight font-medium text-black hover:underline">4 Boulevard Lorem Ipsum - 03/04/2024</a>
                                                <p className="mt-2 text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium modi minima sint nobis at velit quam fuga nulla ea officiis itaque, porro unde suscipit molestiae sit tenetur. Assumenda, quos rerum.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 top-1/2">
                                        <button onClick={() => handleCarouselNavigation('slide1')} className="btn btn-circle bg-slate-900">❮</button>
                                        <button onClick={() => handleCarouselNavigation('slide3')} className="btn btn-circle bg-slate-900">❯</button>
                                    </div>
                                </div>
                                <div id="slide3" className="carousel-item relative w-full">
                                    <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden md:max-w-2xl">
                                        <div className="md:flex">
                                            <div className="md:shrink-0">
                                                <img className="h-56 w-full object-cover md:h-full md:w-48" src="../../../image/event_2.jpg" alt="Modern building architecture" />
                                            </div>
                                            <div className="p-8">
                                                <div className="uppercase tracking-wide text-lg text-indigo-500 font-semibold">Event 3</div>
                                                <a href="#" className="block mt-1 text-md leading-tight font-medium text-black hover:underline">7 Rue Lorem Ipsum - 12/04/2024</a>
                                                <p className="mt-2 text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium modi minima sint nobis at velit quam fuga nulla ea officiis itaque, porro unde suscipit molestiae sit tenetur. Assumenda, quos rerum.</p>
                                            </div>
                                        </div>
                                    </div>                                    <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 top-1/2">
                                        <button onClick={() => handleCarouselNavigation('slide2')} className="btn btn-circle bg-slate-900">❮</button>
                                        <button onClick={() => handleCarouselNavigation('slide4')} className="btn btn-circle bg-slate-900">❯</button>
                                    </div>
                                </div>
                                <div id="slide4" className="carousel-item relative w-full">
                                    <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden md:max-w-2xl">
                                        <div className="md:flex">
                                            <div className="md:shrink-0">
                                                <img className="h-56 w-full object-cover md:h-full md:w-48" src="../../../image/event_2.jpg" alt="Modern building architecture" />
                                            </div>
                                            <div className="p-8">
                                                <div className="uppercase tracking-wide text-lg text-indigo-500 font-semibold">Event 4</div>
                                                <a href="#" className="block mt-1 text-md leading-tight font-medium text-black hover:underline">8 Impasse Lorem Ipsum - 07/05/2024</a>
                                                <p className="mt-2 text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium modi minima sint nobis at velit quam fuga nulla ea officiis itaque, porro unde suscipit molestiae sit tenetur. Assumenda, quos rerum.</p>
                                            </div>
                                        </div>
                                    </div>                                    <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 top-1/2">
                                        <button onClick={() => handleCarouselNavigation('slide3')} className="btn btn-circle bg-slate-900">❮</button>
                                        <button onClick={() => handleCarouselNavigation('slide1')} className="btn btn-circle bg-slate-900">❯</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Events