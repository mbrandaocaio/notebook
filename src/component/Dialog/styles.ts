import styled from 'styled-components/native';
import { Colors } from '../../utils/colors.const';

interface IButtonProp {
  danger?: boolean;
  fullWidth?: boolean;
}

export const DialogAction = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const DialogButton = styled.TouchableOpacity`
  width: ${(props: IButtonProp) => (props.fullWidth ? '80%' : '45%')};
  background-color: ${(props: IButtonProp) =>
    props.danger ? Colors.orange : Colors.green};
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;
