import styled, { css } from 'styled-components/native'
import {Feather} from '@expo/vector-icons'
import {RFValue} from 'react-native-responsive-fontsize'
import {HighlightCardsProps} from './';

type CardType = HighlightCardsProps['type'];
interface TypeProps {
    type: CardType;
}

const handleColorIcon = (type: CardType) => {
    switch (type) {
        case 'entry':
            return css`color: ${({theme}) => theme.colors.success}`;
        case 'out':
            return css`color: ${({theme}) => theme.colors.attention}`;
        case 'total':
            return css`color: ${({theme}) => theme.colors.shape}`;
    }
}

const Container = styled.View<TypeProps>`
    background-color: ${({theme, type}) => type === 'total' ? theme.colors.secondary :theme.colors.shape};
    width: ${RFValue(300)}px;
    border-radius: 5px;
    padding: 19px 23px;
    padding-bottom: ${RFValue(42)}px;
    margin-right: ${RFValue(16)}px;
`;
const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

const Title = styled.Text.attrs({
    numberOfLines: 1,
    ellipsizeMode:'tail'
})<TypeProps>`
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    flex: 1;
    color: ${({theme, type}) => type === 'total' ? theme.colors.shape :theme.colors.text_dark};
;`;

const Icon = styled(Feather)<TypeProps>`
    font-size: ${RFValue(40)}px;
    ${({type}) => handleColorIcon(type)}
`;

const Content = styled.View``;

const Amount = styled.Text<TypeProps>`
    font-family: ${({theme}) => theme.fonts.medium};
    font-size: ${RFValue(32)}px;
    color: ${({theme, type}) => type === 'total'? theme.colors.shape :theme.colors.text_dark};
    margin-top: 38px;
`;
const LastTransaction = styled.Text<TypeProps>`
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(12)}px;
    color: ${({theme, type}) => type === 'total'? theme.colors.shape : theme.colors.text};
    margin-top: 10px;
`;


export {Container, Header, Title, Icon, Content, Amount, LastTransaction}