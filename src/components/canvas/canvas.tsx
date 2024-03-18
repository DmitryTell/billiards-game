import React, { useRef, useEffect, useState } from 'react';

import { Menu } from '../menu';
import { updateFrame, spheres } from './lib';
import * as Styled from './canvas.styled';


export const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [selectedSphere, setSelectedSphere] = useState<number | null>(null);
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);
  const [newColor, setNewColor] = useState<string>('');

  const handleMouseMove = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = event.target as HTMLCanvasElement;
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    const { offsetX, offsetY } = event.nativeEvent;

    spheres.forEach((sphere) => {
      const dx = offsetX - sphere.x;
      const dy = offsetY - sphere.y;
      const distance = Math.sqrt(dx ** 2 + dy ** 2);

      if (distance <= sphere.radius) {
        updateFrame(ctx);
      }
    });
  };

  const handleSphereClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const { offsetX, offsetY } = event.nativeEvent;

    spheres.forEach((sphere, index) => {
      const dx = offsetX - sphere.x;
      const dy = offsetY - sphere.y;
      const distance = Math.sqrt(dx ** 2 + dy ** 2);

      if (distance <= sphere.radius) {
        sphere.color = '#fff';

        setSelectedSphere(index);
        setIsMenuVisible(true);
      }
    });
  };

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewColor(event.target.value);
  };

  const handleColorSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (selectedSphere !== null) {
      spheres[selectedSphere].color = newColor;

      setIsMenuVisible(false);
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    if (!ctx) return;

    requestAnimationFrame(() => updateFrame(ctx));
  }, []);

  return (
    <>
      { isMenuVisible && (
        <Menu
          newColor={ newColor }
          onChange={ handleColorChange }
          onSubmit={ handleColorSubmit }
        />
      ) }
      <Styled.Canvas
        ref={ canvasRef }
        height={ 600 }
        width={ 1000 }
        onClick={ handleSphereClick }
        onMouseMove={ handleMouseMove }
      />
    </>
  );
};
