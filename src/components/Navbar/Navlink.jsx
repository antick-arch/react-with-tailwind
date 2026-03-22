const Navlink = ({NavMenu}) => {
    return (
        <li className='p-1 border border-white hover:bg-red-500 duration-700 text-center'>
            <a href={NavMenu.link} className='text-black font-bold'>
                {NavMenu.name}
                </a>
        </li>
    );
};

export default Navlink;