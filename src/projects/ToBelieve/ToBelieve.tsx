import React from 'react';
import p5 from 'p5';
import { P5Frame } from '../../foundation/P5Frame';
import { Emitter } from './Emitter';

function toBelieveSketch(p: p5) {
  let emitter: Emitter;
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(0);
    emitter = new Emitter(p, 3000);
  };

  p.draw = () => {
    p.background(255);
    emitter.show();
    console.log(p.frameRate());
  };
}

const MainPage = () => {
  return (
    <div>
      <P5Frame sketch={toBelieveSketch} />
    </div>
  );
};

export default MainPage;