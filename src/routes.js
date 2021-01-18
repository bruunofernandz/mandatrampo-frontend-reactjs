import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import CadastroSimples from "./pages/CadastroSimples";
import Login from "./pages/Login";
import TipoCadastro from "./pages/TipoCadastro";
import PerfilCurriculo from "./pages/PerfilCurriculo";
import PerfilServico from "./pages/PerfilServico";
import Error404 from "./pages/Error404";
import Home from "./pages/Home";
import MeuPerfil from "./pages/MeuPerfil";
import VitrineCurriculo from "./pages/VitrineCurriculoV2";
import VitrineServico from "./pages/VitrineServico";
import EditarCurriculo from "./pages/EditarCurriculo";
import EditarServico from "./pages/EditarServiço";
import Admin from "./pages/Admin";
import Autorizacoes from "./pages/Admin/Autorizacoes";
import Denuncias from "./pages/Admin/Denuncias";
import EsqueceuSenha from "./pages/EsqueceuSenha";
import ResetSenha from "./pages/RestaurarSenha";
import NHOME from "./pages/NHome";
import MaisCurriculos from "./pages/MaisCurriculos";
import MaisServicos from "./pages/MaisServicos";
import TermoServico from "./pages/TermoConsentimento";
import Alunos from "./pages/Alunos";

import Curriculo from "./pages/Curriculo";
import Servico from "./pages/Servico";

import { isAuthenticated } from "./auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/login", state: { from: props.location } }}
        />
      )
    }
  />
);

const InitRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      ) : (
        <Component {...props} />
      )
    }
  />
);

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={NHOME} />
        <Route path="/old" exact component={Home} />
        <InitRoute path="/cadastro" component={CadastroSimples} />
        <InitRoute path="/login" component={Login} />
        <InitRoute path="/esqueceusenha" component={EsqueceuSenha} />
        <PrivateRoute path="/tipocadastro" component={TipoCadastro} />
        {/* <Route path="/cadastrocurriculo" component={PerfilCurriculo} /> */}
        <PrivateRoute path="/cadastroservico" component={PerfilServico} />
        <PrivateRoute path="/meuperfil" component={MeuPerfil} />
        <Route path="/vitrinecurriculo:id" component={VitrineCurriculo} />
        <Route path="/vitrineservico:id" component={VitrineServico} />
        <Route path="/editarcurriculo" component={EditarCurriculo} />
        <Route path="/editarservico" component={EditarServico} />
        <Route path="/reset-password" component={ResetSenha} />
        <Route path="/admin" exact component={Admin} />
        <Route path="/admin/denuncias" component={Denuncias} />
        <Route path="/admin/autorizacoes" component={Autorizacoes} />
        <Route path="/maiscurriculos" component={MaisCurriculos} />
        <Route path="/maisservicos" component={MaisServicos} />
        <Route path="/termoservico" component={TermoServico} />
        <Route path="/alunos" component={Alunos} />

        <PrivateRoute path="/curriculo" component={Curriculo} />
        <PrivateRoute path="/servico" component={Servico} />

        <Route path="*" component={Error404} />
      </Switch>
    </BrowserRouter>
  );
}
