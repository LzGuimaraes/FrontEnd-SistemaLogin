import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(135deg, #3a3a3a 0%, #1a1a1a 100%);
  padding: 20px;
  color: white;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background-color: rgba(32, 29, 29, 0.95);
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  margin-bottom: 30px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  h1 {
    font-size: 24px;
    font-weight: 600;
    letter-spacing: 1px;
    position: relative;
    
    &:after {
      content: '';
      display: block;
      width: 40px;
      height: 3px;
      background: linear-gradient(90deg, #6a6a6a, #9a9a9a);
      margin-top: 5px;
      border-radius: 2px;
    }
  }

  div {
    display: flex;
    gap: 10px;
  }
`;

export const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  form {
    width: 100%;
    max-width: 800px;
    background-color: rgba(32, 29, 29, 0.8);
    border-radius: 10px;
    padding: 30px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .error-message {
    color: #f44336;
    background-color: rgba(244, 67, 54, 0.1);
    padding: 10px 15px;
    border-radius: 5px;
    margin-bottom: 20px;
    width: 100%;
    max-width: 800px;
    text-align: center;
  }
`;

export const FormTitle = styled.div`
  text-align: center;
  margin-bottom: 30px;
  width: 100%;
  max-width: 800px;

  h2 {
    font-size: 28px;
    margin-bottom: 10px;
    color: #ffffff;
  }

  p {
    font-size: 16px;
    color: #e0e0e0;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;

  label {
    display: block;
    margin-bottom: 8px;
    font-size: 16px;
    color: #e0e0e0;
  }

  input {
    width: 100%;
    padding: 12px 15px;
    border-radius: 8px;
    background-color: rgba(106, 106, 106, 0.1);
    border: 2px solid #6a6a6a;
    color: white;
    font-size: 16px;
    transition: all 0.3s ease;

    &:focus {
      border-color: #9a9a9a;
      outline: none;
    }
  }
`;

export const FormActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 15px;
  margin-top: 30px;
`;

export const ActionButton = styled.button`
  background: ${props => props.secondary ? 'linear-gradient(135deg, #6a6a6a 0%, #4a4a4a 100%)' : 'linear-gradient(135deg, #4caf50 0%, #2e7d32 100%)'};
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  
  &:hover {
    background: ${props => props.secondary ? 'linear-gradient(135deg, #7a7a7a 0%, #5a5a5a 100%)' : 'linear-gradient(135deg, #66bb6a 0%, #388e3c 100%)'};
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }
  
  &:active {
    transform: scale(0.98);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }

  &:disabled {
    background: #6a6a6a;
    cursor: not-allowed;
    opacity: 0.7;
  }
`;

export const Footer = styled.footer`
  text-align: center;
  padding: 20px;
  margin-top: 30px;
  color: #9a9a9a;
  font-size: 14px;
`;