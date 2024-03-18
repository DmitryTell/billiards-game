import { FC } from 'react';

import * as Styled from './menu.styled';


interface IFormProps {
  newColor: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
}

export const Menu: FC<IFormProps> = ({ newColor, onChange, onSubmit }) => (
  <Styled.Form onSubmit={ onSubmit }>
    <input type="color" value={ newColor } onChange={ onChange } />
    <Styled.Button type="submit">Выбрать цвет</Styled.Button>
  </Styled.Form>
);
