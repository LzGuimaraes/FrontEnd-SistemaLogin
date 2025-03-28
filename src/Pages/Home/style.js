import styled from "styled-components";

export const HomeContainer = styled.div`
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

export const WelcomeCard = styled.div`
  background-color: rgba(32, 29, 29, 0.95);
  border-radius: 10px;
  padding: 30px;
  width: 100%;
  max-width: 800px;
  margin-bottom: 30px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.6);
  }

  h2 {
    font-size: 28px;
    margin-bottom: 15px;
    color: #ffffff;
  }

  p {
    font-size: 16px;
    line-height: 1.6;
    color: #e0e0e0;
    margin-bottom: 20px;
  }
`;

export const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 800px;
`;

export const DashboardCard = styled.div`
  background-color: rgba(32, 29, 29, 0.95);
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
    background-color: rgba(42, 39, 39, 0.95);
  }

  h3 {
    font-size: 18px;
    margin-bottom: 10px;
    color: #ffffff;
  }

  p {
    font-size: 14px;
    color: #e0e0e0;
    margin-bottom: 15px;
  }
`;

export const LogoutButton = styled.button`
  background: linear-gradient(135deg, #6a6a6a 0%, #4a4a4a 100%);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transition: all 0.5s ease;
  }
  
  &:hover {
    background: linear-gradient(135deg, #7a7a7a 0%, #5a5a5a 100%);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
    
    &:before {
      left: 100%;
    }
  }
  
  &:active {
    transform: scale(0.98);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }
`;

export const Footer = styled.footer`
  text-align: center;
  padding: 20px;
  margin-top: 30px;
  color: #9a9a9a;
  font-size: 14px;
`;