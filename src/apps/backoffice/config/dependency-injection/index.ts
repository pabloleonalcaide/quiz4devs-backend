import { ContainerBuilder } from 'node-dependency-injection';
import { registerServices } from './registerServices';
import { registerApps } from './registerApps';

export const container = new ContainerBuilder();

registerApps();
registerServices();

export default container;