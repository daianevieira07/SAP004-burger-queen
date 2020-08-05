import React, { useState } from 'react';
import Modal from 'react-modal'
import Button from 'Components/Button/button'
import './modal.css'

const MyModal = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    console.log(props)
    return (
        <div>
            <Button onClick={() => setModalIsOpen(true)} className='btn-menu'>{props.children}</Button>

            <Modal {...props} isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} className='modal-wrapper'>
                <Button onClick={() => setModalIsOpen(false)} className='btn-modal-out'>X</Button>
                <p>Escolha aqui suas opões:

                </p>
            </Modal>
        </div>
    );
};

export default MyModal;


