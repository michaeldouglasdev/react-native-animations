import { DocumentNode } from "graphql";

export interface IGraphQLQueryProvider {
  query<T extends Record<string, unknown>>(query: IGraphQLQueryProviderQuery<T>);
  onSuccess<T>(successFn: (data: T) => void): void;
}

export interface IGraphQLQueryProviderQuery<T> {
  document: string | DocumentNode;
  variables?: T;
}