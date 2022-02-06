import React, { useState } from "react";
import { Alert, Modal } from "react-native";
import { useForm } from "react-hook-form";

import { Button } from "../../components/Forms/Button";
import { CategorySelectButton } from "../../components/Forms/CategorySelectButton";
import { InputForm } from "../../components/Forms/InputForm";
import { TransactionTypeButton } from "../../components/Forms/TransactionTypeButton";

import { CategorySelect } from "../CategorySelect";

import { 
  Container,
  Header,
  Title, 
  Form,
  Fields,
  TransactionsTypes
} from "../Register/styles";

interface FormData {
  [name: string]: any;
}

export function Register() {
  const [transactionType, setTransactionType] = useState("");
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  const [category, setCategory] = useState({
    key: "category",
    name: "Categoria",
  });

  const {
    control,
    handleSubmit
  } = useForm();

  function handleTransactionsTypeSelect(type: "up" | "down") {
    setTransactionType(type);
  }

  function handleOpenSelectCategoryModal() {
    setCategoryModalOpen(true);
  }

  function handleCloseSelectCategoryModal() {
    setCategoryModalOpen(false);
  }

  function handleRegister(form: FormData) { 
    if(!transactionType) {
      return Alert.alert('Selecione o tipo de transação');
    }

    if(category.key === 'category') {
      return Alert.alert('Selecione a categoria');
    }
    
    const data = {
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category.key
    }

    console.log(data);
  }

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Fields>
          <InputForm 
            name="name"
            control={control}
            placeholder="Nome"
          />
          <InputForm 
            name="amount"
            control={control}
            placeholder="Preço"
          />

          <TransactionsTypes>
            <TransactionTypeButton 
              type="up"
              title="Entrada"
              onPress={() => handleTransactionsTypeSelect("up")}
              isActive={transactionType === "up"}
            />

            <TransactionTypeButton 
              type="down"
              title="Saída"
              onPress={() => handleTransactionsTypeSelect("down")}
              isActive={transactionType === "down"}
            />
          </TransactionsTypes>

          <CategorySelectButton 
            title={category.name} 
            onPress={handleOpenSelectCategoryModal}
          />
        </Fields>

        <Button 
          title="Enviar"
          onPress={handleSubmit(handleRegister)}
        />
      </Form>

      <Modal visible={categoryModalOpen}>
        <CategorySelect 
          category={category}
          setCategory={setCategory}
          closeSelectCategory={handleCloseSelectCategoryModal}
        />
      </Modal>
    </Container>
  );
}