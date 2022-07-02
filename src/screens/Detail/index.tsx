import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Alert, Text} from 'react-native';
import {getItemStorage, IReturn, setStorageItem} from '../../services/storage';
import * as S from './styles';

interface IRoute {
  id: string;
}

let d = new Date();

const Detail: React.FC = ({route}: IRoute) => {
  const {navigate} = useNavigation();
  const [notes, setNotes] = useState<IReturn[]>();
  const [id, setId] = useState<string | null>(null);
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');
  const [date, setDate] = useState('');

  const [isSubmiting, setIsSubmiting] = useState(false);

  const params = route.params;

  useEffect(() => {
    if (params !== undefined) {
      setId(params.id);
      setTitle(params.title);
      setDate(params.date);
      setNote(params.note);
    }
  }, []);

  useEffect(() => {
    const getItem = async () => {
      setNotes(await getItemStorage());
    };
    getItem();
  }, []);

  const handleSubmit = async () => {
    try {
      setIsSubmiting(true);
      if (!title) {
        return false;
      }
      const notesToSave = notes ? notes : [];

      if (!id) {
        let dateNow =
          d.getDate() +
          '/' +
          (d.getMonth() + 1) +
          '/' +
          d.getFullYear() +
          ' - ' +
          d.getHours() +
          ':' +
          d.getMinutes();
        let noteStorage: IReturn = {
          id: String(Math.floor(Math.random() * 100) + 1),
          title: title,
          note: note,
          date: dateNow,
        };

        notesToSave.push(noteStorage);

        await setStorageItem(JSON.stringify(notesToSave));
      } else {
        notes?.map(n => {
          if (n.id === id) {
            n.title = title;
            n.note = note;
          }
          return note;
        });
        await setStorageItem(JSON.stringify(notesToSave));
      }
      navigate('Home');
    } catch (error) {
      Alert.alert('ocorreu um erro, tente novamente');
    }
  };
  return (
    <S.Container>
      <S.FormBlock>
        <S.TitleBlock>
          <S.Title>Título</S.Title>
          <S.TextInput onChangeText={setTitle} value={title} />
          {!title && isSubmiting && (
            <S.TextTitleError>Título obrigatório</S.TextTitleError>
          )}
        </S.TitleBlock>

        <S.NoteBlock>
          <S.Title>Anotação</S.Title>
          <S.TextAreaInput
            onChangeText={setNote}
            value={note}
            multiline={true}
            numberOfLines={10}
            textAlignVertical="top"
          />
        </S.NoteBlock>
      </S.FormBlock>

      <S.ActionBlock>
        <S.Button danger onPress={() => navigate('Home')}>
          <S.ButtonText>Voltar</S.ButtonText>
        </S.Button>
        <S.Button onPress={handleSubmit}>
          <S.ButtonText>
            {params !== undefined ? 'Atualizar' : 'Salvar'}
          </S.ButtonText>
        </S.Button>
      </S.ActionBlock>
    </S.Container>
  );
};

export default Detail;
