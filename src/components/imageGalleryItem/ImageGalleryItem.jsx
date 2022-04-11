import React from "react";

const ImageGalleryItem = ({img, id}) => {
    return (
        <li className="gallery-item">
            <img src={img} alt={id} />
        </li>
    );
};

export default ImageGalleryItem;