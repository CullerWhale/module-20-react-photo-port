import React from 'react';

function Nav() {
    const categories = [
        {
            name: "commercial",
            description:
                "Photos of grocery stores, food trucks, and other commercial projects",
        },
        { name: "portraits", description: "Portraits of people in my life" },
        { name: "food", description: "Delicious delicacies" },
        {
            name: "landscape",
            description: "Fields, farmhouses, waterfalls, and the beauty of nature",
        },
    ];
// pineapple = name
    function categorySelected (pineapple) {
        console.log(`${pineapple} clicked`)
    }

    return (
        <header>
            <h2>
                <a href="/">
                    <span role="img" aria-label="camera"> 📸</span> Oh Snap!
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about">
                            About me
                        </a>
                    </li>
                    <li>
                        <span>Contact</span>
                    </li>
                    {/* bananas = category */}
                    {categories.map((bananas) => (
                        <li
                            className="mx-1"
                            key={bananas.name}
                        >
                            <span onClick= { () => categorySelected(bananas.name)}>
                                {bananas.name}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
};

export default Nav