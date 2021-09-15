import React from 'react';
import {render} from '@testing-library/react-native'
import Profile from './profile.screen'

describe('Testes unitários na screen de profile', () => {
    test('Verifica se exibe placeholder no seu text input', () => {
        const {getByTestId} = render(<Profile />);

        const inputName = getByTestId('profile-text-input');

        expect(inputName.props.placeholder).toBeTruthy()
    })

    test('Checa se os inputs carregam vazios', () => {
        const {getByTestId} = render(<Profile />);

        const inputName = getByTestId('profile-text-input');
        const inputSurname = getByTestId('profile-text-input-surname');

        expect(inputName.props.value).toEqual('')
        expect(inputSurname.props.value).toEqual('')

    })
})
