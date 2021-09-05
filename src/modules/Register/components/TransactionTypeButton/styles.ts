import styled, { css } from 'styled-components/native'
import {Feather} from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import {TransactionTypeProps} from '.'

interface TransactionProps {
    isActive: TransactionTypeProps['isActive'];
    type: TransactionTypeProps['type'];
}

const Container = styled.TouchableOpacity<TransactionProps>`
    width: 48%;
    flex-direction: row;
    align-items: center;
    padding: 16px 35px;
    border: ${({isActive}) => isActive ? 0 : 1.5}px solid ${({theme}) => theme.colors.text};
    border-radius: 5px;
    justify-content: center;
    ${({ isActive, type}) => {
        if(isActive) {
            switch(type){
                case 'entry': return css`background-color: ${({theme}) => theme.colors.success_light}`;
                case 'out': return css`background-color: ${({theme}) => theme.colors.attention_light}`;
            }
        }
        return css`background-color: ${({theme}) => theme.colors.shape}`
    }}
`;

const Icon = styled(Feather)<{ type: TransactionTypeProps['type']}>`
    font-size: ${RFValue(24)}px;
    margin-right: 12px;
    color: ${({type, theme}) => type === 'entry' ? theme.colors.success : theme.colors.attention}
`;

const Title = styled.Text`
    font-size: ${RFValue(14)}px;
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme}) => theme.colors.text_dark};
`;

export {Container, Icon, Title}