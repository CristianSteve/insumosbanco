import styled from "styled-components";

export const Pop = styled.div`
  .pop__content {
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
    position: fixed;
    top: 0px;
    left: 0px;
    display: grid;
    justify-content: center;
    align-content: center;
    z-index: 50;
  }

  .body__pop {
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 1px 1px 10px #333;
    position: relative;
    overflow: auto;
    height: ${props => props.height};
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    animation: popup 1s ease;
    width: ${props => props.width};

    @keyframes popup {
      from {
        width: 60vw;
        height: 60vh;
      }
      to {
        width: ${props => props.width};
        height: ${props => props.height};
        overflow: hidden;
      }
    }

    > span {
      display: grid;
      justify-content: end;
      font-size: 1.8rem;

      label {
        cursor: pointer;
        padding: 0.5rem 0px;
      }
    }
    .body__item {
      height: 100%;
    }
  }
  @media screen and (max-width: 800px) {
    .body__pop {
      width: 75vw;
      height: 75vh;
      padding: 2rem;
    }
  }

  @media screen and (max-width: 550px) {
    .body__pop {
      width: 85vw;
      height: 80vh;
      padding: 1rem;
    }
  }
`;
