import Container, { Service } from "typedi";
//import { ApolloClientProvider } from "./apollo-client/apollo-client.provider";
import { IGraphQLQueryProvider, IGraphQLQueryProviderQuery } from "./graphql-query.provider.interface";

@Service()
export class GraphQLQueryProvider {

  //private client = Container.get(ApolloClientProvider);

  async query<T extends Record<string, unknown>>(query: IGraphQLQueryProviderQuery<T>) {
    //await this.client.query(query);
  }
}