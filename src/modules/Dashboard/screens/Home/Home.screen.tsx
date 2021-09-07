import React from 'react';
import {Container, ContainerHighlightCards, TransactionsList, TransactionListTitle, LoadContainer} from './styles'
import Header from '../../components/Header';
import HighlightCard from '../../components/HighlightCards'
import TransactionCard, {TransactionCardProps} from '../../components/TransactionCard'
import {FlatList, ActivityIndicator} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import categories from '../../../../utils/categories'
import { useFocusEffect } from '@react-navigation/core';
import theme from '../../../../global/theme';
export interface DataListProps extends TransactionCardProps {
    id: string;
} 

interface HighlightDataProps {
    amount: {
        entry: number,
        out: number,
        total: number,
    },
    date: {
        entry: string,
        out: string,
    }
}

const DashboardHome = () => {

const Item = (item: DataListProps) => <TransactionCard {...item}/>

const [isLoading, setIsLoading] = React.useState<boolean>(true);
const [dataList, setDataList] = React.useState<DataListProps[]>([]);
const [highlightData, setHighlightData] = React.useState<HighlightDataProps>({
    amount: {
        entry: 0,
        out: 0,
        total: 0,
    },
    date: {
        entry: '',
        out: '',
    }
})
const transformToCurrencyString = (value: string | number) => {
    return Number(value).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
}

const formatDate = (value: Date) => {
    return Intl.DateTimeFormat('pt-BR',{
        day: '2-digit',
        month: '2-digit',
        year: '2-digit',
    }).format(value)
}

const getLastTransactionDate = (transactionData: DataListProps[], transactionType: DataListProps['transactionType']) => {
    const transactionBiggerDate = 
    new Date(
        Math.max.apply(
            Math,
            transactionData
                .filter((transaction: DataListProps)=> transaction.transactionType === transactionType && transaction.date)
                .map((transaction: DataListProps) =>  new Date(transaction.date).getTime())
            )
    );

    const formattedDate = formatDate(transactionBiggerDate)

    return formattedDate
}

const LoadTransactions = async () => {
    const collectionKey = '@gofinances:transactions';
    const transactions = await AsyncStorage.getItem(collectionKey);
    let entriesSum = 0;
    let outSum = 0;

    const transactionsParsed = transactions ? JSON.parse(transactions) : [];

    const lastDataEntry = getLastTransactionDate(transactionsParsed, 'entry');
    const lastDataOut = getLastTransactionDate(transactionsParsed, 'out');
    
    const transactionsFormatted: DataListProps[] = transactionsParsed.map((transaction: DataListProps) => {
        const categorieIndex = categories.findIndex(categorie => categorie.key === transaction.category.key)
        const amount = transformToCurrencyString(transaction.amount);

        const date = transaction.date ? Intl.DateTimeFormat('pt-BR',{
            day: '2-digit',
            month: '2-digit',
            year: '2-digit',
        }).format(new Date(transaction.date)) :
        ''

        const icon = categories[categorieIndex].icon;

        if(transaction.transactionType === 'entry')  
            entriesSum += Number(transaction.amount)
            else
             outSum += Number(transaction.amount);

             setHighlightData({
                 amount: {
                     entry: entriesSum,
                     out: outSum,
                     total: entriesSum - outSum,
                 },
                 date: {
                     entry: lastDataEntry,
                     out: lastDataOut,
                 }
             })

        return {...transaction, amount, date, icon, category: {icon, name: transaction.category.name}}
    });
    setIsLoading(false)
    setDataList(transactionsFormatted)
}

useFocusEffect(React.useCallback(() => {
    LoadTransactions();
}, []));

    return (
        <Container>
            { 
            isLoading ? 
            (
            <LoadContainer>
                <ActivityIndicator size="large" color={theme.colors.primary}/> 
            </LoadContainer>
            )
            :
                <>
            <Header />
            <ContainerHighlightCards>
                <HighlightCard type="entry" amount={transformToCurrencyString(highlightData.amount.entry)} lastTransaction={`Última entrada dia ${highlightData.date.entry}`}/>
                <HighlightCard type="out" amount={transformToCurrencyString(highlightData.amount.out)} lastTransaction={`Última saída dia ${highlightData.date.out}`}/>
                <HighlightCard type="total" amount={transformToCurrencyString(highlightData.amount.total)} lastTransaction={`Do dia primeiro do mês até ${highlightData.date.out}`}/>
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
            </>
            }
        </Container>
    );
}

export default DashboardHome;
