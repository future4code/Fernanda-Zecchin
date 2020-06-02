import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

//O usuário deve poder criar um novo post. Para isso, ele deve digitar no input cujo placeholder é "Novo post", e clicar no botão "Adicionar". Quando ele faz isso, um novo item é adicionado à lista de posts.

describe("Funcionalidade de criar um novo post", () => {
  it("novo post é adicionado na página", () => {
      const {getByText, getByPlaceholderText } = render(<App/>)

      const input = getByPlaceholderText(/Novo post/i);

      const button = getByText(/Adicionar/i)
      
      fireEvent.change(input, {target:{value: 'teste'}});
      fireEvent.click(button);
      expect(getByText('teste')).toBeInTheDocument()

  })
})