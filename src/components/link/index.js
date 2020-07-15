import React from 'react';
import { Link as BaseLink } from 'rebass';
import { Link } from "gatsby"

export const AnchorLink = (props) => (
  <BaseLink as={Link} to="/page-2/" {...props}>Go to page 2</BaseLink>
);
