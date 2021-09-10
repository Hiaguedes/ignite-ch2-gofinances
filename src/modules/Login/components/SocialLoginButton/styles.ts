import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

const Container = styled.TouchableOpacity`
    width: 100%;
    flex-direction: row;
    background-color: ${({theme}) => theme.colors.shape};

    border-width: 1px;
    border-color: ${({theme}) => theme.colors.text};
    margin: 10px 0;
    border-radius: 5px;
    height: ${RFValue(56)}px;
    align-items: center;
`

const ImageContainer = styled.View`
    height: 100%;
    justify-content: center;
    align-items: center;
    padding: ${RFValue(16)}px;
    border-color: ${({theme}) => theme.colors.background};
    border-width: 1px;
`
const Title = styled.Text`
    font-family: ${({theme}) => theme.fonts.medium};
    color: ${({theme}) => theme.colors.text_dark};
    font-size: ${RFValue(14)}px;
    text-align: center;
    flex: 1;
`

export default {Container, Title, ImageContainer}