import {
  Center,
  Container,
  Flex,
  Icon,
  useColorMode,
  useTheme,
} from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import { FaGithub, FaLinkedin, FaSun, FaMoon } from 'react-icons/fa';
import { ImMail } from 'react-icons/im';

const Header = React.memo(function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const theme = useTheme();
  console.log(theme.config.useSystemColorMode, colorMode);

  return (
    <Container
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Flex>
        <Image
          priority
          src="/images/logo1.png"
          height={80}
          width={80}
          alt="N3"
          objectFit="contain"
        />
        <Center ps={10}>Work</Center>
      </Flex>
      <Flex>
        <Icon as={FaGithub} height={6} width={6} cursor="pointer" />
        <Icon as={FaLinkedin} height={6} width={6} cursor="pointer" ms={4} />
        <Icon as={ImMail} height={6} width={6} cursor="pointer" ms={4} />
        <Icon
          as={colorMode === 'dark' ? FaSun : FaMoon}
          height={6}
          width={6}
          cursor="pointer"
          ms={12}
          onClick={toggleColorMode}
        />
      </Flex>
    </Container>
  );
});

export default Header;
