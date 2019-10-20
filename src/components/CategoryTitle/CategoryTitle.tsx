import * as React from 'react';
import './CategoryTitle.scss';

export const CategoryTitle: React.FC<{'data-testid': string}> = ({...props}) => (
  <h3 className="CategoryTitle" {...props}/>
);

CategoryTitle.displayName = 'CategoryTitle';
