import React, { useState, useEffect } from "react";
import api from "../../../services/api";
import '../styles.css';
import './styles.css';
import ModalDenounce from "../ModalDenounce";

export default function Denuncias(){

  const [pendingDenounces, setPendingDenounces] = useState([]);
  const [showModalDenouce, setShowModalDenouce] = useState({state: false, content: {}});

  useEffect(() => {
    async function loadDenounces() {
      await api.get('/??/??')
        .then(function (response) {
          console.log(response);
          setPendingDenounces(response.data);
        })
        .catch(function (error) {          
          console.log(error);
        });      
    }     
    loadDenounces();

  }, []);

  return(
    <>
      <div className="container">
        <p className="p-admin title-admin">Serviços que receberam denúncia</p>
        <p className="p-admin-small subtitle-admin">Clique no card para mais informações</p>
        {pendingDenounces.length ? null:<p className="p-admin-small no-items-alert">Não há denúncias!</p>}
        <div className="cards-service-admin">
          {pendingDenounces.map((denounce, index) => (
            <div 
              className="card-service-admin" 
              key={denounce.user_id}
              onClick={() => setShowModalDenouce({state: true, content: denounce})}>
              <p><b>Usuário:</b> {denounce.user.name}</p>
              <p><b>Descrição:</b> {denounce.description}</p>
              <p><b>Categoria:</b> {denounce.categories.name}</p>
              <p><b>Site:</b> <a href={denounce.site}>{denounce.site}</a></p>          
            </div>
          ))}
        </div>
      </div>

      <ModalDenounce
        content={showModalDenouce.content}
        isOpen={showModalDenouce.state} 
        setIsOpen={showModalDenouce} />

    </>
  );
}