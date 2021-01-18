import axios from "axios";

const enderecos = axios.create({
  baseURL: "https://servicodados.ibge.gov.br/api/v1/localidades",
});

export default enderecos;
