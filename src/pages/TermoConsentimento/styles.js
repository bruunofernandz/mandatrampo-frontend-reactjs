import styled from 'styled-components';

export const Termo = styled.div`
  margin: 0 8.5vw;
  display: flex;
  flex-direction: column;
  align-items: center;
    p {
        font-size: 1rem;
        line-height: 1.9;
        text-align: justify;
        color: rgb(102, 102, 102);
    }
    h1 {
        margin-top: 45px;
        margin-bottom: 25px;
        text-align: center;
        color: rgb(89, 89, 89);
        @media (max-width: 1100px) {
            font-size: 1.2rem;
          }
    }
    h3 {
        color: rgb(89, 89, 89);
    }
    #check {
        margin-top: 30px;
        margin-bottom: 50px;
        font-size: 1.2rem;
    }
    .header {
        @media (max-width: 760px){
            display: none;
        }
    }

`;

