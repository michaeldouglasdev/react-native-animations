import { DocumentNode } from "graphql";

export interface IGraphQLClient {
  query<T extends Record<string, unknown>>(query: IGraphQLClientQuery<T>): void;
  onSuccess<T>(successFn: (data: T) => void): void;
}

export interface IGraphQLClientQuery<T> {
  document: string | DocumentNode;
  variables?: T;
}