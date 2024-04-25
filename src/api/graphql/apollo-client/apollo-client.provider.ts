/*import { IGraphQLClient, IGraphQLClientQuery } from "../graphql-client.interface";

import { ApolloClient, InMemoryCache, NormalizedCacheObject } from '@apollo/client';
import { IGraphQLQueryProvider } from "../graphql-query.provider.interface";
import { Service } from 'typedi';

const cache = new InMemoryCache();
const client = new ApolloClient({
  cache: cache,
  uri: 'http://localhost:4000/graphql',
  // Provide some optional constructor fields
  queryDeduplication: false,
});

@Service()
export class ApolloClientProvider implements IGraphQLQueryProvider {

  private startFn: (() => void) | undefined;
  private successFn: ((data: any) => void) | undefined;
  private errorFn: ((data: unknown) => void) | undefined;

  async query<T extends Record<string, unknown>>(query: IGraphQLClientQuery<T>) {
    try {
      if (this.startFn) {
        this.startFn();
      }

      console.log('query', query.document);

      const response = await client.query({
        query: query.document,
        variables: query.variables,
      });

      console.log('response', response.data);

      if (this.successFn) {
        this.successFn(response.data);
      }
    } catch (error) {
      if (this.errorFn) {
        this.errorFn(error);
      }
      console.log('error', error);
    }
  }

  onSuccess<T>(successFn: (data: T) => void): void {
    this.successFn = successFn;
  }
}
*/
