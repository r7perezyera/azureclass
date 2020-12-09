import React from 'react';
import { Router } from '@reach/router';

import { AboutMe } from '../pages/about_me';

export const Routes = () => {
  return (
    <Router>
      <AboutMe path="/" />
    </Router>
  );
};
