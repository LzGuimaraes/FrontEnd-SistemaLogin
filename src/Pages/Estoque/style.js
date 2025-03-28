import styled from 'styled-components';

export const EstoqueContainer = styled.div`
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
`;

export const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const TitleSection = styled.div`
  text-align: center;
  margin-bottom: 30px;
  width: 100%;
  max-width: 1000px;

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

export const TableContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  overflow-x: auto;
  background-color: rgba(32, 29, 29, 0.8);
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 20px;
`;

export const ProductTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  th, td {
    padding: 15px;
    text-align: left;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  th {
    background-color: rgba(42, 39, 39, 0.9);
    color: #ffffff;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 14px;
    letter-spacing: 1px;
  }
  
  tr:hover {
    background-color: rgba(42, 39, 39, 0.7);
  }
  
  td {
    color: #e0e0e0;
    font-size: 14px;
  }
`;

export const ActionButton = styled.button`
  background: ${props => props.danger ? 'linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%)' : 'linear-gradient(135deg, #6a6a6a 0%, #4a4a4a 100%)'};
  color: white;
  border: none;
  padding: ${props => props.small ? '6px 12px' : '10px 20px'};
  border-radius: 6px;
  font-size: ${props => props.small ? '12px' : '14px'};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin: ${props => props.small ? '0 5px' : '0'};
  
  &:hover {
    background: ${props => props.danger ? 'linear-gradient(135deg, #ef5350 0%, #c62828 100%)' : 'linear-gradient(135deg, #7a7a7a 0%, #5a5a5a 100%)'};
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }
  
  &:active {
    transform: scale(0.98);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }
`;

export const AddButton = styled.button`
  background: linear-gradient(135deg, #4caf50 0%, #2e7d32 100%);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
  align-self: flex-end;
  
  &:hover {
    background: linear-gradient(135deg, #66bb6a 0%, #388e3c 100%);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }
  
  &:active {
    transform: scale(0.98);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }
`;

export const SearchBar = styled.input`
  width: 100%;
  max-width: 1000px;
  padding: 12px 20px;
  margin-bottom: 20px;
  border-radius: 8px;
  border: 2px solid rgba(255, 255, 255, 0.1);
  background-color: rgba(32, 29, 29, 0.8);
  color: white;
  font-size: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #6a6a6a;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }
  
  &::placeholder {
    color: #9a9a9a;
  }
`;

export const EmptyMessage = styled.div`
  text-align: center;
  padding: 40px;
  background-color: rgba(32, 29, 29, 0.8);
  border-radius: 10px;
  width: 100%;
  max-width: 1000px;
  margin-top: 20px;
  color: #e0e0e0;
  font-size: 18px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

export const Footer = styled.footer`
  text-align: center;
  padding: 20px;
  margin-top: 30px;
  color: #9a9a9a;
  font-size: 14px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
`;