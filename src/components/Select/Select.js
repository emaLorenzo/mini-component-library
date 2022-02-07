import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);
  const selectRef = React.useRef(null)

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange} ref={selectRef}>
        {children}
      </NativeSelect>

      <CustomSelect>
        <SelectText>{displayedValue}</SelectText>
        <Icon id="chevron-down" size={20} strokeWidth={2} />
      </CustomSelect>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  max-width: max-content;
`

const NativeSelect = styled.select`
  position: absolute;
  inset: 0;
  width: 100%;
  opacity: 0;
  -webkit-appearance: none;
`

const CustomSelect = styled.div`
  border: none;
  color: ${COLORS.gray700};
  padding: 12px 16px;
  border-radius: 8px;
  background-color: ${COLORS.transparentGray15};

  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${NativeSelect}:hover + & {
    color: black;
  }
`

const SelectText = styled.p`
  display: inline-block;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 1rem;
  margin-right: 16px;
`

export default Select;
