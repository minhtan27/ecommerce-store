import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import heroBcg from "../assets/hero-bcg.jpg";

const Hero = () => {
  return (
    <Wrapper className="section-center">
      <article className="img-container">
        <img src={heroBcg} alt="bushcraft img" className="main-img" />
      </article>
      <article className="content">
        <h1>guide to your bushcraft life</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet esse
          ex eaque sed dolor sint, illum neque amet? Qui, delectus?
        </p>
        <Link to="/products" className="btn hero-btn">
          Go to store
        </Link>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    width: 100%;
    height: 400px;
    display: block;
    position: relative;
    margin-bottom: 20px;
  }
  .main-img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-8);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
      height: auto;
      width: auto;
    }
    .main-img {
      width: 100%;
      height: 550px;
      border-radius: var(--radius);
      display: block;
    }
    .img-container::before {
      content: "";
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--clr-grey-9);
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    }
  }
`;

export default Hero;
