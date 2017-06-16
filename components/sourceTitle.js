import React, { PropTypes } from 'react';
import titleMap from './titleMap';

export default function SourceTitle({ source }) {
   const title = titleMap[source];
   return (
     <h2>{title}</h2>
   );
}

SourceTitle.propTypes = {
  source: PropTypes.string,
};

SourceTitle.defaultProps = {
 source: '',
};
