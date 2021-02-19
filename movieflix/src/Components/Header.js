import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Head = styled.header`
  color: white;
  position: fixed;
  top 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: rgba(20, 20, 20, 0.8);
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  width: 50px;
  text-align: center;
  border-bottom: 5px solid
    ${(props) => (props.current ? "#3498db" : "transparent")};
`;

const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Header = ({ location: { pathname } }) => {
  return (
    <Head>
      <List>
        <Item current={pathname === "/"}>
          <SLink to="/">Movies</SLink>
        </Item>
        <Item current={pathname === "/tv"}>
          <SLink to="/tv">TV</SLink>
        </Item>
        <Item current={pathname === "/search"}>
          <SLink to="/search">Search</SLink>
        </Item>
      </List>
    </Head>
  );
};

export default withRouter(Header);
