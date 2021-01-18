import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-evenly;
  border-radius: 4px;
  width: 372px;
  background: #eee;
  padding: 12px 23px;
  margin-bottom: 15px;
  box-shadow: -1px -1px 4px 0 #fff, 2px 2px 8px 0 rgba(0, 0, 0, 0.5);

  /* height: 167px; */
  height: ${(props) => (props.isService ? "367px" : "167px")};

  span {
    color: #666;
    font-size: 12px;
    font-weight: 400;
  }

  .product {
    height: 150px;
    min-height: 150px;
    max-height: 150px;
    width: 100%;
    object-fit: cover;
    border-radius: 4px 4px 0 0;
    margin: 0;
    padding: 0;
  }

  h2 {
    text-transform: uppercase;
    font-size: 16px;
    color: #666;
  }

  button {
    background: #6c63ff;
    color: #fff;
    width: 326px;
    height: 30px;
    border: 0;
    font-size: 12px;
  }

  .social {
    display: flex;
    justify-content: space-around;
    max-height: 25px;
    width: 50%;
    img {
      width: 20px;
    }
  }

  @media (max-width: 880px) {
    width: 95%;
    button {
      width: 95%;
    }
  }

  @media (max-width: 700px) {
    width: 95%;
    button {
      width: 95%;
    }
  }
`;
