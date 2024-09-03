import React from 'react'
import SubscribeForm from '../Button/SubscribeForm'

const About = () => {
    return (
        <>
            <section id="about">
                <div className="bg-gradient-to-tr from-blue-900 to-indigo-400">
                    <div className="pt-24 px-12 lg:px-24 flex flex-row">
                        <div className='text-center md:text-left text-white'>
                            <div className="flex flex-col">

                                <h1 className="text-xl md:text-3xl lg:text-4xl font-bold pb-4 pl-4" data-aos="fade-right">Les Voyageurs du Coeur</h1>

                                <div className='bg-slate-900 bg-opacity-30 rounded-3xl px-4' data-aos="fade-down-right">
                                    <p className="py-6 md:text-xl text-wrap" data-aos="fade-up">L'association "Les Voyageurs du Cœur" a été créé en Février 2024 par des Théobaldiens âgés entre 18 et 20 ans.
                                        Dans le contexte d'une société individualiste, les jeunes ont choisi de s'engager pour développer des actions de solidarité en faveur des personnes dans le besoin.
                                        Un groupe formé d'environ 15 jeunes, met en place divers événements pour financer les actions prévues à cet effet. Au cours de ces événements, leur objectif est aussi de
                                        sensibiliser le public sur l'importance de la solidarité dans la vie. Si vous souhaitez les rejoindre pour participer à leurs actions, vous êtes les bienvenus et ils vous accueillent avec joie.
                                    </p>
                                </div>
                                <div className='flex flex-row space-x-4 pt-8'>
                                    <div>
                                        <SubscribeForm />
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