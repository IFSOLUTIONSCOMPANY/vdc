import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTiktok, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <FontAwesomeIcon icon={faFacebook} size='xl' style={{ color: "#ffffff", }} />
                    <FontAwesomeIcon icon={faInstagram} size='xl' style={{ color: "#ffffff", }} />
                    <FontAwesomeIcon icon={faTiktok} size='xl' style={{ color: "#ffffff", }} />
                </div>
            </nav>
            <aside>
                <p>Copyright © 2024 - Tout droits réservés - Association VDC</p>
            </aside>
        </footer >
    )
}

export default Footer