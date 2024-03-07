import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className="sticky top-0 backdrop-blur-sm bg-white/5 flex font-semibold text-slate-50">
                <div className="navbar-start p-2">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#217851] rounded-box w-52">
                            <li><a>À propos</a></li>
                            <li><a>Évènements</a></li>
                            <li><a>Voyage</a></li>
                        </ul>
                    </div>
                    <img src="../../../logo/vdc.png" width="80px" className='text-center' />
                </div>
                <div className="navbar-center items-center  hidden md:flex">
                    <ul className="menu menu-horizontal">
                        <li><a>À propos</a></li>
                        <li><a>Évènements</a></li>
                        <li><a>Voyage</a></li>
                    </ul>
                </div>
            </div >
        </>
    )
}

export default Navbar