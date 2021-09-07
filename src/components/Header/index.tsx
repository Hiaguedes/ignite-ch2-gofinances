import React from 'react';
import Styles from './styles';

interface HeaderProps {
    title: string
}

const Header = ({title}: HeaderProps) => {
    return (
        <Styles.Header>
            <Styles.Title>{title}</Styles.Title>
        </Styles.Header>
    );
}

export default Header;
