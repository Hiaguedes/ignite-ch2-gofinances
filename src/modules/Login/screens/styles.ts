import styled from 'styled-components/native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

const Container = styled.View`
    flex:1;
`
const TitleWrapper = styled.View`
    align-items: center;
`
const LoginHeader = styled.View`
    background-color: ${({theme}) => theme.colors.primary};
    width: 100%;
    height: 70%;
    justify-content: flex-end;
    align-items: center;
`
const Title = styled.Text`
    font-family: ${({theme}) => theme.fonts.medium};
    color: ${({theme}) => theme.colors.shape};
    font-size: ${RFValue(30)}px;
    text-align: center;
    margin-top: 45px;
`
const SiginTitle = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme}) => theme.colors.shape};
    font-size: ${RFValue(16)}px;
    text-align: center;
    margin-top: 80px;
    margin-bottom: 67px;
`

const Footer = styled.View`
    background-color: ${({theme}) => theme.colors.secondary};
    flex: 1;
    width: 100%;
`

const ButtonContainer = styled.View`
    margin-top: ${RFPercentage(-4)}px;
    padding: 0 32px;
    justify-content: space-between;
`

export default {Container, TitleWrapper, LoginHeader, Title, SiginTitle, Footer, ButtonContainer}