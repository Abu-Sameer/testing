import React from 'react';

export default function Buttons(props) {
  const display = props.display;
  const setDisplay = props.state;
  return (
    <div className="row">
      <div className="d-flex flex-column coll col-lg-3 mt-4">
        <button
          onClick={() =>
            setDisplay(
              display === '' ? '' : `${display} = ${eval(display).toString()}`
            )
          }
          value="="
          className="btn btn-primary mb-2 equal"
          style={{ height: '45%' }}
        >
          =
        </button>
        <button
          onClick={() => setDisplay('')}
          value="Clear"
          className="btn btn-danger mt-3"
        >
          C
        </button>
        <button
          onClick={() => setDisplay(display.slice(0, -1))}
          value="del"
          className="btn btn-warning mt-4"
        >
          Del
        </button>
      </div>
      <div className="col-lg-9 ">
        <div className="d-flex justify-content-between mt-4">
          <button
            onClick={(e) => setDisplay(display.concat(e.target.value))}
            value="1"
            className="btn btn-outline-primary"
          >
            1
          </button>
          <button
            onClick={(e) => setDisplay(display.concat(e.target.value))}
            value="2"
            className="btn btn-outline-primary"
          >
            2
          </button>
          <button
            onClick={(e) => setDisplay(display.concat(e.target.value))}
            value="3"
            className="btn btn-outline-primary"
          >
            3
          </button>
          <button
            onClick={(e) => setDisplay(display.concat(e.target.value))}
            value="4"
            className="btn btn-outline-primary"
          >
            4
          </button>
        </div>
        <div className="d-flex justify-content-between mt-4">
          <button
            onClick={(e) => setDisplay(display.concat(e.target.value))}
            value="5"
            className="btn btn-outline-primary"
          >
            5
          </button>
          <button
            onClick={(e) => setDisplay(display.concat(e.target.value))}
            value="6"
            className="btn btn-outline-primary"
          >
            6
          </button>
          <button
            onClick={(e) => setDisplay(display.concat(e.target.value))}
            value="7"
            className="btn btn-outline-primary"
          >
            7
          </button>
          <button
            onClick={(e) => setDisplay(display.concat(e.target.value))}
            value="8"
            className="btn btn-outline-primary"
          >
            8
          </button>
        </div>
        <div className="d-flex justify-content-between mt-4">
          <button
            onClick={(e) => setDisplay(display.concat(e.target.value))}
            value="9"
            className="btn btn-outline-primary"
          >
            9
          </button>
          <button
            onClick={(e) => setDisplay(display.concat(e.target.value))}
            value="0"
            className="btn btn-outline-primary col-lg-6 zero"
          >
            0
          </button>
          <button
            onClick={(e) => setDisplay(display.concat(e.target.value))}
            value="."
            className="btn btn-outline-primary"
          >
            .
          </button>
        </div>
        <div className="d-flex justify-content-between mt-4">
          <button
            onClick={(e) => setDisplay(display.concat(e.target.value))}
            value="+"
            className="btn btn-outline-success"
          >
            +
          </button>
          <button
            onClick={(e) => setDisplay(display.concat(e.target.value))}
            value="-"
            className="btn btn-outline-success"
          >
            -
          </button>
          <button
            onClick={(e) => setDisplay(display.concat(e.target.value))}
            value="*"
            className="btn btn-outline-success"
          >
            x
          </button>
          <button
            onClick={(e) => setDisplay(display.concat(e.target.value))}
            value="/"
            className="btn btn-outline-success"
          >
            /
          </button>
        </div>
      </div>
    </div>
  );
}
