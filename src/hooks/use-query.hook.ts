import { useQuery as useReactQuery, UseQueryOptions } from '@tanstack/react-query'
import { api } from '../services/api.service';

export const useQuery = <T>(path: string, method: string = 'get', options?: Omit<UseQueryOptions<T>, 'queryKey' | 'queryFn' | 'initialData'>) => {
  const query = useReactQuery<T>([path], async () => {
    const { data } = await api[method]<T>(path);
    return data;
  }, options);

  return query;
}


