import * as React from 'react';
import {ThemeProvider} from 'react-css-themr';

import * as RTCard from 'components/Toolbox/Card.scss';
import * as RTDialog from 'components/Toolbox/Dialog.scss';
import * as RTDropdown from 'components/Toolbox/Dropdown.scss';
import * as RTInput from 'components/Toolbox/Input.scss';
import * as RTProgressBar from 'components/Toolbox/ProgressBar.scss';
import * as RTTooltip from 'components/Toolbox/Tooltip.scss';

const theme = {
  RTCard,
  RTDialog,
  RTDropdown,
  RTInput,
  RTProgressBar,
  RTTooltip,
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
