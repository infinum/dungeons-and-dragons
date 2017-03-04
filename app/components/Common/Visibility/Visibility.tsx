import * as React from 'react';

export const Visibility = ({
  isVisible,
  children,
}: {
  isVisible: boolean|number|string,
  children?: JSX.Element,
}) => isVisible ? React.Children.only(children) : null;
