import * as React from 'react';
import type { FC } from 'react';

import { useFrameClasses, useStoryStyles } from './frame.styles';

type FrameProps = { theme: 'light' | 'dark' };
export const Frame: FC<FrameProps> = ({ children, theme }) => {
  useStoryStyles();
  const classes = useFrameClasses();
  return (
    <div className={classes.provider}>
      <div className={classes.root}>{children}</div>
    </div>
  );
};
