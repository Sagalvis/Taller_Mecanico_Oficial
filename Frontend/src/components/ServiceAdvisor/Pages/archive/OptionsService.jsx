import { useState } from 'react';
import styled from 'styled-components';

const InputAdd = () => {
  const [inputs, setInputs] = useState(['']);

  const addInput = () => {
    setInputs([...inputs, '']);
  };

  const removeInput = (index) => {
    setInputs(inputs.filter((_, i) => i !== index));
  };

  const handleInputChange = (index, value) => {
    setInputs(inputs.map((input, i) => (i === index ? value : input)));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Manejar el envío del formulario aquí
  };

  return (
    <Form onSubmit={handleSubmit}>
      {inputs.map((input, index) => (
        <ContainInputAdd key={index}>
          <Input
            type="text"
            value={input}
            onChange={(e) => handleInputChange(index, e.target.value)}
            placeholder={`Producto ${index + 1}`}
          />
          {index > 0 && (
            <Button style={{marginLeft:"10px"}} type="button" onClick={() => removeInput(index)}>
              <i className="fa-solid fa-trash"></i>
            </Button>
          )}
        </ContainInputAdd>
      ))}
      <Button type="button" onClick={addInput}>
      <i className="fa-solid fa-plus"></i>
      </Button>
      
    </Form>
  );
};

export default InputAdd;

const ContainInputAdd = styled.div`
  
`

const Form = styled.form`
    
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: .5rem;
`

const Input = styled.input`
  width: 80%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  background-color: #fff;
  color: #222;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.301);
  transition: box-shadow 0.3s ease;
  &:focus {
    outline: none;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
  &::placeholder {
    color: #999;
    font-family: "Outfit", sans-serif;
    font-size: 0.9rem;
  }
`

const Button = styled.button`
  width: 40px;
  border-radius: 4px;
  background-color: #000000;
  color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.301);
  cursor: pointer;
`