import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
    // const [categories] = useState([
    //     { name: "commercial", description: "Photos of grocery stores, food trucks, and other commercial projects" },
    //     { name: "portraits", description: "Portraits of people in my life" },
    //     { name: "food", description: "Delicious delicacies" },
    //     {
    //         name: "landscape",
    //         description: "Fields, farmhouses, waterfalls, and the beauty of nature",
    //     },
    // ]);

    // const [currentCategory, setCurrentCategory] = useState(categories[0]);
    // // pineapple = name
    // function categorySelected (pineapple) {
    //     console.log(`${pineapple} clicked`)
    //     return pineapple
    // }


    // pineapple = item
    // const handleClick = (pineapple) => {
    //     console.log(pineapple);
    //     return pineapple;
    //   };

    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
      } = props;

      useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
      }, [currentCategory]);

    return (
        <header className="flex-row px-1">
            <h2>
                <a href="/">
                    <span role="img" aria-label="camera">  
                        📸
                    </span> Oh Snap!
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about">
                            About me
                        </a>
                    </li>
                    <li >
                        <span className="mx-2">Contact</span>
                    </li>
                    {/* bananas = category */}
                    {categories.map((bananas) => (
                        <li
                            className={`mx-1 ${
                                currentCategory.name === bananas.name && 'navActive'
                                }`}
                            key={bananas.name}
                        >
                            <span onClick={() => setCurrentCategory(bananas)}>
                                {capitalizeFirstLetter(bananas.name)}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )



    // return (
    //     <header className="flex-row px-1">
    //         <h2>
    //             <a href="/">
    //                 <span role="img" aria-label="camera"> 📸</span> Oh Snap!
    //             </a>
    //         </h2>
    //         <nav>
    //             <ul className="flex-row">
    //                 <li className="mx-2">
    //                     <a href="#about" onClick={() => handleClick("About")}>
    //                         About me
    //                     </a>
    //                 </li>
    //                 <li className={"mx-2"}>
    //                     <span onClick={() => handleClick('Contact')}>Contact</span>
    //                 </li>
    //                 {/* bananas = category */}
    //                 {categories.map((bananas) => (
    //                     <li
    //                         className="mx-1"
    //                         key={bananas.name}
    //                     >
    //                         <span onClick= { () => handleClick(bananas.name)}>
    //                             {capitalizeFirstLetter(bananas.name)}
    //                         </span>
    //                     </li>
    //                 ))}
    //             </ul>
    //         </nav>
    //     </header>
    // )
};

export default Nav