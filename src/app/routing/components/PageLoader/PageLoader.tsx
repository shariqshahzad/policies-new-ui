import * as React from 'react';
import { Box, Loader } from '@takamol/qiwa-design-system/components';

const PageLoader = () => {
  return (
    <Box>
      <Box
        align="center"
        borderColor="grayscale_200"
        borderRadius={4}
        borderWidth={1}
        direction="column"
        gap={24}
        height="100vh"
        justify="center"
        padding={24}
      >
        <Loader size={32} variant="system" data-testid="page-loader" />
      </Box>
    </Box>
  );
};

export default PageLoader;
