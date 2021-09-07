import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'

const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.background};
`;
 
const Header  = styled.View`
    width: 100%;
    height: ${RFValue(113)}px;
    background-color: ${({theme}) => theme.colors.primary};
    align-items: center;
    justify-content: flex-end;
    padding-bottom: 19px;
`;
 const Title = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(18)}px;
    color: ${({theme}) => theme.colors.shape};
 `;

 export default {Header, Container,Title}