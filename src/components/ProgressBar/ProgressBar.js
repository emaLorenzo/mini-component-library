/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  large: {
    '--height': 24 + 'px',
    '--padding': 4 + 'px',
    '--border-radius': 8 + 'px',
  },
  medium: {
    '--height': 12 + 'px',
    '--padding': 0,
    '--border-radius': 4 + 'px',
  },
  small: {
    '--height': 8 + 'px',
    '--padding': 0,
    '--border-radius': 4 + 'px',
  }
}

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];

  return (
    <Wrapper
      role='progressbar'
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      style={styles}
    >
      <VisuallyHidden>{value}%</VisuallyHidden>

      <Trimmer>
        <Bar width={value} />
      </Trimmer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: var(--height);
  padding: var(--padding);
  border-radius: var(--border-radius);
  background-color: ${COLORS.gray50};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`

const Trimmer = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 4px;
  overflow: hidden;
`

const Bar = styled.div`
  width: ${p => p.width}%;
  height: 100%;
  border-radius: 4px 0 0 4px;
  background-color: ${COLORS.primary};
`;


export default ProgressBar;
