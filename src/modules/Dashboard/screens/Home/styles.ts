import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

const Container = styled.View`
    background-color: ${({theme}) => theme.colors.background};
    flex: 1;
`;

const Title = styled.Text`
    font-size: 24px;
    font-family: ${({theme}) => theme.fonts.bold};
    color: ${({theme}) => theme.colors.title};
`

const ContainerHighlightCards = styled.ScrollView.attrs({
    horizontal: true, 
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: { paddingHorizontal: 24 }
})`
    width: 100%;
    position: absolute;
    margin-top: ${RFPercentage(20)}px;
`;

const TransactionsList = styled.View`
    flex: 1%;
    padding: 0 24px;
    margin-top: ${RFPercentage(14)}px;
`;

const TransactionListTitle = styled.Text`
    font-size: ${RFValue(18)}px;
    font-family: ${({theme}) => theme.fonts.regular};
    margin-bottom: 16px;
`;

const LoadContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`

export { Container, Title, ContainerHighlightCards, TransactionsList, TransactionListTitle, LoadContainer }
