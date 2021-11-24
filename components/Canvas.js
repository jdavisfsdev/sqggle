import { useEffect, useRef, useState } from 'react';

function Canvas() {
  const [isPainting, setIsPainting] = useState(false);
  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 2;
    canvas.height = window.innerHeight * 2;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    const context = canvas.getContext('2d');
    context.scale(2, 2);
    context.lineCap = 'round';
    context.strokeStyle = 'black';
    context.lineWidth = 5;
    contextRef.current = context;
  }, []);

  const startPaint = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsPainting(true);
  };

  const finishPaint = () => {
    setIsPainting(false);
  };

  const paint = () => {};
  return (
    <div>
      <canvas
        onMouseDown={startPaint}
        onMouseUp={finishPaint}
        onMouseMove={paint}
        ref={canvasRef}
      />
    </div>
  );
}

export default Canvas;
