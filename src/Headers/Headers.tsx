import styled from "styled-components";
import { HeadersProps } from "./Headers.types";

export const H1 = styled.h1<HeadersProps>`
  margin-top: 5px;
  font-size: 26px;
`;
export const H2 = styled.h2<HeadersProps>`
  margin-top: 5px;
  font-size: 22px;
`;
export const H3 = styled.h3<HeadersProps>`
  margin-top: 10px;
  margin-bottom: 1px;
  font-size: 19px;
`;
export const H4 = styled.h4<HeadersProps>`
  margin-top: 10px;
  margin-bottom: 1px;
  font-size: 16px;
`;
