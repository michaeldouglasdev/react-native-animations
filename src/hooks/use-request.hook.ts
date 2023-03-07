import React from 'react';
import { api } from '../services/api.service';

export const useRequest = async <T>(path: string, method: string = 'get'): Promise<T> => {
  const { data } = await api[method]<T>(path);
  return data;
}

