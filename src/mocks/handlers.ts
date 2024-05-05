import { createHandlerMocks } from '@takamol/react-qiwa-core';

import { exampleApiUrl } from 'src/app/exampleDashboard/constants/exampleApiUrl';
import { createExampleApiHandlerMocks } from 'src/app/exampleDashboard/utils/createExampleApiHandlerMocks';

const exampleApiRest = createExampleApiHandlerMocks(exampleApiUrl);

export const handlers = [...createHandlerMocks(), ...exampleApiRest];
