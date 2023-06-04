import React from 'react';
import { Modal , Button } from 'antd';
import './Modal.scss'

const ModalComponent = ({modalOpen , setModalOpen, sendStatus , setStatus , status}) => {

  return (
    <>
      <Modal
        title="Create a Post"
        centered
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        footer={[
            <Button 
            onClick={sendStatus}
            key="submit"
            type="primary" 
            disabled={status.length > 0 ? false : true}>
              Post
            </Button>,
          ]}
      >
        <input 
            className='modalInput'
            type="text"
            placeholder="Here you can write your post"
            onChange={(e) => setStatus(e.target.value)}
            value={status}
        />
      </Modal>
    </>
  );
};

export default ModalComponent;
