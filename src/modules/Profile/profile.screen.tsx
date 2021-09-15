import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

const Profile = () => {
    const [info, setInfo] = React.useState({
        name: '',
        surname: ''
    })
    return (
        <View>  
            <Text>Profile</Text>
            <TextInput 
                testID="profile-text-input"
                style={{
                    width: '100%',
                    height: 15,
                }}
                placeholder="Nome" 
                value={info.name}
            />
                        <TextInput 
                testID="profile-text-input-surname"
                style={{
                    width: '100%',
                    height: 15,
                }}
                placeholder="Sobrenome" 
                value={info.surname}
            />
            <TouchableOpacity onPress={() => {}}>Salvar</TouchableOpacity>
        </View>
    );
}

export default Profile;
