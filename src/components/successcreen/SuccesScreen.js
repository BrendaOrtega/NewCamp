import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import Welcome from'../../assets/Welcome-pana 1.svg';
import './success.css'

const SuccesScreen = ({visible}) => {
  const [isModalVisible, setIsModalVisible] = useState(visible);

  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
        <div className={isModalVisible?"container":"container-false"}>
            <Modal title="Congratulations" visible={isModalVisible} onCancel={handleCancel} footer={<Button type="primary" onClick={handleOk} danger>Listo</Button>}  width={900}>
                <div className="congrats-card">
                    <h3>¡Felicidades!</h3>
                    <p>Ahora eres parte del Bootcamp de <strong color="#767676">Aprende microservicios con Docker.</strong></p>
                    <p className="info">El bootcamp aparecerá en tu perfil, y el calendario de clases en vivo apararecerá una semana antes de comenzar el curso. Recuerda que Iniciamos <strong>el 19 de abril.</strong></p>
                    <img src={Welcome} alt="Welcome"></img>
                </div>
            </Modal>
        </div>
    </>
  );
};

export default SuccesScreen;