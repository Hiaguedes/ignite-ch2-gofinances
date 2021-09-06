import React from 'react';
import {Container, Error} from './styles';
import Input, {FormInputProps} from '../Input'
import { Control, Controller } from 'react-hook-form';

interface ControlledInputProps extends FormInputProps {
    control: Control
    name: string;
    error: string;
    mask?:"currency"
}

const ControlledInput = ({name, control, mask, error, ...rest}: ControlledInputProps) => {

    const masks = (value: string) => {

        const CurrencyFormatter = () => {
            const result = Number(value ? value : 0).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            });
            console.log('RESULTADO: ', result, 'value', value);

            return result
        }

        switch(mask){
            case "currency":
                return CurrencyFormatter();
        }
    }

    return (
        <Container>
            <Controller 
                name={name} 
                control={control} 
                render={({field: {onChange, onBlur, value}}) => (
                <Input  
                    onChangeText={onChange}
                    value={value}
                    onBlur={onBlur}
                    {...rest}
                />
            )} />
            {error?.length > 0 && (<Error>{error + ' ⓧ'}</Error>)}
        </Container>
    );
}

export default ControlledInput;
