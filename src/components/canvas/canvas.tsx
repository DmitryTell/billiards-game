import { useRef, useEffect } from 'react';

import { updateFrame } from './lib';
import * as Styled from './canvas.styled';


export const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    if (!ctx) return;

    requestAnimationFrame(() => updateFrame(ctx));
  }, []);

  return (
    <Styled.Canvas ref={ canvasRef } height={ 600 } width={ 1000 } />
  );
};
