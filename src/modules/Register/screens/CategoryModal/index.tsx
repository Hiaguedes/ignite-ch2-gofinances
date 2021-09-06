import React from 'react';
import {Container, Header, Title, Category, Icon, Name, Separator, Footer} from './styles'
import {FlatList} from 'react-native'
import categories from '../../../../utils/categories'
import Button from '../../../../components/Forms/Button'

export interface Category {
    key: string;
    name: string;
}

export interface CategoryModalProps {
    category: Category;
    setCategory: (Category: Category) => void;
    closeSelectCategory: () => void;
}

const CategoryModal = ({category, setCategory, closeSelectCategory}: CategoryModalProps) => {
    return (
        <Container>
            <Header>
                <Title>Categoria</Title>
            </Header>
            <FlatList 
                data={categories}
                style={{flex:1, width: '100%'}}
                keyExtractor={({key}) => key}
                renderItem={({item: {icon, name, key}}) => (
                    <Category 
                        onPress={() => setCategory({key, name})}
                        isActive={category.key === key}
                    >
                        <Icon name={icon} />
                        <Name>{name}</Name>
                    </Category>
                )}
                ItemSeparatorComponent={() => <Separator />}
            />
            <Footer>
                <Button onPress={() => closeSelectCategory()} title="Selecionar"/>
            </Footer>
        </Container>
    );
}

export default CategoryModal;
