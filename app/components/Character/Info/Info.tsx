import * as classnames from 'classnames';
import {observer} from 'mobx-react';
import * as React from 'react';

import {InfoBox} from 'components/Common/InfoBox/InfoBox';
import {Character} from 'stores/models';

import * as styles from './Info.scss';

export const Info = observer(({
  character,
  className,
}: {
  character: Character,
  className?: string,
}) => (
  <div className={classnames(className, styles.main)}>
    <InfoBox name='Speed' value={character.race && character.race.speed} />
  </div>
));
