import React from 'react';
import { LogoutButton ,Header, UserInfo, Photo, User, UserGreeting, UserName, UserWrapper, PowerButton } from './styles'
import {useAuth} from '../../../../contexts/Auth'

const HeaderComponent = () => {
    const {user, LogOut} = useAuth();
    return (
        <Header>
            <UserWrapper>
                <UserInfo>
                    <Photo source={{uri: user.image}}/>
                    <User>
                        <UserGreeting>Olá, </UserGreeting>
                        <UserName>{user.name}</UserName>
                    </User>
                </UserInfo>
            <LogoutButton onPress={LogOut}>
                <PowerButton /> 
            </LogoutButton>
            </UserWrapper>
        </Header>
    );
}

export default HeaderComponent;
