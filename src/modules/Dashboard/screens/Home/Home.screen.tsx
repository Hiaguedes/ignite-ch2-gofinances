import React from 'react';
import {Container, ContainerHighlightCards, TransactionsList, TransactionListTitle} from './styles'
import Header from '../../components/Header';
import HighlightCard from '../../components/HighlightCards'
import TransactionCard, {TransactionCardProps} from '../../components/TransactionCard'
import {FlatList} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import categories from '../../../../utils/categories'
import { useFocusEffect } from '@react-navigation/core';
export interface DataListProps extends TransactionCardProps {
    id: string;
} 

const DashboardHome = () => {

const Item = (item: DataListProps) => <TransactionCard {...item}/>

const [dataList, setDataList] = React.useState<DataListProps[]>([])

const LoadTransactions = async () => {
    const collectionKey = '@gofinances:transactions';
    const transactions = await AsyncStorage.getItem(collectionKey);
    
    const transactionsParsed = transactions ? JSON.parse(transactions) : [];
    
    const transactionsFormatted: DataListProps[] = transactionsParsed.map((transaction: DataListProps) => {
        const categorieIndex = categories.findIndex(categorie => categorie.key === transaction.category.key)
        const amount = Number(transaction.amount).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });

        const date = transaction.date ? Intl.DateTimeFormat('pt-BR',{
            day: '2-digit',
            month: '2-digit',
            year: '2-digit',
        }).format(new Date(transaction.date)) :
        ''

        const icon = categories[categorieIndex].icon

        return {...transaction, amount, date, icon, category: {icon, name: transaction.category.name}}
    });

    setDataList(transactionsFormatted)
}

useFocusEffect(React.useCallback(() => {
    LoadTransactions();
}, []));

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
                <FlatList<DataListProps>
                    data={dataList}
                    keyExtractor={({id}) => id}
                    renderItem={({item}) => Item(item)}
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
