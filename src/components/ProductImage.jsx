import React, { useState } from "react";

const ProductImage = ({ img }) => {
  const [imgSrc, setImgSrc] = useState(img[0]);

  return (
    <div className="flex gap-4">
      <div className="flex flex-col gap-3">
        {img.map((image, index) => (
          <img 
            key={index}
            className={`w-20 h-20 object-cover rounded-lg cursor-pointer border hover:scale-102 transition duration-300
              ${imgSrc === image ? "border-amber-500" : "border-gray-300"}
              hover:border-amber-600 transition`}
            onClick={() => setImgSrc(image)}
            src={image}
            alt=""
          />
        ))}
      </div>

      <div className="w-full">
        <img
          src={imgSrc}
          alt=""
          className="w-full rounded-xl shadow-lg object-cover transition duration-300 hover:scale-102"
        />
      </div>
    </div>
  );
};

export default ProductImage;
