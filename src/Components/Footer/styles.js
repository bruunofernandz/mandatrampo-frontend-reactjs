import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;

  strong {
    color: #ff4141;
  }

  @media (max-width: 600px) {
    span {
      font-size: 11px;
    }
  }
`;
