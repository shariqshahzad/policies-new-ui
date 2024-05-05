import JSDOMEnvironment from 'jest-environment-jsdom';
import { type Config } from '@jest/types';
import { TextEncoder, TextDecoder } from 'util';

interface JestExtendedEnvironmentConfig {
  projectConfig: Config.ProjectConfig;
  globalConfig: Config.GlobalConfig;
}

class CustomJSDOMEnvironment extends JSDOMEnvironment {
  constructor(config: JestExtendedEnvironmentConfig, context: never) {
    super(config, context);

    if (typeof this.global.TextEncoder === 'undefined') {
      this.global.TextEncoder = TextEncoder;
    }

    if (typeof this.global.TextDecoder === 'undefined') {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      this.global.TextDecoder = TextDecoder;
    }
  }
}

export = CustomJSDOMEnvironment;
