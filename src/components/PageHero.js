import React from "react";
import styled from "styled-components";
import bgImg from "../assets/hero-background.jpg";

const PageHero = ({ title }) => {
  return (
    <Wrapper>
      <div className="section-center">
        <h3>{title}</h3>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-image: url(${bgImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  min-height: 30vh;
  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--clr-primary-1);
  h3 {
    padding: 60px 50px;
    background: var(--clr-white-bg);
  }
`;

export default PageHero;
