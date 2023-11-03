

import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

const APi = () => {
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((res) => setMyData(res.data));
  }, []);

  const [expandedDescriptionId, setExpandedDescriptionId] = useState(null);

  const handleReadMoreClick = (productId) => {
    setExpandedDescriptionId(productId === expandedDescriptionId ? null : productId);
  };

  return (
    <div className='flex gap-4 flex-wrap'>
      {
        myData.map((post) => {
          const { id, price, title, description, category, rating, image } = post;
          const isExpanded = id === expandedDescriptionId;

          return (
            <div className='gap-5 mt-2' key={id}>
              <div className='bg-green-200 rounded-md flex flex-col items-center p-2 border-2 border-green-700 h-auto w-56'>
                <h2> {title}</h2>
                <p>{price}</p>
                <p>{description.slice(0, 50)}{!isExpanded && "..."}</p>
                {isExpanded && <p>{description.slice(50)}</p>}
                <p>{category}</p>
                <img src={image} className='w-44 rounded-md h-44 ' />
                <p>Rating: {rating.rate}</p>
                <p>Count: {rating.count}</p>
                <button onClick={() => handleReadMoreClick(id)} className='bg-red-600 text-white px-2 py-2'>
                  {isExpanded ? 'Read Less' : 'Read More'}
                </button>
              </div>
            </div>
          );
        })
      }
    </div>
  );
}

export default APi;
