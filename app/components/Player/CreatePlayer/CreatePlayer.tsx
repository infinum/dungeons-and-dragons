import * as React from 'react';
import {Button} from 'react-toolbox/lib/button';
import Tooltip from 'react-toolbox/lib/tooltip';

import * as styles from './CreatePlayer.scss';

const TooltipButton = Tooltip(Button);

export const CreatePlayer = ({onCreateClick}: {onCreateClick: Function}) => (
  <TooltipButton
    tooltip='Add new player'
    tooltipPosition='left'
    icon='add'
    className={styles.button}
    onClick={onCreateClick}
    floating
    accent
  />
);
