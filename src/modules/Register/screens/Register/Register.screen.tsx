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
    const [transactionType, setTransactionType] = React.useState('');
    const [showCategoryModal, setShowCategoryModal] = React.useState(false);
    const [selectedCategory, setSelectedCategory] = React.useState<Category>({
        key: '',
        name: '',
    })
    const { 
            control, 
            handleSubmit, 
            formState: { errors } 
        } = useForm({
            resolver: yupResolver(schema)
    });

    React.useEffect(() => {
        console.log('ERROS ', errors)
    }, [errors])

    const closeModal = () => setShowCategoryModal(false)
    const openModal = () => setShowCategoryModal(true)

    const handleTransactionTypeSelect = (type: 'entry' | 'out') => {
        setTransactionType(type)
    }

    const handleRegister = ({name, amount}: FormData) => {

        if(!transactionType) return Alert.alert('Selecione o tipo de transação, se é de entrada ou de saída');
        if(!selectedCategory.key) return Alert.alert('Selecione a categoria da transação');

        const data = {
            name,
            amount,
            transactionType,
            category: selectedCategory
        }


        console.log(data)
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
                        keyboardType="numeric"
                        error={errors.amount ? errors.amount.message : ''}
                        />
                    <TransactionButtons>
                        <TransactionTypeButton isActive={transactionType === 'entry'} onPress={() => handleTransactionTypeSelect('entry')} type="entry"/>
                        <TransactionTypeButton isActive={transactionType === 'out'} onPress={() => handleTransactionTypeSelect('out')} type="out"/>
                    </TransactionButtons>
                    <Select title={selectedCategory.name || "Categorias"} onPress={openModal}/>
                </Fields>
                <Button title="Adiciona" onPress={handleSubmit(handleRegister)}/ >
            </Form>
            <Modal visible={showCategoryModal}>
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
