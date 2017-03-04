import * as React from 'react';

import {StatItem} from 'components/Character/StatItem/StatItem';
import {InfoBox} from 'components/Common/InfoBox/InfoBox';
import {Section} from 'components/Common/Section/Section';
import {Character} from 'stores/models';

import * as styles from './StatsSection.scss';

export const StatsSection = ({
  character,
  onChange,
}: {
  character: Character,
  onChange: (stat: string) => any,
}) => (
  <Section>
    <div className={styles.stats}>
      <StatItem
        character={character}
        id='strength'
        name='Strength'
        onChange={onChange}
      />
      <StatItem
        character={character}
        id='dexterity'
        name='Dexterity'
        onChange={onChange}
      />
      <StatItem
        character={character}
        id='constitution'
        name='Constitution'
        onChange={onChange}
      />
      <StatItem
        character={character}
        id='intelligence'
        name='Intelligence'
        onChange={onChange}
      />
      <StatItem
        character={character}
        id='wisdom'
        name='Wisdom'
        onChange={onChange}
      />
      <StatItem
        character={character}
        id='charisma'
        name='Charisma'
        onChange={onChange}
      />
      <InfoBox className={styles.passiveBox} value={character.passivePerception} name='Passive per.' />
    </div>
  </Section>
);
