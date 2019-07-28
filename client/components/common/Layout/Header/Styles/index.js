import styled from "styled-components";

export const Header = styled.header`
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  max-width: 90vw;
  margin: 0 auto;
  padding: 1em 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Brand = styled.h1`
  font-size: var(--step-up-1);
`;
export const Menu = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 50vw;
`;
export const MenuLink = styled.li`
  margin-left: 2em;
  text-decoration: none;
`;
