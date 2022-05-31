import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

export const theme = extendTheme({
  styles: {
    global: (props: any) => ({
      body: {
        fontFamily: 'body',
        color: mode('#1a202c', 'white')(props),
        borderColor: mode('#aaafb9', 'white')(props),
        bg: mode('white', '#0a192f')(props),
        lineHeight: 'base',
      },
      header: {
        bg: mode('antiquewhite', '#163460')(props),
      },
    }),
  },

  sizes: {
    container: { sm: '640px', md: '768px', lg: '1024px', xl: '1280px' },
  },
});
