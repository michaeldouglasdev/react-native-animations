import { TextInput, TextInputProps } from 'react-native';
import React, { ForwardRefExoticComponent, ForwardRefRenderFunction } from 'react';
import { InputContainer, InputItem } from './input.styles';
import { RefObject } from 'react';
import { Control, Controller } from 'react-hook-form';

export interface InputProps extends TextInputProps {
  isDirty?: boolean;
  control: Control<any>;
  name: string;
}

//export const InputBase: React.FC<InputProps> = React.forwardRef<RefObject<typeof InputText>, InputProps>(({ placeholder }, ref) => {

export const Input: React.FC<InputProps> = React.forwardRef<RefObject<typeof InputItem>, InputProps>(({
  isDirty,
  name,
  control,
  ...rest
}, ref) => {
  return (
    <InputContainer>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <InputItem
            onChangeText={onChange}
            value={value}
            ref={ref}
            {...rest}
          />
        )}
      />
    </InputContainer>
  )
});
