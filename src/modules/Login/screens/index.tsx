import React from 'react';
import Styles from './styles'
import AppleSvg from '../../../assets/apple.svg'
import GoogleSvg from '../../../assets/google.svg'
import GoFinanceSvg from '../../../assets/logo.svg'
import { RFValue } from 'react-native-responsive-fontsize';
import SocialLoginButton from '../components/SocialLoginButton'
import {useAuth} from '../../../contexts/Auth'
import { Alert, Platform } from 'react-native';


const Login = () => {
    const {signInGoogle} = useAuth();

    const handleSignInGoogle = async () => {
        try {
            await signInGoogle();
        } catch (e) {
            console.error(e);
            Alert.alert('Não foi possível conectar na conta google')
        }
    }

    return (
        <Styles.Container>
            <Styles.LoginHeader>
                <Styles.TitleWrapper>
                    <GoFinanceSvg width={RFValue(120)} height={RFValue(68)} />
                    <Styles.Title>
                        Controle suas{'\n'}
                        finanças de forma{'\n'}
                        muito simples
                    </Styles.Title>
                </Styles.TitleWrapper>
            <Styles.SiginTitle>Faça seu login com uma das contas abaixo</Styles.SiginTitle>
            </Styles.LoginHeader>
            <Styles.Footer>
                <Styles.ButtonContainer>
                    <SocialLoginButton title="Entrar com Google" icon={GoogleSvg} onPress={handleSignInGoogle} />
                    {Platform.OS === 'ios' && <SocialLoginButton title="Entrar com Apple" icon={AppleSvg} />}
                </Styles.ButtonContainer>
            </Styles.Footer>
        </Styles.Container>
    );
}

export default Login;
