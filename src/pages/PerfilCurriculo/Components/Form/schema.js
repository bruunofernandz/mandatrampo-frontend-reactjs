import * as Yup from "yup"


export default Yup.object().shape({
  name: Yup.string().required('Nome é obrigatorio'),
  email: Yup.string().email('E-mail inválido').required('E-mail Obrigatório'),
  phone: Yup.string().required('Telefone é obrigatório'),
  estado: Yup.string().required('Estado é obrigatório'),
  cidade: Yup.string().required('Cidade é obrigatório'),
  profissao: Yup.string().required('Profissão é obrigatório'),
  experiencia: Yup.string().required('Experiencia é obrigatório')
})