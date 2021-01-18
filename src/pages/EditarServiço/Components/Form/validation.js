import * as Yup from "yup";

export default Yup.object().shape({
  categoria2: Yup.string().required("Categoria é obrigatório"),
});
