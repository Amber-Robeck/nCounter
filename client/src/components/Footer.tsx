import React, { ReactNode } from 'react'
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from 'react-icons/ai'

const Footer = () => {
    const elements: { name: string, url: string, icon: ReactNode }[] = [
        { name: "LinkedIn", url: "https://www.linkedin.com", icon: <AiFillLinkedin /> },
        { name: "GitHub", url: "https://www.github.com", icon: <AiFillGithub /> },
        { name: "Instagram", url: "https://www.instagram.com", icon: <AiFillInstagram /> },
    ];

    return (
        <footer id='footer'>
            {elements.map((element) => {
                return (
                    <div key={element.name}>
                        <a href={element.url}>
                            {element.icon}
                        </a>
                    </div>
                )
            })}
        </footer>
    )
}

export default Footer
