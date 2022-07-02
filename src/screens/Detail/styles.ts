import styled from 'styled-components/native';
import {Colors} from '../../utils/colors.const';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${Colors.gray50};
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  align-self: center;
  color: ${Colors.black};
`;

export const TextInput = styled.TextInput`
  height: 40px;
  width: 100%;
  border-width: 1px;
  border-radius: 5px;
  border-color: ${Colors.gray100};
  margin-top: 5px;
  color: ${Colors.black};
`;

export const FormBlock = styled.View`
  flex: 9;
  background-color: ${Colors.white};
`;

export const TitleBlock = styled.View`
  justify-content: center;
  align-items: center;
  background-color: ${Colors.white};
  padding: 20px;
  padding-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NoteBlock = styled.View`
  flex: 2;
  padding: 20px;
`;

export const TextAreaInput = styled.TextInput`
  flex: 1;
  border-width: 1px;
  border-radius: 5px;
  border-color: ${Colors.gray100};
  margin-top: 5px;
  padding-left: 10px;
  align-items: center;
  height: 300px;
  color: ${Colors.black};
`;

export const ActionBlock = styled.View`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 10px;
`;

interface IButtonProp {
  danger?: boolean;
}

export const Button = styled.TouchableHighlight`
  width: 45%;
  background-color: ${(props: IButtonProp) =>
    props.danger ? Colors.orange : Colors.green};
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const ButtonText = styled.Text`
  color: ${Colors.white};
  font-weight: bold;
  text-transform: uppercase;
`;

export const TextTitleError = styled.Text`
  margin-top: 2px;
  align-self: flex-start;
  color: ${Colors.red};
`;
