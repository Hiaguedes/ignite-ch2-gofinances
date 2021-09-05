import React from 'react';
import {Container, Title, Icon} from './styles'
import {TouchableOpacityProps} from 'react-native'

interface SelectProps extends TouchableOpacityProps{
    title: string;
}

const Select = ({title, ...rest}: SelectProps) => {
    return (
        <Container {...rest}>
            <Title>{title}</Title>
            <Icon name="chevron-down"/>
        </Container>
    );
}

export default Select;
