import React from 'react';
import {Container, Header, Title, Icon, Content, Amount, LastTransaction} from './styles'

export interface HighlightCardsProps {
    type: 'entry' | 'out' | 'total';
    amount: string;
    lastTransaction: string;
}

enum CardType {
    entry = 'Entradas',
    out= 'Saídas',
    total= 'Total'
}

enum CardIcon {
    entry = "arrow-up-circle",
    out= "arrow-down-circle",
    total= 'dollar-sign'
}

const HighlightCard = ({type, amount, lastTransaction}: HighlightCardsProps) => {
    return (
        <Container type={type}>
            <Header>
                <Title type={type}>{CardType[type]}</Title>
                <Icon name={CardIcon[type]} type={type} />
            </Header>
            <Content>
                <Amount type={type}>{amount} </Amount>
                <LastTransaction type={type}>{lastTransaction}</LastTransaction>
            </Content>
        </Container>
    );
}

export default HighlightCard;
