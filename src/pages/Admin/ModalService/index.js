import React from 'react';
import Modal from 'react-modal';
import api from '../../../services/api'; 
import './styles.css';


export default function ModalService({content, isOpen, setIsOpen}){

  console.log('content', content);

  async function handlePendingService(serviceId, status){
    const body = { id: serviceId , aproved: status };

    await api.patch('/services/valid', body)
      .then(function (response) {            
        alert(response.statusText);             
        console.log(response);
      })
      .catch(function (error) {                          
        alert(error);
        console.log(error);
      });           
    
    setIsOpen({state: false, content: {}});
  }

  return(
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setIsOpen({state: false, content: {}})}
      shouldCloseOnOverlayClick={true}
      ariaHideApp={false}
      className="modal-service-content"
      overlayClassName="modal-service-overlay"
    >
      <div className="modal-service-container">
        <div className="modal-service-admin">
          <h1>Usuário</h1>
          <hr />
          <p><b>Nome:</b> {content.user === undefined ? 'n/a' : content.user.name}</p>    
          <p><b>Cidade:</b> {content.user === undefined ? 'n/a' : content.user.city} </p>      
          <p><b>Telefone:</b> {content.user === undefined ? 'n/a' : content.user.celphone} <b>WhatsApp:</b> {content.user === undefined ? 'n/a' : (content.user.iswhats ? 'sim' : 'não')}</p>       
          <br /><br />
          <h1>Serviço</h1>
          <hr />
          <p><b>Descrição:</b> {content === undefined ? 'n/a' : content.description} </p> 
          <p><b>Categoria:</b> {content.categories === undefined ? 'n/a' : content.categories.name} </p> 
          <p><b>Cidade:</b> {content === undefined ? 'n/a' : content.city} </p>
          <p><b>Telefone:</b> {content === undefined ? 'n/a' : content.phone} <b>WhatsApp:</b> {content === undefined ? 'n/a' : (content.iswhats ? 'sim' : 'não')}</p>       
        </div>

        <div className="modal-service-buttons">
          <button 
            className="modal-service-button-approve" 
            onClick={() => handlePendingService((content === undefined ? '' : content.id), 'S')}>
              Aprovar
          </button>
          <button 
            className="modal-service-button-reject" 
            onClick={() => handlePendingService((content === undefined ? '' : content.id), 'R')}>
              Reprovar
          </button>
          <button className="modal-service-button-cancel">
              Cancelar
          </button>          
        </div>
      </div>
    </Modal>
  );
}