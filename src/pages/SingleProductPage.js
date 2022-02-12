import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { formatPrice } from "../utils/helpers";
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
} from "../components";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SingleProductPage = () => {
  const {
    single_product_loading,
    single_product_error,
    single_product,
    fetchSingleProduct,
  } = useProductsContext();
  const { id } = useParams();

  useEffect(() => {
    fetchSingleProduct(id);
    // eslint-disable-next-line
  }, [id]);

  if (single_product_loading) {
    return <Loading />;
  } else if (single_product_error) {
    return (
      <section className="page-100">
        <Error />
        <div style={{ textAlign: "center", marginBottom: "100px" }}>
          <Link to="/" className="btn">
            Back Home
          </Link>
        </div>
      </section>
    );
  }

  const {
    name,
    price,
    description,
    stock,
    stars,
    id: sku,
    company,
    imageUrl,
  } = single_product;
  return (
    <Wrapper>
      <PageHero title="product" />
      <div className="section section-center page">
        <Link to="/products" className="btn">
          back to products
        </Link>
        <div className="product-center">
          <ProductImages images={[{ url: imageUrl }]} />
          <section className="content">
            <h2>{name}</h2>
            <Stars stars={stars} />
            <h5 className="price">{formatPrice(price)}</h5>
            <p className="desc">{description}</p>
            <p className="info">
              <span>Available : </span>
              {stock > 0 ? "In stock" : "Out of stock"}
            </p>
            <p className="info">
              <span>SKU : </span>
              {sku}
            </p>
            <p className="info">
              <span>Brand : </span>
              {company}
            </p>
            <hr />
            {stock > 0 && <AddToCart product={single_product} />}
          </section>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-grey-8);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;

export default SingleProductPage;
