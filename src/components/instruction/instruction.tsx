import { FC } from 'react';

import * as Styled from './instruction.styled';


interface IInstructionProp {
  onClick: React.MouseEventHandler;
}

export const Instruction: FC<IInstructionProp> = ({ onClick }) => (
  <Styled.Container>
    <Styled.Title>Инструкция</Styled.Title>
    <Styled.List>
      <Styled.Item>Захватите шар, кликнув на него и зажав левую кнопку мыши</Styled.Item>
      <Styled.Item>
        Отведите шар в сторону, противоположную желаемому направлению движения (принцип рогатки)
      </Styled.Item>
      <Styled.Item>Отпустите левую кнопку мыши</Styled.Item>
      <Styled.Item>Чтобы поменять цвет шара, кликните по нему двойным щелчком левой кнопки мыши</Styled.Item>
    </Styled.List>
    <Styled.Link href="https://github.com/DmitryTell/billiards-game" target="_blank">Репозиторий Github</Styled.Link>
    <Styled.Button type="button" onClick={ onClick }>OK</Styled.Button>
  </Styled.Container>
);
