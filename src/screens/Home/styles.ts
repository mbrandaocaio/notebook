import styled from 'styled-components/native';
import {Colors} from '../../utils/colors.const';

export const Container = styled.View`
  flex: 1;
  background-color: ${Colors.gray50};
  flex-direction: column;
`;

export const Title = styled.Text`
  font-size: 20px;
  text-transform: uppercase;
`;
export const SubTitle = styled.Text`
  font-size: 14px;
  margin-top: 5px;
`;
export const ListBlock = styled.ScrollView`
  flex: 2;
  background-color: ${Colors.white};
  padding-top: 30px;
`;

export const ListBlockItems = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 10px;
  margin-top: 10px;
`;
export const ActionBlock = styled.View`
  flex: 1;
  display: flex;
  flex-direction: row;
  max-height: 50px;
  margin-top: 10px;
  padding: 5px;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 10px;
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

export const TitleNotes = styled.Text`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: ${Colors.black};
`;
