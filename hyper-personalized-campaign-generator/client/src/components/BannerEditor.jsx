import BannerEditor from '../components/BannerEditor';

import React, { useRef, useEffect, useState } from 'react';
import { Stage, Layer, Rect, Text } from 'react-konva';

const BannerEditor = () => {
  const [text, setText] = useState('Your Headline Here');
  const [color, setColor] = useState('#333');
  const [bgColor, setBgColor] = useState('#f2f2f2');
  const stageRef = useRef(null);

  const handleDownload = () => {
    const uri = stageRef.current.toDataURL();
    const link = document.createElement('a');
    link.download = 'banner.png';
    link.href = uri;
    link.click();
  };

  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="flex gap-2">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border p-2 rounded"
          placeholder="Enter headline text"
        />
        <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
        <input type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)} />
        <button
          onClick={handleDownload}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Download Banner
        </button>
      </div>
      <Stage width={600} height={300} ref={stageRef} className="border rounded shadow">
        <Layer>
          <Rect width={600} height={300} fill={bgColor} />
          <Text
            text={text}
            fontSize={32}
            fill={color}
            x={50}
            y={130}
            draggable
          />
        </Layer>
      </Stage>
    </div>
  );
};

export default BannerEditor;
