import styled from 'styled-components';

const Wrapper = styled.div`
  .text-welcome {
    animation-name: welcome;
    animation-duration: 6s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    position: relative;

    @keyframes welcome {
      0% {
        left: -200px;
        top: 0px;
      }

      100% {
        left: 200px;
        top: 0px;
      }
    }
  }
  .information {
    text-indent: 2rem;
  }
`;

export default Wrapper;
