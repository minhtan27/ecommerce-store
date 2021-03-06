import React from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";

const Product = ({ imageUrl, name, price, id }) => {
  return (
    <Wrapper>
      <div className="container">
        <img src={imageUrl} alt={name} />
        <Link to={`/products/${id}`} className="link">
          <FaSearch />
        </Link>
      </div>
      <footer>
        <h5>{name}</h5>
        <p>Price: {formatPrice(price)}</p>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  .container {
    position: relative;
    background: var(--clr-black);
    overflow: hidden;
  }
  img {
    width: 100%;
    display: block;
    object-fit: fit;
    transition: var(--transition);
  }

  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--clr-grey-8);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: var(--clr-white);
    }
  }
  .container:hover img {
    opacity: 0.5;
    transform: scale(1.1);
  }
  .container:hover .link {
    opacity: 1;
  }
  footer {
    background: var(--clr-black);
    height: 100px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  footer h5,
  footer p {
    margin-bottom: 0;
    font-weight: 400;
    text-align: center;
  }
  footer h5 {
    color: var(--clr-white);
  }

  footer p {
    color: var(--clr-grey-8);
    letter-spacing: var(--spacing);
  }
`;
export default Product;
