import React, { useRef, useEffect, useState } from 'react';

import { Instruction } from '../instruction';
import { Menu } from '../menu';
import { spheres, updateFrame } from './lib';
import * as Styled from './canvas.styled';


export const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [isInstruction, setIsInstruction] = useState<boolean>(true);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [selectedSphere, setSelectedSphere] = useState<number | null>(null);
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);
  const [newColor, setNewColor] = useState<string>('');

  const handleMouseDown = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const { offsetX, offsetY } = event.nativeEvent;

    spheres.forEach((sphere) => {
      sphere.isSelected = false;
    });
    spheres.forEach((sphere) => {
      const dx = offsetX - sphere.x;
      const dy = offsetY - sphere.y;
      const distance = Math.sqrt(dx ** 2 + dy ** 2);

      if (distance <= sphere.radius) {
        sphere.isSelected = true;

        setStartPos({ x: offsetX, y: offsetY });
        setIsDragging(true);
      }
    });
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const { offsetX, offsetY } = event.nativeEvent;

    spheres.forEach((sphere) => {
      if (isDragging && sphere.isSelected) {
        sphere.x = offsetX;
        sphere.y = offsetY;
      }
    });
  };

  const handleMouseUp = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const { offsetX, offsetY } = event.nativeEvent;

    spheres.forEach((sphere) => {
      if (isDragging && sphere.isSelected) {
        const dx = offsetX - startPos.x;
        const dy = offsetY - startPos.y;

        sphere.dx = -(dx / 5);
        sphere.dy = -(dy / 5);

        setIsDragging(false);
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
    const ctx = canvas?.getContext('2d');

    if (!canvas || !ctx) return;

    requestAnimationFrame(() => updateFrame(ctx));
  }, []);

  return (
    <>
      { isInstruction && (
        <Instruction onClick={ () => setIsInstruction(false) } />
      ) }
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
        onDoubleClick={ handleSphereClick }
        onMouseDown={ handleMouseDown }
        onMouseMove={ handleMouseMove }
        onMouseUp={ handleMouseUp }
      />
    </>
  );
};
