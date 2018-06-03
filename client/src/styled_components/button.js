import styled from 'styled-components';
import { colors } from './constants';

export const Button = styled.span`
  background: ${colors.mainColor};
  border: 2px solid ${colors.mainColor};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  color: #ffffff;
  display: inline-block;
  font-size: 0.8em;
  height: 2em;
  line-height: calc(2em - 4px);
  margin-top: 3em;
  min-width: 14.5em;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }

  &:active, &:hover {
    background: #5868c8;
    border: 2px solid #5868c8;
  }
`;
