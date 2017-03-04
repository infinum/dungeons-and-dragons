import * as React from 'react';
import Dialog from 'react-toolbox/lib/dialog';

import {Character} from 'stores/models';

export const DeleteCharacter = ({
  onDeleteConfirm,
  onDeleteCancel,
  character,
}: {
  onDeleteConfirm?: Function,
  onDeleteCancel?: Function,
  character: Character,
}) => (
  <Dialog
    title='Delete character?'
    active={true}
    onEscKeyDown={onDeleteCancel}
    onOverlayClick={onDeleteCancel}
    actions={[
      {label: 'Cancel', onClick: onDeleteCancel},
      {label: 'Delete', onClick: onDeleteConfirm},
    ]}
  >
    <b>Are you sure you want to delete the {character.name} character?</b>
    <p>
      (level {character.level && character.level.toString()}, {character.experience} EXP)
    </p>
  </Dialog>
);
