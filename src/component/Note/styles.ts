import styled from 'styled-components/native';
import {Colors} from '../../utils/colors.const';

export const Container = styled.TouchableOpacity`
  display: flex;
  width: 49.9%;
  height: 100px;
  margin-top: 5px;
  background-color: ${Colors.gray};
  border-radius: 5px;
`;

export const TitleBlock = styled.View`
  background-color: ${Colors.green};
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DateBlock = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
