import React from "react";
import {render, fireEvent} from "@testing-library/react";
import Planner from ".";

test("Botão criar tarefa não seja nulo", async () => {
  const utils = render (<Planner/>);
  
  expect(utils.queryByText(/criar tarefa/i)).not.toEqual(null)
});

test("Verificar se botão Criar Tarefa existe", async () => {
  const {queryByTestId} = render (<Planner/>);

  expect(queryByTestId('botao-adicionar')).not.toEqual(null);
});