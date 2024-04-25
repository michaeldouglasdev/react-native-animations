import { IApiEndpoints } from "../../api-endpoints";
import gql from 'graphql-tag';

export const LIST_PRODUCTS_ENDPOINT = {

  fetch: gql`
    query ListProducts {
      listProducts {
        sku
        name
      }
    }
  `
};