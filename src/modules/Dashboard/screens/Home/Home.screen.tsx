import React from 'react';
import {Container, ContainerHighlightCards, TransactionsList, TransactionListTitle} from './styles'
import Header from '../../components/Header';
import HighlightCard from '../../components/HighlightCards'
import TransactionCard, {TransactionCardProps} from '../../components/TransactionCard'
import {FlatList} from 'react-native'

interface ItemProps {
    item: TransactionCardProps;
}

const DashboardHome = () => {
    const data: TransactionCardProps[] = [{
        type: 'entry',
        title:"Crawling",
        amount:"R$ 1000.00",
        date:"10/10/2021" ,
        category:
            {
                name: "Gastos Gerais", 
                icon: "dollar-sign"
            }
    },{
        type: 'out',
        title:"In My Skin",
        amount:"R$ 1010.00",
        date:"11/10/2021" ,
        category:
            {
                name: "Alimentação", 
                icon: "coffee"
            }
    }];

const Item = ({item}: ItemProps) => <TransactionCard {...item}/>

    return (
        <Container>
            <Header />
            <ContainerHighlightCards>
                <HighlightCard type="entry" amount="R$ 1000.00" lastTransaction="Feito sla que dia"/>
                <HighlightCard type="out" amount="R$ 1000.00" lastTransaction="Feito sla que dia"/>
                <HighlightCard type="total" amount="R$ 1000.00" lastTransaction="Feito sla que dia"/>
            </ContainerHighlightCards>
            <TransactionsList>
                <TransactionListTitle>Listagem</TransactionListTitle>
                <FlatList 
                    data={data}
                    keyExtractor={item => `${Math.random()} - ${item.amount} ${item.date} ${item.type}`}
                    renderItem={Item}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingBottom: 10,
                    }}
                />
            </TransactionsList>
        </Container>
    );
}

export default DashboardHome;
