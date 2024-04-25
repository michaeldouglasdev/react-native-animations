import { DocumentNode } from "graphql";
import { LIST_PRODUCTS_ENDPOINT } from './graphql/endpoints/list-products.endpoint';

export interface IApiEndpoints {
  path: string | DocumentNode;
}


export const ApiEndpoints = {
  LIST_PRODUCTS: LIST_PRODUCTS_ENDPOINT,

}