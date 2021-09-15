import React from 'react';
import { render, fireEvent } from '@testing-library/react-native'
import Register from './Register.screen'
import theme from '../../../../global/theme'
import {ThemeProvider} from 'styled-components/native'

const TestProvider: React.FC = ({children}) => (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
    return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({
        navigate: mockedNavigate,
    }),
    };
});

describe('Testes na tela de registro de uma nova transação', () => {
    test('O clique no botão de selecionar categoria abre uma modal', () => {
        const {getByTestId} = render(
            <Register />,
            {
                wrapper: TestProvider
        });

        const modalCategory = getByTestId('modal-category');
        const selectButton = getByTestId('select-button');

        expect(modalCategory.props.visible).toBeFalsy();

        fireEvent.press(selectButton);

        expect(modalCategory.props.visible).toBeTruthy(); // se a modal leva um tempo para abrir voce usa o waitFor do @testing-library/react-native

        //como em 

        /*
            waitFor(() => {
                expect(modalCategory.props.visible).toBeTruthy();
            })

            //porem a funcao de teste deve ser async
        */

    })
})