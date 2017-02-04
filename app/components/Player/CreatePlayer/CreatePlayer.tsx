import * as React from 'react';
import {Button} from 'react-toolbox/lib/button';

export const CreatePlayer = ({onCreateClick}: {onCreateClick: Function}) => (
  <Button label='Create player' onClick={onCreateClick} />
);
