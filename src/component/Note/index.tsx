import React from 'react';

import {Text} from 'react-native';
import {IReturn} from '../../services/storage';
import {Colors} from '../../utils/colors.const';
import * as S from './styles';

type INote = {
  id: string;
  title: string;
  note: string;
  date: string;
  onClick: (note: IReturn) => void;
};

const Note: React.FC = ({id, title, note, date, onClick}: INote) => {
  const choosedNote: IReturn = {
    id,
    title,
    note,
    date,
  };
  return (
    <S.Container onPress={() => onClick(choosedNote)} activeOpacity={0.7}>
      <S.TitleBlock>
        <Text style={{color: '#fff'}}>{date}</Text>
      </S.TitleBlock>
      <S.DateBlock>
        <Text style={{fontSize: 16, color: Colors.black}}>{title}</Text>
      </S.DateBlock>
    </S.Container>
  );
};

export default Note;
