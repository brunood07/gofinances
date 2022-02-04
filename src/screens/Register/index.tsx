import React, { useState } from "react";

import { Button } from "../../components/Forms/Button";
import { CategorySelect } from "../../components/Forms/CategorySelect";
import { Input } from "../../components/Forms/Input";
import { TransactionTypeButton } from "../../components/Forms/TransactionTypeButton";

import { 
  Container,
  Header,
  Title, 
  Form,
  Fields,
  TransactionsTypes
} from "../Register/styles";

export function Register() {
  const [transactionType, setTransactionType] = useState("");

  function handleTransactionsTypeSelect(type: "up" | "down") {
    setTransactionType(type);
  }

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Fields>
          <Input 
            placeholder="Nome"
          />
          <Input 
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

          <CategorySelect title="Categoria" />
        </Fields>

        <Button title="Enviar"/>
      </Form>

    </Container>
  );
}