import React from 'react';
import {Text} from 'react-native';
import Dialog from 'react-native-dialog';
import {Colors} from '../../utils/colors.const';
import * as S from './styles';

interface IDialogProp {
  type: 'edit' | 'delete';
  showDialogAlter: boolean;
  showDialogDelete: boolean;
  onClickEdit?: () => void;
  onClickDelete?: () => void;
  onCancel: () => void;
  onClickDeleteAll?: () => void;
}

export const Dialogs = (props: IDialogProp) => {
  return props.type === 'edit' ? (
    <Dialog.Container
      visible={props.showDialogAlter}
      contentStyle={{borderRadius: 10}}
      onBackdropPress={props.onCancel}>
      <Dialog.Title>O que deseja fazer?</Dialog.Title>
      <S.DialogAction>
        <S.DialogButton onPress={props.onClickEdit}>
          <Text style={{color: Colors.white, fontWeight: 'bold'}}>Abrir</Text>
        </S.DialogButton>
        <S.DialogButton danger onPress={props.onClickDelete}>
          <Text style={{color: Colors.white, fontWeight: 'bold'}}>Remover</Text>
        </S.DialogButton>
      </S.DialogAction>

      <Dialog.Button label="Cancelar" onPress={props.onCancel} />
    </Dialog.Container>
  ) : (
    <Dialog.Container
      visible={props.showDialogDelete}
      contentStyle={{borderRadius: 10}}
      onBackdropPress={props.onCancel}>
      <Dialog.Title>Deseja remover todos os itens?</Dialog.Title>
      <Dialog.Description>Essa ação não pode ser desfeita</Dialog.Description>
      <S.DialogAction>
        <S.DialogButton fullWidth danger onPress={props.onClickDeleteAll}>
          <Text style={{color: Colors.white, fontWeight: 'bold'}}>Remover</Text>
        </S.DialogButton>
      </S.DialogAction>

      <Dialog.Button label="Cancelar" onPress={props.onCancel} />
    </Dialog.Container>
  );
};
