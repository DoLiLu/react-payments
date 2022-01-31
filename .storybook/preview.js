import { BrowserRouter, Router } from 'react-router-dom';
import '../src/styles/index.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story, context) => (
    <BrowserRouter>
      <Story />
    </BrowserRouter>
  ),
];
