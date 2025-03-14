import React from "react";
import Modal from ".";

const MailModal = ({ isOpen, close }) => {
  return (
    <Modal isOpen={isOpen} close={close}>
      <h1>Mail Sıfırlama İşlemleri</h1>
    </Modal>
  );
};

export default MailModal;
