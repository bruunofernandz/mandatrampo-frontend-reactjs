import React, { Component } from 'react';

import { Container } from './styles';

import Enderecos from '../../services/enderecos';
import Api from '../../services/api';

export default class Servicos extends Component {
  state = {
    enderecos: [],
    cidades: [],
    categorias: [],
    name: '', // service
    description: '', // service
    city: '', // service
    state: '', // service
    phone: '', // service
    celphone: '', // service
    email: '', // service
    site: '', // service
    link_facebook: '', // service
    link_instagram: '', // service
    opening_hours: '', // service
    categories_id: '', // service
    categories_others: '', // service
    iswhats: false, // service
  }

  async componentDidMount() {
    const responseEnderecos = await Enderecos.get('/estados');
    const enderecos = Object.values(responseEnderecos.data);

    this.setState({enderecos: enderecos});

    const responseCategoria = await Api.get('/categorie');
    const categorie = Object.values(responseCategoria.data);

    this.setState({categorias: categorie});
  }

  getUf = async () => {
    const uf = document.querySelector("#state").value;
    document.querySelector("#city").removeAttribute("disabled");

    const response = await Enderecos.get(`/estados/${uf}/municipios`);

    this.setState({ cidades: response.data });
  };

  handleChangeState = (e) => {
    this.setState({
      state: e.target.value
    });
    this.getUf();
  }

  handleChangeCity = (e) => {
    this.setState({
      state: e.target.value
    });
  }

  handleChangeName = (e) => {
    this.setState({
      name: e.target.value
    });
   }

  handleChangeEmail = (e) => {
    this.setState({
      email: e.target.value
    });
  }

  handleChangePhone = (e) => {
    this.setState({
      phone: e.target.value
    });
  }

  handleChangeCelPhone = (e) => {
    this.setState({
      celphone: e.target.value
    })
  }

  handleChangeIswhats = (e) => {
    if (document.querySelector("#iswhats").checked === true){
      this.setState({
        iswhats: true
      });
    } else {
      this.setState({
        iswhats: false
      });
    }
  }

  handleChangeSite = (e) => {
    this.setState({
      site: e.target.value
    })
  }

  handleChangeCategories = (e) => {
    this.setState({
      categories_id: e.target.value
    })
  }

  render() {
    return(
      <Container>
        <h1>Serviços</h1>

        <input type="text" id="name" name="name" placeholder="Nome Completo" value={this.state.name} onChange={e => this.handleChangeName(e)} required/>

        <input type="email" name="email" id="email" placeholder="E-mail" value={this.state.email} onChange={e => this.handleChangeEmail(e)} required/>

        <input type="number" name="phone" id="phone" placeholder="DDD + Telefone Fixo" value={this.state.phone} onChange={e => this.handleChangePhone(e)} />

        <input type="number" name="celphone" id="celphone" placeholder="DDD + Celular" value={this.state.celphone} onChange={e => this.handleChangeCelPhone(e)} />

        <div>
          <label htmlFor="iswhats"> Contato por WhatsApp ?</label>
          <input type="checkbox" name="iswhats" id="iswhats" defaultChecked={true} onChange={e => this.handleChangeIswhats(e)} />
        </div>

        <select id="state" name="state" onChange={e => this.handleChangeState(e)}>
          <option value="" selected disabled>UF</option>
          {this.state.enderecos.map((endereco) => (
            <option key={endereco.id} value={endereco.sigla}>{endereco.sigla}</option>
          ))}
        </select>

        <select id="city" name="city" onChange={e => this.handleChangeCity(e)}>
          <option value="" selected disabled>Cidade</option>
          {this.state.cidades.map((cidade) => (
            <option key={cidade.id} value={cidade.nome}>{cidade.nome}</option>
          ))}
        </select>

        <input type="text" name="site" id="site" placeholder="Site" onChange={e => this.handleChangeSite(e)} />

        <select id="categories_id" name="categories_id">
          <option value="">Categoria</option>
          {this.state.categorias.map((categoria) => (
            <option key={categoria.id} value={categoria.name}>{categoria.name}</option>
          ))}
        </select>

        <input type="text" name="" id="" placeholder="Outras Categorias" />

        <input type="text" name="" id="" placeholder="Horário de Atendimento" />

        <input type="text" name="" id="" placeholder="Link do Instagram" />

        <input type="text" name="" id="" placeholder="Link do Facebook" />

        <textarea name="" id="" placeholder="Fale mais sobre seu negócio para gente..."></textarea>

        <button>Voltar</button>
        <button>Finalizar</button>
      </Container>
    )
  }
}
