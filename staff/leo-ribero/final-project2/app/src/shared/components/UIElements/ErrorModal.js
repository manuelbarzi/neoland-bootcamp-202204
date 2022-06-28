import React from 'react';

import Modal from './Modal';
import Button from '../FormElements/Button';

const ErrorModal = props => {
  return (
    <Modal
      onCancel={props.onClear}
      header="Opps!"
      // header="An Error Occurred!"
      show={!!props.error}
      footer={<Button onClick={props.onClear}> X </Button>}
    >
      <p>{props.error}</p>
    </Modal>
  );
};

export default ErrorModal;
