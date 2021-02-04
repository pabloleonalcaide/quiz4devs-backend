import { ContainerBuilder } from 'node-dependency-injection';
import { registerApps } from './registerApps';
import registerTestServices from './registerTestServices';
import registerProdServices from './registerProdServices';

export const container = new ContainerBuilder();

registerApps();
process.env.NODE_ENV == 'test'
  ? registerTestServices()
  : registerProdServices();

export default container;
