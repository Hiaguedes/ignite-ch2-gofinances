import React from 'react';
import {Container, Title, Amount, Footer, Category, Icon, CategoryName, Date} from './styles'
import {DataListProps} from '../../screens/Home/Home.screen'
export interface TransactionCardProps {
    transactionType: 'entry' | 'out';
    name: string;
    amount: string;
    date: string;
    category: {
        name: string;
        key: string;
        icon: string;
    };
}

const TransactionCard = ({name, amount, transactionType, date, category, id}: DataListProps) => {
    return (
        <Container key={id}>
            <Title>{name}</Title>
            <Amount transactionType={transactionType}>{`${transactionType === 'out' ? '-': ''} ${amount}`}</Amount>
            <Footer>
                <Category>
                    <Icon name={category.icon}/>
                    <CategoryName>{category.name}</CategoryName>
                </Category>
                <Date>{date}</Date>
            </Footer>
        </Container>
    );
}

export default TransactionCard;
