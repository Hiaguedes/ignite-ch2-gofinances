import React from 'react';
import {Container, Icon, Title} from './styles'
import {TouchableOpacityProps} from 'react-native';

export interface TransactionTypeProps extends TouchableOpacityProps {
    type: 'entry' | 'out';
    isActive: boolean;
}

enum ButtonTitle {
    entry = 'Entrada',
    out = 'Saída',
}

enum Icons {
    entry = 'arrow-up-circle',
    out = 'arrow-down-circle'
}

const TransactionTypeButton = ({type, isActive, ...rest}: TransactionTypeProps) => {
    return (
        <Container isActive={isActive} type={type} {...rest}>
            <Icon name={Icons[type]} type={type} />
            <Title>{ButtonTitle[type]}</Title>

        </Container>
    );
}

export default TransactionTypeButton;
