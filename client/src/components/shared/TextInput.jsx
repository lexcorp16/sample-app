import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// =====================================
// STYLED COMPONENTS
// =====================================

const Input = styled.input`
  border: 1px solid #dddddd;
  border-radius: 10px;
  font-size: 0.9em;
  height: 35px;
  margin: 5px 1px 5px 0px;
  outline: none;
  padding: 3px 10px 3px 10px;
  width: 300px;

  &:focus {
    border: 1px solid rgba(63, 81, 181, 0.8);
    box-shadow: 0 0 10px rgba(63, 81, 181, 0.8);
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.2em;
`;
// ========================================

const TextInput = props => {
  return (
    <Wrapper>
      <label>{props.label}</label>
      <Input
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        name={props.name}
        accept={props.fileType}
        disabled={props.disabled}
        autoFocus={props.autoFocus}
      />
    </Wrapper>
  );
};

TextInput.prototype = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default TextInput;

