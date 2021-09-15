import React from 'react';
import {TextInputProps} from 'react-native'
import {TextInputBase} from './styles'

export interface FormInputProps extends TextInputProps {
    active?: boolean;
}

const Input = ({active = false, ...rest}: FormInputProps) => {
    return (
        <>
            <TextInputBase active={active} allowFontScaling={false} {...rest}/>
        </>
    );
}

export default Input;
