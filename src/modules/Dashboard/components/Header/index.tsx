import React from 'react';
import { LogoutButton ,Header, UserInfo, Photo, User, UserGreeting, UserName, UserWrapper, PowerButton } from './styles'


const HeaderComponent = () => {
    return (
        <Header>
            <UserWrapper>
                <UserInfo>
                    <Photo source={{uri: 'https://avatars.githubusercontent.com/u/23282043?v=4'}}/>
                    <User>
                        <UserGreeting>Olá, </UserGreeting>
                        <UserName>Hiago</UserName>
                    </User>
                </UserInfo>
            <LogoutButton onPress={() => {}}>
                <PowerButton /> 
            </LogoutButton>
            </UserWrapper>
        </Header>
    );
}

export default HeaderComponent;
