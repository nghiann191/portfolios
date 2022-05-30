import styled from 'styled-components';

const Wrapper = styled.div`
  .text-welcome {
    animation-name: welcome;
    animation-duration: 6s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    position: relative;
    color: red;

    @keyframes welcome {
      0% {
        left: -200px;
        top: 0px;
        color: red;
      }
      25% {
        color: yellow;
      }
      50% {
        color: blue;
      }

      100% {
        left: 200px;
        top: 0px;
        color: green;
      }
    }
  }
  .information {
    text-indent: 2rem;
  }
`;

export default Wrapper;
