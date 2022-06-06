import React from 'react';

import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { Center, Flex, Icon, useColorMode } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaSun, FaMoon } from 'react-icons/fa';
import { ImMail } from 'react-icons/im';

import { Wrapper } from './Header.styles';

const Header = React.memo(function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const router = useRouter();
  console.log(router);
  return (
    <Wrapper
      display="flex"
      alignItems="center"
      colorMode={colorMode}
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
          onClick={() => router.push('/')}
          className="logo"
        />
        <Center
          ms={10}
          cursor="pointer"
          className={`tabs ${router.pathname === '/works' ? 'active' : ''}`}
        >
          <Link href={'/works'}>Work</Link>
        </Center>
      </Flex>
      <Flex>
        <Link href={'https://github.com/nghiann191/portfolios'} target="_blank">
          <Icon as={FaGithub} height={6} width={6} cursor="pointer" />
        </Link>
        <Link
          href={'https://www.linkedin.com/in/nghia-nguyen-63784b227/'}
          target="_blank"
        >
          <Icon as={FaLinkedin} height={6} width={6} cursor="pointer" ms={4} />
        </Link>
        <Link href={'mailto:nghiann1901@gmail.com'} target="_blank">
          <Icon as={ImMail} height={6} width={6} cursor="pointer" ms={4} />
        </Link>
        <Icon
          as={colorMode === 'dark' ? FaSun : FaMoon}
          height={6}
          width={6}
          cursor="pointer"
          ms={12}
          onClick={toggleColorMode}
        />
      </Flex>
    </Wrapper>
  );
});

export default Header;
