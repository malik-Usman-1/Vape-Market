import React from 'react';
import { useParams } from 'react-router-dom';
import { second } from '../Data';

const ProductDetail = () => {
  const { id } = useParams();
  const product = second[id];

  return (
    <div>
      <h2>{product.head2}</h2>
      <p>{product.para1}</p>
      <img src={product.img2} alt={product.head2} />
      {/* Add more details as needed */}
    </div>
  );
};

export default ProductDetail;
