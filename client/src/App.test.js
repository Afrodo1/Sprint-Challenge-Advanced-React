import React from 'react';
import ReactDOM from 'react-dom';
import {render, getAllByText, getByText, getByTestId} from '@testing-library/react';
import App from './App';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Renders without errors!', () => {
  // ARRANGE
  const div = document.createElement("div");

  // ACT
  ReactDOM.render(<App />, div);

  // CLEAN UP
  ReactDOM.unmountComponentAtNode(div);

  // ASSERTION - Rendered without exception
});

test('App is Displaying!', () => {
  // ARRANGE
  const { getByTestId } = render(<App />);

  // ACT
  getByTestId(/Applet/i);
  
});

test('Header is Displaying!', () =>{
  //Arrange
  const {getByTestId} = render(<App/>);

  //Act
  getByTestId(/header/i);
})