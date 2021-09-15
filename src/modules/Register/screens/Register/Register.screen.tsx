import React from 'react';
import {
        Modal, 
        TouchableWithoutFeedback, 
        Keyboard,
        Alert,
    } from 'react-native';
import { Header, Title, Container, Form, Fields, TransactionButtons } from './styles'
import ControlledInput from '../../../../components/Forms/ControlledInput'
import Button from '../../../../components/Forms/Button'
import TransactionTypeButton from '../../components/TransactionTypeButton'
import Select from '../../../../components/Forms/Select'
import CategoryModal, {Category} from '../CategoryModal'
import {useForm} from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import AsyncStorage from '@react-native-async-storage/async-storage'
import uuid from 'react-native-uuid'
import {useNavigation} from '@react-navigation/native'

type NavigationProps = {
    navigate:(screen:string) => void;
 }
interface FormData {
    name: string;
    amount: string;
}

const schema = Yup.object().shape({
    name: Yup
            .string()
            .required('Nome é obrigatório'),
    amount: Yup
            .number()
            .typeError('Informe um valor numérico')
            .positive('O valor não pode ser negativo')
            .required('O valor é obrigatório')
})

const RegisterScreen = () => {
    const collectionKey = '@gofinances:transactions';
    const navigation = useNavigation<NavigationProps>();
    const [transactionType, setTransactionType] = React.useState('');
    const [showCategoryModal, setShowCategoryModal] = React.useState(false);
    const [selectedCategory, setSelectedCategory] = React.useState<Category>({
        key: '',
        name: '',
    })

    
    const { 
        control, 
        handleSubmit, 
        formState: { errors },
        reset
    } = useForm({
        resolver: yupResolver(schema)
    });
    const ResetStates = () => {
        setTransactionType('');
        setSelectedCategory({
            key: '',
            name: '',
        })
        reset();
        navigation.navigate('Listagem');
    }

    React.useEffect(() => {
        const loadData = async () => {
            const data = await AsyncStorage.getItem(collectionKey);
            console.log(JSON.parse(data! ))
        }

        loadData();

        // const removeAll = async() => {
        //     await AsyncStorage.removeItem(collectionKey)
        //     console.log(`${collectionKey} has been removed`)
        // }

        // removeAll()
    }, [])

    const closeModal = () => setShowCategoryModal(false)
    const openModal = () => setShowCategoryModal(true)

    const handleTransactionTypeSelect = (type: 'entry' | 'out') => {
        setTransactionType(type)
    }

    const handleRegister = async ({name, amount}: FormData) => {

        if(!transactionType) return Alert.alert('Selecione o tipo de transação, se é de entrada ou de saída');
        if(!selectedCategory.key) return Alert.alert('Selecione a categoria da transação');

        const newTransaction = {
            id: String(uuid.v4()),
            name,
            amount,
            transactionType,
            category: selectedCategory,
            date: new Date(),
        }

        try {
            const allTransactions = await AsyncStorage.getItem(collectionKey);
            const currentData = allTransactions ? JSON.parse(allTransactions) : [];

            const dataFormatted = [
                ...currentData,
                newTransaction
            ]
            await AsyncStorage.setItem(collectionKey, JSON.stringify(dataFormatted));
            ResetStates();

        } catch (e) {
            console.error('ERROR DE CADASTRO DE TRANSAÇÃO',e);
            Alert.alert("Não foi possível salvar o cadastro")
        } finally {

        }
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
            <Header>
                <Title>Contato</Title>
            </Header>
            <Form>
                <Fields>
                    <ControlledInput 
                        placeholder="Nome"
                        control={control}
                        name="name"
                        autoCapitalize='sentences'
                        autoCorrect={false}
                        error={errors.name ? errors.name.message : ''}
                        />
                    <ControlledInput 
                        placeholder="Preço"
                        control={control}
                        name="amount"
                        mask="currency"
                        keyboardType="numeric"
                        error={errors.amount ? errors.amount.message : ''}
                        />
                    <TransactionButtons>
                        <TransactionTypeButton isActive={transactionType === 'entry'} onPress={() => handleTransactionTypeSelect('entry')} type="entry"/>
                        <TransactionTypeButton isActive={transactionType === 'out'} onPress={() => handleTransactionTypeSelect('out')} type="out"/>
                    </TransactionButtons>
                    <Select testID="select-button" title={selectedCategory.name || "Categorias"} onPress={openModal}/>
                </Fields>
                <Button title="Enviar" onPress={handleSubmit(handleRegister)}/ >
            </Form>
            <Modal testID="modal-category" visible={showCategoryModal}>
                <CategoryModal 
                    setCategory={(category) => setSelectedCategory(category)} 
                    category={selectedCategory} 
                    closeSelectCategory={closeModal} />
            </Modal>
        </Container>
        </TouchableWithoutFeedback>
    );
}

export default RegisterScreen;
