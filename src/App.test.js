import { render, screen } from '@testing-library/react';
import { testing } from 'googleapis/build/src/apis/testing';
import App from './App';

describe('Homepage displaying', () => {

  test('Screen renders \'Artists Social App\'',() => {
    render(<App />);
   expect(screen.getByText('Artists Social App')).toBeInTheDocument();
  })

 test('Screen does not renders \'Artistz Social App\'',() => {
    render(<App />);
   expect(screen.queryByText('Artistz Social App')).not.toBeInTheDocument();
  })

})