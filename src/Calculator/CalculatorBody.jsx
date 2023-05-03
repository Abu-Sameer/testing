import React, { useState } from 'react';
import Buttons from './Buttons';

export default function CalculatorBody() {
  const [display, setDisplay] = useState('');

  return (
    <div className="container d-flex justify-content-center">
      <div className="d-flex flex-column justify-content-center rounded mt-4 border pt-3 pb-5 px-5 bg-primary-subtle">
        <h3 className="text-center">
          Advance Calculator<span className="fs-6">@</span>
        </h3>
        <div className="mt-3">
          <input
            type="text"
            value={display}
            readOnly
            placeholder="0"
            className="form-control"
          />
        </div>
        <div>
          <Buttons display={display} state={setDisplay} />
        </div>
      </div>
    </div>
  );
}
