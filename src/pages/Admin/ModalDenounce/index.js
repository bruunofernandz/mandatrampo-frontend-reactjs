import React from 'react';
import Modal from 'react-modal';
import api from '../../../services/api'; 
import './styles.css';


export default function ModalDenounce({content, isOpen, setIsOpen}){

  console.log('content', content);

  async function handleDenounce(serviceId, status){
    const body = { id: serviceId , aproved: status };

    await api.patch('/denounces/valid', body)
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
      className="modal-denounce-content"
      overlayClassName="modal-denounce-overlay"
    >
      <div className="modal-denounce-container">
        <div className="modal-denounce-admin">
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

        <div className="modal-denounce-buttons">
          <button 
            className="modal-denounce-button-approve" 
            onClick={() => handleDenounce((content === undefined ? '' : content.id), 'I')}>
              Aceitar denúncia
          </button>
          <button 
            className="modal-denounce-button-reject" 
            onClick={() => handleDenounce((content === undefined ? '' : content.id), 'S')}>
              Rejeitar denúncia
          </button>
          <button className="modal-denounce-button-cancel">
              Cancelar
          </button>          
        </div>
      </div>
    </Modal>
  );
}