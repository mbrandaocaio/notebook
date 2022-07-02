/* eslint-disable @typescript-eslint/no-unused-vars */
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {Dialogs} from '../../component/Dialog';
import Note from '../../component/Note';
import {
  deleteStorageItem,
  getItemStorage,
  IReturn,
  resetItemsStorage,
} from '../../services/storage';
import {Colors} from '../../utils/colors.const';

import * as S from './styles';

const Home: React.FC = () => {
  const {navigate} = useNavigation();
  const [notes, setNotes] = useState<IReturn[]>();

  const [choosedNote, setChoosedNote] = useState<IReturn | 'new'>();

  const [showDialog, setShowDialog] = useState(false);
  const [showDialogDeleteAll, setShowDialogDeleteAll] = useState(false);

  const handleClickNote = (note: IReturn | 'new') => {
    if (note === 'new') {
      navigate('Details');
    } else {
      setChoosedNote(note);
      setShowDialog(true);
    }
  };

  const handleOpenDetail = () => {
    dialogClose('edit');
    navigate('Details', choosedNote);
  };

  useEffect(() => {
    const getItem = async () => {
      const response = await getItemStorage();
      setNotes(response);
    };
    getItem();
  }, [notes]);

  const handleReset = async () => {
    resetItemsStorage();
  };

  const dialogClose = (dialog: 'edit' | 'delete') => {
    if (dialog === 'edit') {
      setShowDialog(false);
    } else {
      setShowDialogDeleteAll(false);
    }
  };

  const handleDeleteNote = async () => {
    await deleteStorageItem(choosedNote?.id);
    dialogClose('edit');
  };

  return (
    <S.Container>
      <S.ListBlock>
        <S.TitleNotes>Minhas notas</S.TitleNotes>
        <S.ListBlockItems>
          {notes &&
            notes.map(note => (
              <Note
                key={note.id}
                id={note.id}
                title={note.title}
                date={note.date}
                note={note.note}
                onClick={handleClickNote}
              />
            ))}
        </S.ListBlockItems>
      </S.ListBlock>

      <S.ActionBlock>
        <S.Button danger onPress={() => setShowDialogDeleteAll(true)}>
          <S.ButtonText>Limpar</S.ButtonText>
        </S.Button>
        <S.Button onPress={() => handleClickNote('new')}>
          <S.ButtonText>Nova</S.ButtonText>
        </S.Button>
      </S.ActionBlock>

      <View>
        <Dialogs
          type="edit"
          showDialogAlter={showDialog}
          onCancel={() => dialogClose('edit')}
          onClickEdit={handleOpenDetail}
          onClickDelete={handleDeleteNote}
          showDialogDelete={false}
        />
        <Dialogs
          type="delete"
          showDialogAlter={false}
          onClickDeleteAll={handleReset}
          showDialogDelete={showDialogDeleteAll}
          onCancel={() => dialogClose('delete')}
        />
      </View>
    </S.Container>
  );
};

export default Home;
