import React from 'react';
import {ButtonBase, Title} from './styles'
import {TouchableOpacityProps} from 'react-native'

interface ButtonProps extends TouchableOpacityProps {
    children?: React.ReactNode;
    title?: string;
}

const Button = ({children, title, ...rest}: ButtonProps) => {
    return (
        <>
            <ButtonBase {...rest}>
                <Title>{title || children}</Title>
            </ButtonBase>
        </>
    );
}

export default Button;
