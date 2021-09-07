import React from 'react';
import Styles from './styles'
import Header from '../../../components/Header'
import HistoryCard from '../components/HistoryCard'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {TransactionCardProps} from '../../../global/types'
import categories from '../../../utils/categories';
import {ScrollView} from 'react-native'

interface TotalByCategoryProps {
    name: string;
    total: string;
    color: string;
}

const Resume = () => {

    const [totalByCategoriesData, setTotalByCategories] = React.useState<TotalByCategoryProps[]>([] as TotalByCategoryProps[]);

    const loadData = async() => {
        const collectionKey = '@gofinances:transactions';
        const response = await AsyncStorage.getItem(collectionKey);
        const responseParsed = response ? JSON.parse(response) : [];

        const expensives = responseParsed.filter((transaction: TransactionCardProps) => transaction.transactionType === 'out'); 
        // const entries = responseParsed.filter((transaction: TransactionCardProps) => transaction.transactionType === 'entry'); 
        const totalByCategorie: TotalByCategoryProps[] = [];

        categories.forEach(category => {
            let categorySum = 0;

            expensives.forEach((expensive: TransactionCardProps) => {
                if(expensive.category.key === category.key){
                    categorySum += Number(expensive.amount);
                }
            });

            if(categorySum > 0)
            totalByCategorie.push({
                name: category.name,
                color: category.color,
                total: categorySum
                        .toLocaleString('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                        }),
            })

        })

        setTotalByCategories(totalByCategorie)
    }

    React.useEffect(() => {
        loadData();
    },[])

    return (
        <Styles.Container>
            <Header title="Resumo por categoria"/>
            <ScrollView contentContainerStyle={{ padding: 24}}>
                {totalByCategoriesData.map(data => (
                    <HistoryCard key={data.name} color={data.color} title={data.name} amount={data.total}/>

                ))}
            </ScrollView>
            
        </Styles.Container>
    );
}

export default Resume;
