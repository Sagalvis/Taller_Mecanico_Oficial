import styled from 'styled-components';

function ThisModal({children, status, changeStatus, title}) {
  return (
    <>
    {status &&
    <Overlay>
      <ModalContain>
        <HeaderModal>
          <h2>{title}</h2>
        </HeaderModal>
        <CloseButton onClick={() => changeStatus(false)}>X</CloseButton>
        {children}
      </ModalContain>
    </Overlay>
    }
    </>
  )
}

export default ThisModal;


export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContain = styled.div`
  width: 500px;
  min-height: 100px;
  position: relative;
  background: #fff;
  border-radius: 5px;
  box-shadow: rgba(100,100,111,0.2) 0px 7px 29px 0px;
  padding: 20px;
`;

export const HeaderModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e8e8e8;

  h2 {
    font-weight: 400;
    font-size: 1.7rem;
    color: #222;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 30px;
  height: 30px;
  font-size: 1.1rem;
  border: none;
  background: none;
  cursor: pointer;
  transition: all.3s ease all;
  border-radius: 5px;
  color: #222;

  &:hover {
    background: #f2f2f2;
  }
`;