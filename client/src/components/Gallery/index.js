import { capitalizeFirstLetter } from '../../utils/helpers';
import React, { useState } from "react";
import photo from "../../assets/small/commercial/0.jpg";


function Gallery() {
    // const [categories] = useState([
    //     { name: "commercial", description: "Photos of grocery stores, food trucks, and other commercial projects"},
    //     { name: "portraits", description: "Portraits of people in my life" },
    //     { name: "food", description: "Delicious delicacies" },
    //     {
    //         name: "landscape",
    //         description: "Fields, farmhouses, waterfalls, and the beauty of nature",
    //     },
    // ]);

    const currentCategory = {
        name: "commercial",
        description:
            "Photos of grocery stores, food trucks, and other commercial projects",
    };

    const handleClick = (pineapple) => {
        console.log(pineapple);
        return pineapple;
    };

    return (
        <section>
            <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
            <p>{currentCategory.description}</p>
            <div>
                <img
                    src={photo} alt='grocery store isle' className="img-thumbnail mx-1"
                />
            </div>
        </section>
    );
}

export default Gallery;
