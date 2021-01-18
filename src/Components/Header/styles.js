import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;

  .logo-header-mandatrampo {
    width: 250px;
    margin-left: 75px;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 150px;

    .logo-header-mandatrampo {
      width: 200px;
      margin-left: 0px;
    }
  }
`;

export const Menu = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  margin-right: 100px;

  a {
    :last-child {
      display: ${(props) => props.notType ? 'none': ''}
    }
  }

  a {
    padding: 10px;
    font-size: 1rem;
    align-items: center;
    text-decoration: none;
    color: #666;
    border: 1px solid #666;
    border-radius: 4px;
    margin-right: 25px;

    :hover {
      background: #6c63ff;
      border: 1px solid #6c63ff;
      color: #fff;
    }
  }

  @media (max-width: 600px) {
    margin-right: 0px;
  }
`;
