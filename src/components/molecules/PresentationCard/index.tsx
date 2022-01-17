import { StaticImage } from 'gatsby-plugin-image'
import React, { FC } from 'react'
import { Button } from '../../atoms/Button'

const PresentationCard: FC = () => {
  return (
    <div className="card">
      <div className="md:flex">
        <div className="pre-card-image">
          <StaticImage
            src="../../../images/shadito-selfie.jpg"
            width={400}
            quality={95}
            formats={['auto', 'webp', 'avif']}
            alt="Shadito Selfie"
            placeholder="blurred"
            layout="fixed"
          />
        </div>
        <div className="card-content">
          <p className="title">Hola, Soy Shadito</p>
          <p className="subtitle">Desarrollador Apasionado</p>
          <p className="text-content">
            Habilidad para construir aplicaciones con operaciones de front-end y
            back-end
          </p>
          <div className="card-footer">
            <div>
              <Button variant="primary" label="Contratar" />
              <Button variant="secondary" label="Obtener CV" />
            </div>
          </div>
        </div>
        <div className="post-card-image">
          <StaticImage
            src="../../../images/shadito-selfie.jpg"
            width={400}
            quality={95}
            formats={['auto', 'webp', 'avif']}
            alt="Shadito Selfie"
            placeholder="blurred"
            layout="fixed"
          />
        </div>
      </div>
    </div>
  )
}

export default PresentationCard
