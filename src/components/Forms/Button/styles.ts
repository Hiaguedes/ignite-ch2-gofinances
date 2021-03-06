import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
// import { RectButton } from 'react-native-gesture-handler'

const ButtonBase = styled.TouchableOpacity`
    width: 100%;
    background-color: ${({theme}) => theme.colors.secondary};
    align-items: center;
    justify-content: center;
    padding: 18px;
    border-radius: 5px;
`

const Title = styled.Text`
    font-family: ${({theme}) => theme.fonts.medium};
    font-size: ${RFValue(14)}px;
    color: ${({theme}) => theme.colors.shape};
`

export {ButtonBase, Title}