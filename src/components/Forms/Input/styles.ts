import styled, {css} from 'styled-components/native'
import {TextInput} from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import {FormInputProps} from '.'

const TextInputBase = styled(TextInput)<FormInputProps>`
    width: 100%;
    padding: 16px 18px;
    font-size: ${RFValue(14)}px;
    background-color: ${({theme}) => theme.colors.shape};
    border-radius: 5px;
    margin-bottom: 8px;
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme}) => theme.colors.text_dark};
    ${({active, theme}) => active && css`
        border-width: 1px;
        border-color: ${theme.colors.attention}; 
    `}
`

export {TextInputBase}