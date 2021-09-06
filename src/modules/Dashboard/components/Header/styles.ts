import styled from 'styled-components/native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import { Feather } from '@expo/vector-icons'
import { BorderlessButton } from 'react-native-gesture-handler';

export const Header = styled.View`
    width: 100%;
    background-color: ${({theme}) => theme.colors.primary};
    height: ${RFPercentage(42)}px;
    flex-direction: row;
    justify-content: center;
`

export const Container = styled.View`
    flex: 1;
`

export const UserInfo = styled.View`
    flex-direction: row;
`
export const Photo = styled.Image`
    width: ${RFValue(48)}px;
    height: ${RFValue(48)}px;
    border-radius: 10px;
`

export const UserWrapper = styled.View`
    width: 100%;
    padding: 0 24px;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 30px;
`

export const User = styled.View`
    margin-left: 17px;
`

export const UserGreeting = styled.Text`
    color: ${({theme}) => theme.colors.shape};
    font-size: ${RFValue(18)}px;
    font-family: ${({theme}) => theme.fonts.regular};
`
export const UserName = styled.Text`
    color: ${({theme}) => theme.colors.shape};
    font-size: ${RFValue(18)}px;
    font-family: ${({theme}) => theme.fonts.bold};
`

export const LogoutButton = styled(BorderlessButton)``

export const PowerButton = styled(Feather).attrs({
    name: 'power',
    size: RFValue(24)
})`
    width: ${RFValue(48)}px;
    height: ${RFValue(48)}px;
    color: ${({theme}) => theme.colors.secondary};
`;