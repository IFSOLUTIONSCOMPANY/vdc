import React from 'react'

const About = () => {

    return (
        <>
            <section id="about">
                <div className="hero min-h-screen bg-gradient-to-tr from-blue-900 to-indigo-400">
                    <div className="hero-content">
                        <div className="px-8 flex flex-row">
                            <div className='text-center md:text-left text-white'>
                                <div className="flex flex-col">
                                    <h1 className="text-5xl font-bold">Les Voyageurs du Coeur</h1>
                                    <p className="py-6 text-xl">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
                                        exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem atque modi dolorum vero labore similique
                                        sit. Odio quod, beatae impedit ab quisquam nulla sapiente itaque numquam, assumenda ullam non eius!
                                        <br />
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatibus fuga doloremque, ut mollitia quos quae laudantium quisquam nemo,
                                        assumenda beatae corporis, voluptatem delectus commodi quibusdam dolores. Laudantium, delectus quia!
                                    </p>
                                    <div>
                                        <div>
                                            <button type="button" className="btn btn-error text-white">Faire un don</button>

                                        </div>
                                    </div>
                                    <div className='md:flex-row mt-10'>
                                        <img src='../../../public/image/charity_banner.jpg' alt='charity banner' className='rounded-3xl drop-shadow-md' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}
export default About