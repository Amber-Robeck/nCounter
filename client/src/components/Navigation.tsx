import React from 'react';

import '../assets/css/App.css';

// interface thePage {
//     currentPage: string,
//     setCurrentPage: React.Dispatch<React.SetStateAction<string>>,
//     liElements: Array<{ name: string, link: string }>
// };

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
    ];
    // const changePage = (page: any) => {
    //     console.log(page)
    //     return setCurrentPage(page);
    // };
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
