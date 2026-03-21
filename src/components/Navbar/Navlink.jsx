import React from 'react';

const Navlink = ({NavMenu}) => {
    return (
        <li>
            <a href={NavMenu.link}>{NavMenu.name}</a>
        </li>
    );
};

export default Navlink;