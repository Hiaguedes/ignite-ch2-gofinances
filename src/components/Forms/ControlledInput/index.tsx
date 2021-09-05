import React from 'react';
import {Container, Error} from './styles';
import Input, {FormInputProps} from '../Input'
import { Control, Controller } from 'react-hook-form';

interface ControlledInputProps extends FormInputProps {
    control: Control
    name: string;
    error: string;
}

const ControlledInput = ({name, control, error, ...rest}: ControlledInputProps) => {

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
