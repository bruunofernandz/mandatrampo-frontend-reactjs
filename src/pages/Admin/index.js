import React from 'react';
import { Link } from "react-router-dom";
import './styles.css';

export default function Admin() {
  return (
    <div className="container">
      <p className="p-admin">MandaTrampo Admin</p>
      <p className="p-admin-small">Be carefull.</p>
      <Link to="/admin/autorizacoes">
        <button className="button-admin" style={{marginTop: '15vh'}}>Autorizações</button>     
      </Link>
      <Link to="/admin/denuncias">
        <button className="button-admin" style={{marginTop: '5vh'}}>Denúncias</button>     
      </Link>
    </div>
  );
}