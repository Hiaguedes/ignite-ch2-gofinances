import React from 'react';
import Styles from './styles'
import AppleSvg from '../../../assets/apple.svg'
import GoogleSvg from '../../../assets/google.svg'
import GoFinanceSvg from '../../../assets/logo.svg'
import { RFValue } from 'react-native-responsive-fontsize';
import SocialLoginButton from '../components/SocialLoginButton'


const Login = () => {
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
                    <SocialLoginButton title="Entrar com Google" icon={GoogleSvg} />
                    <SocialLoginButton title="Entrar com Apple" icon={AppleSvg} />
                </Styles.ButtonContainer>
            </Styles.Footer>
        </Styles.Container>
    );
}

export default Login;
