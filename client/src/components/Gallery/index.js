import { capitalizeFirstLetter } from '../../utils/helpers';
import React from "react";
// import photo from "../../assets/small/commercial/0.jpg";
import PhotoList from '../PhotoList';

function Gallery(props) {
    // const [categories] = useState([
    //     { name: "commercial", description: "Photos of grocery stores, food trucks, and other commercial projects"},
    //     { name: "portraits", description: "Portraits of people in my life" },
    //     { name: "food", description: "Delicious delicacies" },
    //     {
    //         name: "landscape",
    //         description: "Fields, farmhouses, waterfalls, and the beauty of nature",
    //     },
    // ]);



    // const handleClick = (pineapple) => {
    //     console.log(pineapple);
    //     return pineapple;
    // };

    // const currentCategory = {
    //     name: "commercial",
    //     description:
    //         "Photos of grocery stores, food trucks, and other commercial projects",
    // };

    // const {name, description} = currentCategory;
    // return (
    //     <section>
    //         <h1>{capitalizeFirstLetter(name)}</h1>
    //         <p>{description}</p>
    //         <PhotoList category={currentCategory.name} />
    //     </section>
    // );

    const { currentCategory } = props;
    return (
        <section>
            <h1 data-testid="h1tag">{capitalizeFirstLetter(currentCategory.name)}</h1>
            <p>{currentCategory.description}</p>
            <PhotoList category={currentCategory.name} />
        </section>
    );
}

export default Gallery;
