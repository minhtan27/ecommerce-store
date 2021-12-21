import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/about-img.jpg";

const AboutPage = () => {
  return (
    <main>
      <PageHero title="About us" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="bushcraft img"></img>
        <article>
          <div className="title">
            <h2>The origin</h2>
            <div className="underline"></div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A tenetur
              atque fugit obcaecati. Excepturi non mollitia doloribus numquam
              voluptatibus minima iste perspiciatis, fugiat esse nulla fugit vel
              harum ipsam laborum odit labore. Vero excepturi libero error
              reprehenderit laborum amet voluptas veritatis, dolorum tempora
              nesciunt temporibus. Nulla minus nemo commodi, neque nisi aliquid
              voluptas beatae, numquam magnam, delectus aspernatur eius dolorum
              ab voluptatum. In inventore natus officia, sint dolores ratione
              ipsa ullam rem molestias sed modi repellat deserunt officiis
              ipsam! Adipisci est cupiditate totam, a numquam quisquam eveniet
              quod voluptas aperiam, maxime accusantium dolorem! Amet,
              aspernatur! Velit delectus saepe eos maxime?
            </p>
          </div>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
