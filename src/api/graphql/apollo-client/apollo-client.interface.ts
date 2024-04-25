export interface IApolloClient {
  query(): void;
  mutate(): void;
}


export interface IApolloClientBuilder {
  build(): IApolloClient;
}

export interface IApolloClientBuilderBuild {
  document: string;
  variables: Record<string, unknown>;
}