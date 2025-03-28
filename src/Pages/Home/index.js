import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  HomeContainer, 
  Header, 
  MainContent, 
  WelcomeCard, 
  DashboardGrid, 
  DashboardCard, 
  LogoutButton,
  Footer 
} from './style';
import UserService from '../../Services/UserServices';

const userService = new UserService();

const Home = () => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    userService.logout();
    navigate('/');
  };

  return (
    <HomeContainer>
      <Header>
        <h1>Sistema de Login</h1>
        <LogoutButton onClick={handleLogout}>Sair</LogoutButton>
      </Header>
      
      <MainContent>
        <WelcomeCard>
          <h2>Bem-vindo ao Sistema</h2>
          <p>Você está logado com sucesso! Este é seu painel de controle personalizado onde você pode gerenciar suas informações e acessar os recursos do sistema.</p>
        </WelcomeCard>
        
        <DashboardGrid>
          <DashboardCard>
            <h3>Perfil</h3>
            <p>Gerencie suas informações pessoais e configurações de conta</p>
          </DashboardCard>
          
          <DashboardCard>
            <h3>Mensagens</h3>
            <p>Veja suas notificações e mensagens recentes</p>
          </DashboardCard>
          
          <DashboardCard>
            <h3>Atividades</h3>
            <p>Acompanhe suas atividades recentes no sistema</p>
          </DashboardCard>
          
          <DashboardCard>
            <h3>Configurações</h3>
            <p>Personalize as configurações do seu painel</p>
          </DashboardCard>
          
          <DashboardCard onClick={() => navigate('/estoque')} style={{ cursor: 'pointer' }}>
            <h3>Estoque</h3>
            <p>Gerencie o inventário de produtos do sistema</p>
          </DashboardCard>
        </DashboardGrid>
      </MainContent>
      
      <Footer>
        &copy; {new Date().getFullYear()} Sistema de Login - Todos os direitos reservados
      </Footer>
    </HomeContainer>
  );
};

export default Home;