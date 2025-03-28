import styled from "styled-components";

export const Container = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #3a3a3a 0%, #1a1a1a 100%);
  overflow: auto;
  padding: 20px;
`
export const Form = styled.form`
  display: flex;
  padding: 3rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(32, 29, 29, 0.95);
  border-radius: 10px;
  width: 100%;
  max-width: 450px;
  gap: 30px 0px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  h1 {
    color: white;
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 10px;
    text-align: center;
    letter-spacing: 1px;
    position: relative;
    
    &:after {
      content: '';
      display: block;
      width: 50px;
      height: 3px;
      background: linear-gradient(90deg, #6a6a6a, #9a9a9a);
      margin: 8px auto 0;
      border-radius: 2px;
    }
  }

  p {
    color: #e0e0e0;
    font-size: 16px;
    font-weight: 500;
  }

  a {
    color: #9a9a9a;
    font-size: 16px;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;
    
    &:hover {
      color: #ffffff;
      text-decoration: underline;
    }
  }
`

export const SubcontainerSign = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0px 20px;
  align-items: center;
  margin-top: 10px;
  padding: 15px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  width: 100%;
  justify-content: center;
`

export const ErrorMessage = styled.div`
  color: #ff6b6b;
  font-size: 14px;
  margin-bottom: 10px;
  background-color: rgba(255, 107, 107, 0.1);
  padding: 12px;
  border-radius: 8px;
  width: 100%;
  text-align: center;
  border-left: 3px solid #ff6b6b;
  animation: fadeIn 0.3s ease;
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`