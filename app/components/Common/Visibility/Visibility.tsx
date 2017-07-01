import * as React from 'react';

export const Visibility = ({
  isVisible,
  children,
}: {
  isVisible: boolean|number|string,
  children?: any,
}) => isVisible ? React.Children.only(children) : null;
