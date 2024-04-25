import { useLazyQuery } from "@apollo/client";
import { DocumentNode } from "graphql";

import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { IGraphQLClientQuery } from "./graphql/graphql-client.interface"
import { IGraphQLQueryProvider, IGraphQLQueryProviderQuery } from "./graphql/graphql-query.provider.interface";
import { request } from 'graphql-request';
import { api } from "../services/api.service";

interface IAPI {
  graphql: (graphql: IAPIGraphQL) => void;
}


interface IAPIGraphQL {
  document: string;
}

export const API: IAPI = () => {

  const [enabled, setEnabled] = useState(false);

  const x = useQuery({
    enabled: false
  })
  const graphql = () => {

  }
}


interface useQueryProps<V> {
  key: string;
  type: 'graphql-query' | 'graphql-mutation' | 'get' | 'post' | 'delete' | 'put',
  fetchFn: string | DocumentNode;
  variables?: Record<string, unknown>;
  enabled?: boolean;
}
export const useQuery2 = <T = {}, V = {}>({
  key,
  variables,
  fetchFn,
  type,
  enabled = true,
}: useQueryProps<V>) => {
  const query = useQuery<T>([key, variables], async () => {

    if (type?.includes('graphql')) {
      const data = await request<T>('http://localhost:4000/graphql', fetchFn);
      return data;
    } else {
      const { data } = await api[type]<T>(fetchFn, variables);
      return data;
    }
  }, {
    enabled: enabled,
  });

  return query;
}