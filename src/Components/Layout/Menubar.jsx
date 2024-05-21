import React, { useState } from 'react';

const Menubar = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    const [selectedItemIndex, setSelectedItemIndex] = useState(null);

    const menuItems = ["All", "Music", "Videos", "Photos", "Documents", "Settings", "Drama", "JavaScript", "Coding", "Painting", "Mobile", "Laptop", "Electrical Device", "Website"]; 

    const visibleMenuItems = showSidebar ? menuItems : menuItems.slice(0, 15);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    const handleMenuItemClick = (index) => {
        setSelectedItemIndex(index);
        // Do something when a menu item is clicked
    };

    return (
        <div className='flex gap-5 px-10'>
            {showSidebar && (
                <button className="btn btn-active" onClick={toggleSidebar}>
                    {'<'}
                </button>
            )}
            {visibleMenuItems.map((item, index) => (
                <button
                    key={index}
                    style={{
                        color: selectedItemIndex === index ? 'white' : 'inherit',
                        backgroundColor: selectedItemIndex === index ? 'black' : 'inherit'
                    }}
                    className="btn btn-active"
                    onClick={() => handleMenuItemClick(index)}
                >
                    {item}
                </button>
            ))}
            {menuItems.length > 15 && (
                <button className="btn btn-active" onClick={toggleSidebar}>
                    {'>'}
                </button>
            )}
        </div>
    );
};

export default Menubar;
