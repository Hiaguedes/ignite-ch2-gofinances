import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.background};
`

const Header = styled.View`
    width: 100%;
    height: ${RFValue(113)}px;
    background-color: ${({theme}) => theme.colors.primary};
    align-items: center;
    justify-content: flex-end;
    padding-bottom: 19px;
`

const Title = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(18)}px;
    color: ${({theme}) => theme.colors.shape};
`

const Form = styled.View`
    flex: 1;
    width: 100%;
    padding: 24px;
    justify-content: space-between;
`

const Fields = styled.View``

const TransactionButtons = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 8px;
    margin-bottom: 16px;
`

export { Header, Title, Container, Form, Fields, TransactionButtons }