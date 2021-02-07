import { ContainerBuilder } from 'node-dependency-injection';
import registerApps from './registerApps';

export const container = new ContainerBuilder();

registerApps();

export default container;
