import * as React from 'react';
import {ThemeProvider} from 'react-css-themr';

// import * as RTButton from 'components/Toolbox/Button.scss';

const theme = {
  // RTButton,
};

class ThemeProviderWrapper extends React.Component<{
  children?: JSX.Element, // https://github.com/Microsoft/TypeScript/issues/6471
}, {}> {
  public render() {
    const {children} = this.props;
    return (
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    );
  }
}

export default ThemeProviderWrapper;
