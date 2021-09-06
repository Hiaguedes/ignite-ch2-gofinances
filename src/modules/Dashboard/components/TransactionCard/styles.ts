import styled, { css } from 'styled-components/native'
import {Feather} from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize';
import {TransactionCardProps} from './'

type TransactionType = TransactionCardProps['transactionType']
interface ItemTypeProps {
    transactionType: TransactionType;
}

const Container = styled.View`
    background-color: ${({theme}) => theme.colors.shape};
    border-radius: 5px;
    padding: 24px 17px;
    margin-bottom: 16px;
`;

const Title = styled.Text`
    font-size: ${RFValue(14)}px;
    margin-top: 2px;
    font-family: ${({theme}) => theme.fonts.regular};
`;

const Amount = styled.Text<ItemTypeProps>`
    font-size: ${RFValue(20)}px;
    font-family: ${({theme}) => theme.fonts.regular}
    ${({transactionType}) => {
        switch(transactionType){
            case 'out':
                return css`color: ${({theme}) => theme.colors.attention}`;
            case 'entry':
                return css`color: ${({theme}) => theme.colors.success}`;
        }
    }}
`;

const Footer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 19px;
`;

const Category = styled.View`
    flex-direction: row;
    align-items: center;
`;

const Icon = styled(Feather)`
font-size: ${RFValue(20)}px;
margin-right: 17px;
color: ${({theme}) => theme.colors.text};
`;

const CategoryName = styled.Text`
font-size: ${RFValue(14)}px;
color: ${({theme}) => theme.colors.text};
font-family: ${({theme}) => theme.fonts.regular}
`;

const Date = styled.Text`
color: ${({theme}) => theme.colors.text};
font-size: ${RFValue(14)}px;
font-family: ${({theme}) => theme.fonts.regular}
`;

export {Container, Title, Amount, Footer, Category, Icon, CategoryName, Date}