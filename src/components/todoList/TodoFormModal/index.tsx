import React, { useState } from "react";
import styled from "@emotion/styled";
import Modal from "../modal";

const ModalBody = styled.div`
  width: 100vw;
  max-width: 386px;
  padding: 8px;
`;

const Date = styled.small`
  display: block;
  color: #c9c8cc;
`;

const InputTodo = styled.div`
  padding: 16px 24px;
  border: none;
  width: 100%;
  box-sizing: border-box;
  background-color: transparent;
  color: #c9c8cc;
  caret-color: #c9c8cc; //커서 색상만 변경 하는 것
`;

const Card = styled.div`
  width: 100%;
  max-width: 370px;
  border-radius: 16px;
  box-shadow: 0px 1px 3px 0 rgba(0, 0, 0, 0.1);
  padding: 24px;
  box-sizing: border-box;
  background-color: #19181a;
  ${Date} + ${InputTodo} {
    margin-top: 24px;
  }
`;

const TodoFormModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClose = () => setIsOpen(false);

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <ModalBody>
        <Card>
          <Date>2021-09-12</Date>
          <InputTodo placeholder="새로운 이벤트"></InputTodo>
        </Card>
      </ModalBody>
    </Modal>
  );
};

export default TodoFormModal;
