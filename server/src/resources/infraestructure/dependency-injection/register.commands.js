import { CreateResourceCommand } from '../../application/commands/create-resource.command.js'

export const registerResourcesCommands = (commandHandlersMap) => {
  commandHandlersMap.set(CreateResourceCommand, 'CreateResourceHandler');
}