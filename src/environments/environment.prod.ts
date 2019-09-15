import { IEnvironment } from './IEnvironment';
import { commonEnvironment } from './environment.common';

export const environment: IEnvironment = {
  ...commonEnvironment,
  production: true
};

