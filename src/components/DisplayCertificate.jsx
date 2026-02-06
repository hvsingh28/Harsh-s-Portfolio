import React from 'react'
import CertificateCard from './CertificateCard'
import { certificates } from '../data/certificates'
const DisplayCertificate = () => {
  return (
    <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-8'>
        {
            certificates.map((certificate)=>(
                <CertificateCard image={certificate.image} cname={certificate.cname} issuedby={certificate.issuedby} date={certificate.date} Verify={certificate.Verify} />
            ))
        }
    </div>
  )
}

export default DisplayCertificate