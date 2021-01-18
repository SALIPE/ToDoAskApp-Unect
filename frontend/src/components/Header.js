import React, { Fragment } from 'react';

import './Header.css';
import addbt from '../assets/add.svg';

export default function Header() {
  return (
    <Fragment>
      <header id="main-header">
        <div className = "header-content">
          <h1>uTask</h1>
          <div className="add-task">
            <form>
              <input type="text"></input>
              <button><img src={addbt}/></button>
            </form>
          </div>
        </div>
      </header>
    </Fragment>
  );
}