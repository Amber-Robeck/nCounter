import React, { ReactNode } from 'react'
import { AiFillLinkedin, AiFillGithub, AiFillInstagram, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'
import { IconContext } from "react-icons";

const Footer = () => {
    const elements: { name: string, url: string, icon: ReactNode }[] = [
        { name: "Phone", url: "tel:+1-917-917-917", icon: <AiOutlinePhone /> },
        { name: "LinkedIn", url: "https://www.linkedin.com", icon: <AiFillLinkedin /> },
        { name: "GitHub", url: "https://www.github.com", icon: <AiFillGithub /> },
        { name: "Instagram", url: "https://www.instagram.com", icon: <AiFillInstagram /> },
        { name: "Email", url: "mailto:yourcompany@gmail.com", icon: <AiOutlineMail /> }
    ];

    return (
        <footer id='footer'>
            {elements.map((element) => {
                return (
                    <div key={element.name}>
                        <a className='link' href={element.url}>
                            <IconContext.Provider value={{ className: "footer-icon" }}>
                                {element.icon}
                            </IconContext.Provider>
                        </a>
                    </div>
                )
            })}
        </footer>
    )
}

export default Footer
