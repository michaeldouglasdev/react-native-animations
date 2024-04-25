//import { gql } from '@apollo/client';
import React, { useEffect } from 'react';
import Container from 'typedi';
import { useQuery2 } from '../../api/api';
import { GraphQLQueryProvider } from '../../api/graphql/graphql-query.provider';
import useLazyQuery from '../../hooks/use-lazy.hook';
import { RequestPageContainer } from './request.page.styles';
import gql from 'graphql-tag';
import { ApiEndpoints } from '../../api/api-endpoints';

export const RequestPage: React.FC = () => {

  const graphqlClient = Container.get(GraphQLQueryProvider);

  const query2 = gql`
    query listProducts {
      listProducts {
        sku
        name
      }
    }
  `;

  const { data } = useQuery2<{ sku, name }, { type: string }>({
    key: 'list-products',
    type: 'graphql-query',
    fetchFn: ApiEndpoints.LIST_PRODUCTS.fetch,
    variables: {

    }
  })

  console.log('data', data)
  /*const query = gql`
    query Product($data: GetProductInput) {
      getProduct(data: $data) {
        name
        sku
      }
    }
  `


*/
  useEffect(() => {
    /*graphqlClient.query({
      document: query2
    })*/
  }, []);

  return (
    <RequestPageContainer>

    </RequestPageContainer>
  )
}