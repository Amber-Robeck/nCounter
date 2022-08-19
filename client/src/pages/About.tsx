import React from 'react'

const About = () => {

    const aboutContainer =
    {
        title: 'About',
        description: 'This is my company',
        image: 'https://picsum.photos/300',
        imageAlt: 'about-image',
        imageSizes: '(max-width: 300px) 100vw, 300px'
    }

    return (
        <div id='about'>
            <h1 id='about-title'>{aboutContainer.title}</h1>
            <p id='about-description'>{aboutContainer.description}</p>
            <img id='about-image' src={aboutContainer.image} alt={aboutContainer.imageAlt} sizes={aboutContainer.imageSizes} />
        </div>
    )
}

export default About
