import { GetResourceQuery } from '../../application/queries/get-resource.query.js';

export const registerResourcesQueries = (queryHandlersMap) => {
  queryHandlersMap.set(GetResourceQuery, 'GetResourceHandler');
}