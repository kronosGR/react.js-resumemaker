import React, { Children } from 'react';
import styled, { keyframes } from 'styled-components';

interface BackdropProps {
  show: boolean;
  onClick: any;
}

interface ModalWrapperProps {
  ref: any;
  show: boolean;
}

type ModalProps = {
  modal: any;
  show: boolean;
  onClose: any;
  children: any;
};

const zoom = keyframes`
  from {transform: scale(0) translate(-50%, -50%)}
  to {
    transform:scale(1) translate(-50%,-50%);
  }
`;

export const Backdrop = styled.div<BackdropProps>`
  position: fixed;
  z-index: 1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: ${(p) => (p.show ? 'block' : 'none')};
  background: rgba(0, 0, 0, 0.2);
`;

export const ModalWrapper = styled.div<ModalWrapperProps>`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 2;
  transform: translate(-50%, -50%);
  transform-origin: left top;
  max-width: 100%;
  height: auto;
  display: ${(p) => (p.show ? 'block' : 'none')};
  animation: ${zoom} 0.2s;
`;

export default function Modal({ modal, show, onClose, children }: ModalProps) {
  return (
    <>
      <Backdrop show={show} onClick={onClose} />
      <ModalWrapper ref={modal} show={show}>
        {children}
      </ModalWrapper>
    </>
  );
}
