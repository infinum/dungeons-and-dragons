import * as React from 'react';

import {SavingThrows} from 'components/Character/SavingThrows/SavingThrows';
import {SkillItem} from 'components/Character/SkillItem/SkillItem';
import {Skills} from 'components/Character/Skills/Skills';
import {Box} from 'components/Common/Box/Box';
import {ColumnList} from 'components/Common/ColumnList/ColumnList';
import {Section} from 'components/Common/Section/Section';
import {Character} from 'stores/models';
import {map} from 'utils/helpers';

import * as styles from './SkillSection.scss';

export const SkillSection = ({
  character,
}: {
  character: Character,
}) => (
  <Section className={styles.main}>
    <Box className={styles.leftColumn}>
      <Skills character={character} />
    </Box>
    <Box className={styles.rightColumn}>
      <SavingThrows character={character} />
    </Box>
  </Section>
);
