import styled from "styled-components";
import React from "react";

import LogoImage from "../src/img/logo.jpg";
const Logo = styled.li`
  width: 32px;
  margin-right: 16px;
  list-style: none;
  cursor: pointer;
`;

const LogoImg = styled.img`
  width: 32px;
  height: 32px;
`;

function Product() {
  return (
    <Logo>
      <LogoImg src={LogoImage} alt="" />
    </Logo>
  );
}

export default Product;
