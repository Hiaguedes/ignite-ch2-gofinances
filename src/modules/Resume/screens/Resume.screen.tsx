import React from 'react';
import Styles from './styles'
import {ScrollView, ActivityIndicator} from 'react-native'
import Header from '../../../components/Header'
import HistoryCard from '../components/HistoryCard'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {TransactionCardProps} from '../../../global/types'
import categories from '../../../utils/categories';
import { VictoryPie } from 'victory-native'
import { useFocusEffect } from '@react-navigation/core';
import { RFValue } from 'react-native-responsive-fontsize';
import {useTheme} from 'styled-components'
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs'
import {addMonths, subMonths, format} from 'date-fns'
import {ptBR} from 'date-fns/locale'

interface TotalByCategoryProps {
    name: string;
    total: string;
    color: string;
    totalNumber: number;
    percentage: string,
}

const Resume = () => {

    const [totalByCategoriesData, setTotalByCategories] = React.useState<TotalByCategoryProps[]>([] as TotalByCategoryProps[]);
    const theme = useTheme();
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const [isLoading, setIsLoading] = React.useState(false)

    const handleDateChange = (action: 'next' | 'back') => {
        switch(action){
            case 'next': 
                setSelectedDate(addMonths(selectedDate, 1));
                break;
            case 'back': 
                setSelectedDate(subMonths(selectedDate, 1));
                break;
        }
    }

    const loadData = async() => {
        setIsLoading(true);
        const collectionKey = '@gofinances:transactions';
        const response = await AsyncStorage.getItem(collectionKey);
        const responseParsed = response ? JSON.parse(response) : [];

        const expensives = responseParsed
                            .filter((transaction: TransactionCardProps) => 
                            transaction.transactionType === 'out' &&
                             new Date(transaction.date).getMonth() === selectedDate.getMonth() && 
                             new Date(transaction.date).getFullYear() === selectedDate.getFullYear()); 
        
        const expensiveTotal: number = expensives.reduce((acc: number, next: TransactionCardProps) => acc + Number(next.amount), 0);

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
                percentage: `${((categorySum * 100)/expensiveTotal).toFixed(2)} %`,
                totalNumber: categorySum,
                total: categorySum
                        .toLocaleString('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                        }),
            })

        })

        setTotalByCategories(totalByCategorie);
        setIsLoading(false);
    }

    useFocusEffect(React.useCallback(() => {
        loadData();
    },[selectedDate]))

    return (
        <Styles.Container>
            <Header title="Resumo por categoria"/>
            {isLoading ? 
            
                <Styles.LoadContainer>
                    <ActivityIndicator size="large" color={theme.colors.primary}/> 
                </Styles.LoadContainer>
            
            :
            <ScrollView 
            contentContainerStyle={{ 
                paddingHorizontal: 24,
                paddingTop: 24,
                paddingBottom: useBottomTabBarHeight() + 50
            }} 
            showsVerticalScrollIndicator={false}
            >
                <Styles.MonthSelect>
                    <Styles.Button onPress={() => handleDateChange('back')}>
                        <Styles.SelectIcon name="chevron-left"/>
                    </Styles.Button>
                    <Styles.SelectedMonth>{format(selectedDate, 'MMMM, yyyy', {locale: ptBR})}</Styles.SelectedMonth>
                    <Styles.Button onPress={() => handleDateChange('next')}>
                        <Styles.SelectIcon name="chevron-right"/>
                    </Styles.Button>
                </Styles.MonthSelect>
            <Styles.ChartContainer>
                < VictoryPie 
                    data={totalByCategoriesData}
                    x="percentage"
                    y="totalNumber"
                    colorScale={totalByCategoriesData.map(data => data.color)}
                    labelRadius={50}
                    style={{
                        labels: {
                            fontSize: RFValue(18),
                            fontWeight: 'bold',
                            fill: theme.colors.shape,
                        }
                    }}
                />
            </Styles.ChartContainer>
                {totalByCategoriesData.map(data => (
                    <HistoryCard key={data.name} color={data.color} title={data.name} amount={data.total}/>

                ))}
            </ScrollView>
            }
            
        </Styles.Container>
    );
}

export default Resume;
