import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export default Layout;