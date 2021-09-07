import React from 'react';
import {Container, Title, Amount, Footer, Category, Icon, CategoryName, Date} from './styles'
import {DataListProps} from '../../screens/Home/Home.screen'
import {TransactionCardProps} from '../../../../global/types'

export { TransactionCardProps };

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
