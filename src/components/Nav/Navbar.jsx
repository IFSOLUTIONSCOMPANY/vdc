import React from 'react'
import { useRef } from 'react'
import { HashLink as Link } from 'react-router-hash-link'



const Navbar = () => {
    const aboutRef = useRef(null)
    const eventsRef = useRef(null)
    const executeScroll = (ref) => ref.current.scrollIntoView({ behavior: 'smooth' })

    return (
        <div className="sticky top-0 z-10 backdrop-blur-sm bg-white/5 navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-square btn-ghost md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] backdrop-blur-sm bg-white/10 p-2 shadow rounded-box w-52">
                        <li><Link to="#about">À propos</Link></li>
                        <li><Link to="#events">Évènements</Link></li>
                        <li><Link to="#journey">Voyage</Link></li>
                    </ul>
                </div>
                <img src="../../../logo/vdc.png" width="80px" className='mx-4 w-24 md:flex hidden' />
            </div>
            <img src="../../../logo/vdc.png" width="80px" className='flex place-self-auto w-24 md:hidden place-content-center' />
            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal text-lg px-1 text-white bg-white/10 rounded-3xl">
                    <li className='mx-8'><Link to="#about">À propos</Link></li>
                    <li className='mx-8'><Link to="#events">Évènements</Link></li>
                    <li className='mx-8'><Link to="#journey">Voyage</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <div className="hidden md:flex"></div>
            </div >
        </div>
    )
}

export default Navbar