import React from 'react'
import { Icon } from '@iconify/react';

const PDF_FILE_URL = 'http://localhost:5173/assets/event/fiche_dadhesion_association_vdc.docx'
function SubscribeForm() {
    const downloadFileAtURL = (url) => {
        const fileName = url.split('/').pop()
        const aTag = document.createElement('a')
        fetch(url).then
        aTag.href = url
        aTag.download = 'Adhesion_VDC.pdf'
        aTag.setAttribute('download', fileName)
        document.body.appendChild(aTag)
        aTag.click()
        aTag.remove()
    }
    return (
        <button className='btn btn-primary text-white glass btn-sm sm:btn-sm md:btn-md lg:btn-md' data-aos="zoom-in" data-aos-duration="1000" onClick={() => { downloadFileAtURL(PDF_FILE_URL) }}><Icon icon="material-symbols:download" width="1.5rem" />Adhésion</button>
    )
}

export default SubscribeForm