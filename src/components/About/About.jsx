import React from 'react'

const About = () => {
    return (
        <>
            <section id="about">
                <div className="bg-gradient-to-tr from-blue-900 to-indigo-400">
                    <div className="pt-24 px-12 lg:px-24 flex flex-row">
                        <div className='text-center md:text-left text-white'>
                            <div className="flex flex-col">
                                <h1 className="text-xl md:text-3xl lg:text-4xl font-bold pb-4 pl-4" data-aos="fade-right">Les Voyageurs du Coeur</h1>
                                <div className='bg-slate-900 rounded-3xl px-4' data-aos="fade-down-right">
                                    <p className="py-6 md:text-xl" data-aos="fade-up">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
                                        exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem atque modi dolorum vero labore similique
                                        sit. Odio quod, beatae impedit ab quisquam nulla sapiente itaque numquam, assumenda ullam non eius!
                                        <br />
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatibus fuga doloremque, ut mollitia quos quae laudantium quisquam nemo,
                                        assumenda beatae corporis, voluptatem delectus commodi quibusdam dolores. Laudantium, delectus quia!
                                    </p>
                                </div>

                                <div>
                                    <div className='pt-8'>
                                        <button type="button" className="btn btn-info text-white glass btn-sm sm:btn-sm md:btn-md lg:btn-lg" data-aos="zoom-in" data-aos-duration="1000">Faire un don</button>
                                    </div>
                                </div>
                                <div className='mt-10' data-aos="zoom-out-left" data-aos-duration="2000">
                                    <img src='../../../public/image/charity_banner.jpg' alt='charity banner' className='rounded-3xl drop-shadow-md md:hidden' />
                                </div>
                            </div>
                        </div>
                        <div>
                            <img src='../../../public/image/charity_banner.jpg' alt='charity banner' className='hidden md:flex rounded-3xl drop-shadow-md ml-8' />
                        </div>
                    </div>

                </div>
            </section >
        </>
    )
}
export default About