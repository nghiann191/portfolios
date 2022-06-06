import styled from 'styled-components';
import { Container } from '@chakra-ui/react';

export const Wrapper = styled(Container)`
  .logo {
    cursor: pointer;
  }
  .tabs {
    font-weight: 600;
    &:hover {
      text-decoration: underline;
    }
  }

  .active {
    text-decoration: underline;
    color: ${(props) => (props.colorMode === 'dark' ? '#5281ed' : '#47cf01')};
  }
`;
