import React from "react";
import styled from "styled-components";
import bgImg from "../assets/hero-bcg-2.jpg";

const Contact = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <h3>Join our newsletter and get 50% off on your first purchase</h3>
        <div className="content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
            praesentium! Officiis qui illo deserunt fugiat culpa tempore enim
            voluptates perferendis?
          </p>
          <form className="contact-form">
            <input type="email" className="form-input" placeholder="email" />
            <button type="submit" className="submit-btn">
              Subcribe
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  background-image: url(${bgImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 5rem 0;
  text-transform: none;
  h3 {
    color: var(--clr-white);
  }
  p {
    line-height: 2;
    max-width: 45em;
    color: var(--clr-white);
  }
  .contact-form {
    width: 90vw;
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr auto;
  }

  .form-input,
  .submit-btn {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 1px solid var(--clr-grey-1);
  }
  .form-input {
    border-right: none;
    color: var(--clr-grey-8);
    border-top-left-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
  }
  .submit-btn {
    border-top-right-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
  }
  .form-input::placeholder {
    color: var(--clr-black);
    text-transform: capitalize;
  }
  .submit-btn {
    background: var(--clr-grey-8);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
    color: var(--clr-grey-9);
  }
  .submit-btn:hover {
    color: var(--clr-white);
  }
  @media (min-width: 992px) {
    .content {
      margin-top: 2rem;
    }
    p {
      margin-bottom: 2rem;
    }
  }
  @media (min-width: 1280px) {
    padding: 15rem 0;
  }
`;

export default Contact;
