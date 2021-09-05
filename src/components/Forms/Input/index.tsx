import React from 'react';
import {TextInputProps} from 'react-native'
import {TextInputBase} from './styles'
export interface FormInputProps extends TextInputProps {}

const Input = ({...rest}: FormInputProps) => {
    return (
        <>
            <TextInputBase allowFontScaling={false} {...rest}/>
        </>
    );
}

export default Input;
