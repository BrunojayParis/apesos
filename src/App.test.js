import { render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import App from './App';

test('renders App', () => {
  const component = render(<App />);

  component.getByText('Salario en pesos')

});

