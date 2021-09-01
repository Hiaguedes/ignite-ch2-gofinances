import React from 'react';
import {Container, Title, Amount, Footer, Category, Icon, CategoryName, Date} from './styles'

export interface TransactionCardProps {
    type: 'entry' | 'out';
    title: string;
    amount: string;
    date: string;
    category: {
        name: string;
        icon: string;
    };
}

const TransactionCard = ({title, amount, type, date, category: {name, icon}}: TransactionCardProps) => {
    return (
        <Container>
            <Title>{title}</Title>
            <Amount type={type}>{`${type === 'out' ? '-': ''} ${amount}`}</Amount>
            <Footer>
                <Category>
                    <Icon name={icon}/>
                    <CategoryName>{name}</CategoryName>
                </Category>
                <Date>{date}</Date>
            </Footer>
        </Container>
    );
}

export default TransactionCard;
