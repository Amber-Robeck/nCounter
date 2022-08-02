import React from 'react'

const Navigation = () => {
    const liElements = [
        {
            name: 'Home',
            link: '/'
        },
        {
            name: 'About',
            link: '/about'
        },
        {
            name: 'Contact',
            link: '/contact'
        }
    ]
    return (
        <nav role='navigation' id='nav'>
            <ul>
                {liElements.map(liElement => (
                    <li key={liElement.name}>
                        <a href={liElement.link}>{liElement.name}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navigation
