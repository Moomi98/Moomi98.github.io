import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 70px;
  background-color: black;
  position: fixed;
  top: 0;
  z-index: 10;
`;

const HeaderLayout = styled.div`
  width: 75%;
  height: 100%;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
`;

const MenuLayout = styled.li`
  height: 100%;
  display: flex;
  gap: 15px;
  justify-content: flex-start;
  align-items: center;
`;

const Menu = styled.ul`
  font-size: 18px;
  font-weight: 600;
  color: white;
  cursor: pointer;
`;

const Logo = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: white;
  letter-spacing: 1.9px;
  text-align: center;
`;

const Header = ({ scrollFunction }) => {
  const menuList = ["Home", "About", "Skills", "Resume", "Projects"];

  return (
    <Container>
      <HeaderLayout>
        <Logo>김정현</Logo>
        <MenuLayout>
          {menuList.map((menu, index) => (
            <Menu onClick={scrollFunction[index]}>{menu}</Menu>
          ))}
        </MenuLayout>
      </HeaderLayout>
    </Container>
  );
};

export default Header;
