import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import api from "../../service/api";
import Screen from "../Screen";
import { FormStyle } from "./style";

const Form = () => {
  const [result, setResult] = useState();
  const formSchema = yup.object().shape({
    amount: yup.number("Digite um valor").required("Informe o valor da venda"),
    installments: yup
      .number("Informe a quantidade de parcelas")
      .required("Em quantas parcelas"),
    mdr: yup
      .number("Digite um percentual de MDR")
      .required("Informe o percentual de MDR"),
  });

  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(formSchema),
  });

  const handleAdd = ({ amount, installments, mdr }) => {
    const data = {
      amount,
      installments,
      mdr,
    };
    api
      .post("", data)
      .then((response) => {
        setResult(response.data);
      })
      .catch((err) => {
        setResult(err.response);
      });

    reset();
  };

  return (
    <div>
      <div>
        <FormStyle onSubmit={handleSubmit(handleAdd)}>
          <h1>Simule sua antecipação</h1>
          <label>Informe o valor da venda</label>
          <input placeholder="R$" type="number" {...register("amount")} />
          <label>Em quantas parcelas</label>
          <input placeholder=" " type="number" {...register("installments")} />
          <span>Máximo de 12 parcelas</span>
          <label>Informe o percentual de MDR</label>
          <input placeholder=" " type="number" {...register("mdr")} />
          <button type="submit">Enviar</button>
        </FormStyle>
      </div>
      <Screen result={result} />
    </div>
  );
};

export default Form;
