import * as React from 'react';
import './Commment.scss';

export const Commment: React.FC<{}> = ({children}) => (
  <div className="Commment">
    <p>{children}</p>
  </div>
);

Commment.displayName = 'Commment';
