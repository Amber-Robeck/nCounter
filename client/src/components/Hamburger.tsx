import React from 'react';
import { slide as Menu } from 'react-burger-menu';

const Hamburger = () => {
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
        <Menu>
            {liElements.map(liElement => (
                <a key={liElement.name}
                    href={liElement.link}
                    className="menu-item">
                    {liElement.name}
                </a>
            ))}
        </Menu>
    );
};

export default Hamburger;