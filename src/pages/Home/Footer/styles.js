import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 30px;
  margin-bottom: 18px;
  color: #666;
  max-width: 100vw;
  span {
    color: red;
  }

  @media (max-width: 1100px) {
    width: 100%;
    font-size: 12px;
    h4 {
      text-align: center;
    }
  }
`;
