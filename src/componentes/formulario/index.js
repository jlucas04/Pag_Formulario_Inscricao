import './estilo.css';
import React, { useState } from 'react';
import imagem from "../../images/logo_fundepes1.png"


const FormularioInscricao = () => {
    const [nomeCompleto, setNomeCompleto] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cargo, setCargo] = useState('');    
    const [arquivo, setArquivo] = useState(null);
    const [mensagem, setMensagem] = useState('');
  
    const handleNomeChange = (event) => {
      setNomeCompleto(event.target.value);
    };
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
    const handleTelefoneChange = (event) =>{
        setTelefone(event.target.value);
    }
    const handleCargoChange = (event) => {
        setCargo(event.target.value);
      };
  
    const handleArquivoChange = (event) => {
      // Verifica se o arquivo é do tipo PDF
      const file = event.target.files[0];
      if (file && file.type === 'application/pdf') {
        setArquivo(file);
      } else {
        alert('Por favor, selecione um arquivo PDF.');
      }
    };
    const handleMensagemChange = (event) => {
      setMensagem(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Lógica para enviar os dados do formulário
      console.log('Nome Completo:', nomeCompleto);
      console.log('Email:', email);
      console.log('Telefone: ', telefone);
      console.log('Cargo Pretendido', cargo);
      console.log('Arquivo:', arquivo);
      console.log('Mensagem:', mensagem)
      // Adicione aqui a lógica para enviar os dados para o servidor, se necessário
    };
  
    return (
      <div style={{
          fontFamily: 'Dosis',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("seu-caminho-da-imagem.jpg") center/cover no-repeat',
          color: 'black'
      }}>
          <div style={{ width: '80%', backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', display: 'flex' }}>
              <div style={{ width: '50%', marginRight: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <h2 style={{ textAlign: 'center', marginBottom: '30px', fontSize:'35px' }}>Trabalhe Conosco</h2>
                  <div style={{ width: '100%', height: '400px', backgroundColor: '#ddd', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                    <img src={imagem} alt="Imagem" style={{ width: '300px', height: '100px', objectFit: 'cover', borderRadius: '50%' }} />
                  </div>
              </div>
              <form onSubmit={handleSubmit} style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
                  <label style={{ marginBottom: '10px' }}>Nome Completo:</label>
                  <input type="text" value={nomeCompleto} onChange={handleNomeChange} required style={{ marginBottom: '15px', padding: '10px', boxSizing: 'border-box', width: '100%', border: 'none', borderBottom: '2px solid rgb(72, 124, 219)' }} />

                  <label style={{ marginBottom: '10px' }}>Email:</label>
                  <input type="email" value={email} onChange={handleEmailChange} required style={{ marginBottom: '15px', padding: '10px', boxSizing: 'border-box', width: '100%', border: 'none', borderBottom: '2px solid rgb(72, 124, 219)' }} />

                  <label style={{ marginBottom: '10px' }}>Telefone:</label>
                  <input type='text' value={telefone} onChange={handleTelefoneChange} required style={{ marginBottom: '15px', padding: '10px', boxSizing: 'border-box', width: '100%', border: 'none', borderBottom: '2px solid rgb(72, 124, 219)' }} />

                  <label style={{ marginBottom: '10px' }}>Cargo Pretendido:</label>
                  <input type="text" value={cargo} onChange={handleCargoChange} required style={{ marginBottom: '15px', padding: '10px', boxSizing: 'border-box', width: '100%', border: 'none', borderBottom: '2px solid rgb(72, 124, 219)' }} />

                  <label style={{ marginBottom: '10px' }}>Anexar arquivo (PDF):</label>
                  <input type="file" accept=".pdf" onChange={handleArquivoChange} required style={{ marginBottom: '15px', padding: '10px', boxSizing: 'border-box', width: '100%', border: 'none', borderBottom: '2px solid rgb(72, 124, 219)' }} />

                  <label style={{ marginBottom: '10px' }}>Mensagem:</label>
                  <textarea className='textarea' rows="5" value={mensagem} onChange={handleMensagemChange} style={{ marginBottom: '15px', padding: '10px', boxSizing: 'border-box', width: '100%', resize: 'vertical', border: 'none', borderBottom: '2px solid rgb(72, 124, 219)', resize:'none' }}></textarea>

                  <button type="submit" style={{ backgroundColor: '#4caf50', color: 'white', padding: '10px', borderRadius: '5px', cursor: 'pointer', alignSelf: 'flex-end' }}>Enviar</button>
              </form>
          </div>
      </div>
  );
  };
  
  export default FormularioInscricao;
