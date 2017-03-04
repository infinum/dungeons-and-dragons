import * as React from 'react';

import {Basics} from 'components/Character/Basics/Basics';
import {Bonuses} from 'components/Character/Bonuses/Bonuses';
import {Header} from 'components/Character/Header/Header';
import {Info} from 'components/Character/Info/Info';
import {Box} from 'components/Common/Box/Box';
import {IBasics} from 'interfaces';
import {Character} from 'stores/models';

import * as styles from './BasicInfoSection.scss';

export const BasicInfoSection = ({
  options,
  character,
}: {
  options: IBasics,
  character: Character;
}) => (
  <section>
    <Header character={character} className={styles.header} />

    <div className={styles.columns}>
      <div className={styles.leftForm}>
        <Box>
          <Basics character={character} options={options} />
        </Box>
        <Box className={styles.proficiency}>
          <Bonuses character={character} />
        </Box>
      </div>
      <Info className={styles.rightForm} character={character} />
    </div>
  </section>
);
