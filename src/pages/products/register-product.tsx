import React from 'react';
import { Input } from '../../components/input/input';
import { RegisterProductContainer } from './register-product.styles';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button, TextInput } from 'react-native';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';
import { useQuery } from '../../hooks/use-query.hook';
import { ProductModel } from '../../models/product.model';

interface RegisterProductFormData {
  name: string;
  price: number;
}


const registerProductSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  price: yup.number().required('Price is required').min(0.01),
});


export const RegisterProductPage: React.FC = () => {

  const { control, formState, handleSubmit, getFieldState, getValues } = useForm<RegisterProductFormData>({
    resolver: yupResolver(registerProductSchema),
    defaultValues: {
      name: '',
      price: 0
    },

  });

  const x = useQuery<ProductModel[]>('/products');
  console.log('x', x.data)
  const handleRegister: SubmitHandler<RegisterProductFormData> = async (values, event) => {
    console.log('handle', values)


  }

  console.log('formstate error', formState.errors)
  console.log('submitted', formState.isSubmitted)
  console.log('isValid', formState.isValid)
  console.log('touchedFIelds', formState.touchedFields)

  console.log('val', getValues())
  return (
    <RegisterProductContainer>
      <Input placeholder='Name' name='name' control={control} />
      <Input placeholder='Price' name='price' control={control} />
      <Button title='Register' onPress={handleSubmit(handleRegister)} />
    </RegisterProductContainer>
  )
}