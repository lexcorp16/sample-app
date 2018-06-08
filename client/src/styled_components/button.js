import styled from 'styled-components';
import { colors } from './constants';

export const Button = styled.span`
  background: ${colors.mainColor2};
  border: 2px solid ${colors.mainColor2};
  border-radius: 2px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  color: #ffffff;
  display: inline-block;
  font-size: 0.9em;
  height: 2.5em;
  line-height: calc(2.5em - 4px);
  margin-top: 3em;
  min-width: 14.5em;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  width: 70%;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }

  &:active, &:hover {
    background: ${colors.mainColor2Light};
    border: 2px solid ${colors.mainColor2Light};
  }
`;
