import AuthProvider, {useAuth} from './Auth'
import {renderHook, act} from '@testing-library/react-hooks'
import {mocked} from 'ts-jest/utils'
import {startAsync} from 'expo-auth-session'

// jest.mock('expo-auth-session', () => {
//     return{
//         startAsync: () => {
//             return {
//                 type: 'success',
//                 params:{
//                     access_token: 'any'
//                 }
//             }
//         }
//     }
// })

jest.mock('expo-auth-session')
const authSessionMocked = mocked(startAsync as any)

global.fetch = jest.fn(() =>
    Promise.resolve({
    json: () => Promise.resolve({ 
        id: 'any', 
        name: 'Nome Qualquer', 
        picture: 'image.png', 
        email: 'teste@teste.com'
        }),
    })
) as any;

describe('Teste do hook de autenticação', () => {
    test('Deve ser possível de fazer login com conta google existente', async () => {

        const {result} = renderHook(
            () => useAuth(), 
            {wrapper: AuthProvider})

            authSessionMocked.mockReturnValueOnce({
                type: 'success',
                params:{
                    access_token: 'any'
                }
            })

            await act(() => result.current.signInGoogle()); // se existe atualizacao de estado entao use o act do testing library

            // console.log('user: ', result.current.user);

            expect(result.current.user.email).toBe('teste@teste.com');
    })

    test('Usuário não conecta se ele cancela a autenticação com a google', async() => {
        const {result} = renderHook(
            () => useAuth(), 
            {wrapper: AuthProvider})

        authSessionMocked.mockReturnValueOnce({ // o once nao aproveita o resultado do mock anterior
            type: 'cancel',
            params: {
                access_token: null,
            }
        })

            await act(() => result.current.signInGoogle());

            // console.log('user: ', result.current.user);

            expect(result.current.user).not.toHaveProperty('id');
    })

})