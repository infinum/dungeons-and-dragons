import * as React from 'react';
import {Button} from 'react-toolbox/lib/button';
import Tooltip from 'react-toolbox/lib/tooltip';

import * as styles from './CreateCharacter.scss';

const TooltipButton = Tooltip(Button);

export const CreateCharacter = ({onCreateClick}: {onCreateClick: Function}) => (
  <TooltipButton
    tooltip='Add new character'
    tooltipPosition='left'
    icon='add'
    className={styles.button}
    onClick={onCreateClick}
    floating
    accent
  />
);
