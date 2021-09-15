import React from 'react';
import Input from '.'
import {render} from '@testing-library/react-native'
import theme from '../../../global/theme'
import {ThemeProvider} from 'styled-components/native'

const TestProvider: React.FC = ({children}) => (<ThemeProvider theme={theme}>{children}</ThemeProvider>)

describe('Testes do componente de input', () => {
    test('Se o componente estiver ativo aplicar uma linha de borda', () => {
        const { getByTestId } = render(
            <Input 
                        testID="input" 
                        placeholder="something" 
                        active
                        />, {
                            wrapper: TestProvider
                        }
            )

        const input = getByTestId('input')

        expect(input.props.style[0].borderColor)
            .toEqual(theme.colors.attention)

            expect(input.props.style[0].borderWidth)
            .toEqual(1)
    })
})