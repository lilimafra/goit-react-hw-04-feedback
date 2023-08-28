import React from 'react';
import PropTypes from 'prop-types'; // ES6
import { SectionBox, Title } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionBox>
      <Title>{title}</Title>
      {children}
    </SectionBox>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
