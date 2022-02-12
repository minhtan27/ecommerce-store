import React from "react";
import styled from "styled-components";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
const Stars = ({ stars }) => {
  const generateStars = (stars) => {
    let arr = [];
    for (let i = 1; i <= 5; i++) {
      if (i - stars === 0) {
        arr.push(<BsStarFill key={i} />);
      }
      if (i - stars < 0) {
        arr.push(<BsStarFill key={i} />);
      }
      if (i - stars > 0) {
        i - stars >= 1 && arr.push(<BsStar key={i} />);
        i - stars < 1 && arr.push(<BsStarHalf key={i} />);
      }
    }
    return arr;
  };

  return (
    <Wrapper>
      <div className="stars">{generateStars(stars)}</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    color: #ffb900;
    font-size: 1rem;
    margin-right: 0.25rem;
  }
  p {
    margin-left: 0.5rem;
    margin-bottom: 0;
  }
  margin-bottom: 0.5rem;
`;
export default Stars;
