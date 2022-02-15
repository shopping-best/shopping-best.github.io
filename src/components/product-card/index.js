import React from 'react';
import './style.scss';

function ProductCard({ product }) {
  return (
    <li className="productItem">
      <div className="rank_badge">
        <div className="rank">{product.rank}</div>
      </div>

      <a href={product.productUrl} target="_blank" rel="noreferrer">
        <figure className="productImageFigure">
          <img className="productImage" src={product.productImage} alt={product.productName} />
        </figure>
        <dl>
          <dt className="productName">
            <h3>{product.productName}</h3>
          </dt>
          <dd>
            <div className="productPrice">
              <div className="price">{product.productPrice.toLocaleString()}원</div>

              {product.isRocket && (
                <figure className="rocket_logo_wrap">
                  <img
                    src="//image6.coupangcdn.com/image/cmg/icon/ios/logo_rocket_large@3x.png"
                    height="16"
                    alt="로켓배송"
                    className="rocket_logo"
                  />
                </figure>
              )}
            </div>
          </dd>
        </dl>
      </a>
    </li>
  );
}
export default ProductCard;
