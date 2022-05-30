import {
  Avatar,
  Box,
  Button,
  Code,
  Grid,
  GridItem,
  Heading,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import Wrapper from './styles';
import { BsChevronRight } from 'react-icons/bs';

const Infor = React.memo(function Infor() {
  return (
    <Wrapper>
      <Heading textAlign={'center'} margin="10" className="text-welcome">
        Welcome!
      </Heading>

      <Grid templateColumns="repeat(3, 1fr)">
        <GridItem colSpan={2}>
          <Heading as="h4" size="md">
            Nghia Nguyen Ngoc
          </Heading>
          <Text>(FrontEnd Developer)</Text>
          <Code colorScheme={'messenger'}>Must be damaged but not damaged</Code>
        </GridItem>
        <GridItem colSpan={1}>
          <Avatar size="2xl" />
        </GridItem>
      </Grid>

      <Heading as="h5" size="sm" marginBottom="2">
        Profile
      </Heading>
      <Text className="information">
        I am a 23-year-old Vietnamese Front-end developer. I like to resolve
        design problems, create smart user interface and imagine useful
        interaction, developing rich web experiences & web applications.
      </Text>
      <Box margin="3" justifyContent="center" display="flex">
        <Button
          rightIcon={<BsChevronRight />}
          colorScheme="teal"
          variant="outline"
        >
          My Portfolio
        </Button>
      </Box>

      <Heading as="h5" size="sm" marginBottom="2">
        Bio
      </Heading>
      <Grid
        gap={2}
        templateColumns="repeat(5, 1fr)"
        borderBottom="1px solid #aaafb9"
        padding="2"
      >
        <GridItem colSpan={1}>
          <Heading as="h5" size="sm">
            1999
          </Heading>
        </GridItem>
        <GridItem colSpan={4}>Born in Me Linh, Ha Noi, Viet Nam</GridItem>
      </Grid>
      <Grid
        gap={2}
        templateColumns="repeat(5, 1fr)"
        borderBottom="1px solid #aaafb9"
        padding="2"
      >
        <GridItem colSpan={1}>2005</GridItem>
        <GridItem colSpan={4}>Graduation from Kindergarten</GridItem>
      </Grid>
      <Grid
        gap={2}
        templateColumns="repeat(5, 1fr)"
        borderBottom="1px solid #aaafb9"
        padding="2"
      >
        <GridItem colSpan={1}>2010</GridItem>
        <GridItem colSpan={4}>Graduation from primary school</GridItem>
      </Grid>
      <Grid
        gap={2}
        templateColumns="repeat(5, 1fr)"
        borderBottom="1px solid #aaafb9"
        padding="2"
      >
        <GridItem colSpan={1}>2014</GridItem>
        <GridItem colSpan={4}>Graduation from secondary school</GridItem>
      </Grid>
      <Grid
        gap={2}
        templateColumns="repeat(5, 1fr)"
        borderBottom="1px solid #aaafb9"
        padding="2"
      >
        <GridItem colSpan={1}>2017</GridItem>
        <GridItem colSpan={4}>Graduation from high school</GridItem>
      </Grid>
      <Grid
        gap={2}
        templateColumns="repeat(5, 1fr)"
        borderBottom="1px solid #aaafb9"
        padding="2"
      >
        <GridItem colSpan={1}>2019</GridItem>
        <GridItem colSpan={4}>
          Worked at BUNBUSOFT as Intern FrontEnd developer with Reactjs
        </GridItem>
      </Grid>
      <Grid
        gap={2}
        templateColumns="repeat(5, 1fr)"
        borderBottom="1px solid #aaafb9"
        padding="2"
      >
        <GridItem colSpan={1}>2020</GridItem>
        <GridItem colSpan={4}>
          Worked at BUNBUSOFT as Parttime FrontEnd developer
        </GridItem>
      </Grid>
      <Grid
        templateColumns="repeat(5, 1fr)"
        templateRows="repeat(2, 1fr)"
        padding="2"
      >
        <GridItem colSpan={1} rowSpan={2}>
          2021
        </GridItem>
        <GridItem colSpan={4} rowSpan={1}>
          Graduation from VNU University of Engineering and Technology
        </GridItem>
        <GridItem colSpan={4} rowSpan={1}>
          Worked at BUNBUSOFT as Fulltime FrontEnd developer
        </GridItem>
      </Grid>

      <Heading as="h5" size="sm" marginBottom="2">
        Hobby
      </Heading>
      <Text>Traveling, Billiard, Sleeping</Text>
    </Wrapper>
  );
});

export default Infor;
