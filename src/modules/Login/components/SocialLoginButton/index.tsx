import React from 'react';
import Styles from './styles'
import {TouchableOpacityProps} from 'react-native'
import {SvgProps} from 'react-native-svg'

interface LoginSocialButton extends TouchableOpacityProps {
    title: string;
    icon: React.FC<SvgProps>
}

const LoginSocialButton = ({title, icon: Icon,...rest}: LoginSocialButton) => {
    return (
        <Styles.Container {...rest}>
            <Styles.ImageContainer>
                <Icon />
            </Styles.ImageContainer>
            <Styles.Title>
                {title}
            </Styles.Title>
        </Styles.Container>
    );
}

export default LoginSocialButton;
