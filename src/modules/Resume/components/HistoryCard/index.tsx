import React from 'react';
import Styles from './styles'
import theme from '../../../../global/theme'

export interface HistoryCardProps {
    title: string;
    color: string;
    amount: string;
}

const HistoryCard = ({title, color, amount}: HistoryCardProps) => {
    return (
        <Styles.Container color={color}>
            <Styles.Title>{title}</Styles.Title>
            <Styles.Amount>{amount}</Styles.Amount>
        </Styles.Container>
    );
}

export default HistoryCard;
