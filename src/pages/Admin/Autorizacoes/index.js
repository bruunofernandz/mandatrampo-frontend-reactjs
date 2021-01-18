import React, { useState, useEffect } from "react";
import api from "../../../services/api";
import '../styles.css';
import './styles.css';
import ModalService from "../ModalService";

export default function Autorizacoes(){

  const [pendingServices, setPendingServices] = useState([]);
  const [showModalService, setShowModalService] = useState({state: false, content: {}});

  useEffect(() => {
    async function loadServices() {
      await api.get('/services/N/status')
        .then(function (response) {
          console.log(response);
          setPendingServices(response.data);
          console.log(pendingServices.length);
        })
        .catch(function (error) {          
          console.log(error);
        });      
    }     
    loadServices();

  }, []);

  return(
    <>
      <div className="container">
        <p className="p-admin title-admin">Serviços pendentes de autorização</p>
        <p className="p-admin-small subtitle-admin">Clique no card para mais informações</p>
        {pendingServices.length ? null:<p className="p-admin-small no-items-alert">Não há serviços para serem autorizados!</p>}
        <div className="cards-service-admin">
          {pendingServices.map((service, index) => (
            <div 
              className="card-service-admin" 
              key={service.user_id}
              onClick={() => setShowModalService({state: true, content: service})}>
              <p><b>Usuário:</b> {service.user.name}</p>
              <p><b>Descrição:</b> {service.description}</p>
              <p><b>Categoria:</b> {service.categories.name}</p>
              <p><b>Site:</b> <a href={service.site}>{service.site}</a></p>          
            </div>
          ))}
        </div>
      </div>

      <ModalService 
        content={showModalService.content}
        isOpen={showModalService.state} 
        setIsOpen={setShowModalService} />

    </>
  );
}