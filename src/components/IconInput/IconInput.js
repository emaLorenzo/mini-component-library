import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const sizes = {
  small: {
    size: 16,
    fontSize: 14
  },
  large: {
    size: 24,
    fontSize: 18
  }
}

const IconInput = ({
  label,
  icon,
  width,
  size,
  placeholder,
  ...delegated
}) => {
  const styles = sizes[size];

  return (
    <Wrapper style={{ '--width': width ? width + 'px' : 'auto' }}>
      <VisuallyHidden>
        {label}
      </VisuallyHidden>
      <Icon id={icon} size={styles.size} />
      <Input
        style={{
          '--size': styles.size + 'px',
          '--font-size': (styles.fontSize/16) +'rem'
        }}
        placeholder={placeholder} 
        {...delegated}
      />
    </Wrapper>
  );
};

const Input = styled.input`
  width: calc(100% - var(--size));
  border: none;
  outline: none;
  font-family: Roboto, sans-serif;
  font-weight: 700;
  font-size: var(--font-size);
  padding-left: 8px;
  vertical-align: middle;
  color: inherit;

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`

const Wrapper = styled.label`
  width: var(--width);
  display: block;
  border-bottom: 1px solid ${COLORS.black};
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
    border-bottom-width: 2px;
  }

  &:focus-within {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
    outline-offset: 2px;
  }
`

export default IconInput;
