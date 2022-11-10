import React from 'react';

import './Table.scss';

export const Table: React.FC = (props) => {
  const { children } = props;
  return <table className="flex-table flex-fixhead-table">{children}</table>;
};
