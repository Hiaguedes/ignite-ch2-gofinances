import {Feather} from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

const Container = styled.View`flex: 1;`

const ChartContainer = styled.View`
    width: 100%;
    align-items: center;
`

const MonthSelect = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
`

const SelectedMonth = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(20)}px;
`

const Button = styled.TouchableOpacity``

const SelectIcon = styled(Feather)`
    font-size: ${RFValue(24)}px;
` 

const LoadContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`

export default {Container, ChartContainer, MonthSelect, Button, SelectedMonth, SelectIcon, LoadContainer}