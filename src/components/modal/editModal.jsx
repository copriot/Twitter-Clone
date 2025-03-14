import React from "react";
import Modal from ".";

const EditModal = ({ isOpen, close }) => {
  return (
    <Modal isOpen={isOpen} close={close}>
      <h1>Düzenleme İşlemleri</h1>
    </Modal>
  );
};

export default EditModal;
