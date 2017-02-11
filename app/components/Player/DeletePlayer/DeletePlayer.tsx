import * as React from 'react';
import {Button} from 'react-toolbox/lib/button';
import Dialog from 'react-toolbox/lib/dialog';

import {Player} from 'stores/models';

export const DeletePlayer = ({
  onDeleteConfirm,
  onDeleteCancel,
  player,
}: {
  onDeleteConfirm?: Function,
  onDeleteCancel?: Function,
  player: Player,
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
    <b>Are you sure you want to delete the {player.name} character?</b>
    <p>
      (level {player.level.toString()}, {player.experience} EXP)
    </p>
  </Dialog>
);
