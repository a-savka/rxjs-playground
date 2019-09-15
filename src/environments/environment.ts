import { IEnvironment } from './IEnvironment';
import { commonEnvironment } from './environment.common';

export const environment: IEnvironment = {
  ...commonEnvironment,
  production: false,
  apiUrl: 'http://set.dev.api.url.here'
};
