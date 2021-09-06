import React from 'react';
import {ButtonBase, Title} from './styles'
import {TouchableOpacityProps} from 'react-native'
import { RectButtonProps } from 'react-native-gesture-handler'
interface ButtonProps extends TouchableOpacityProps {
    children?: React.ReactNode;
    title?: string;
    onPress: () => void;
    // onPress: () => void;
}

const Button = ({children, onPress, title, ...rest}: ButtonProps) => {
    return (
        <>
            <ButtonBase onPress={onPress} {...rest}>
                <Title>{title || children}</Title>
            </ButtonBase>
        </>
    );
}

export default Button;
