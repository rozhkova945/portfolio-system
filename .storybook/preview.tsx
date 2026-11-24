import type { Preview } from '@storybook/nextjs-vite';
import { inter } from '../src/app/fonts';
import '../src/app/globals.css';

// Сторінки docs (MDX) не проходять через декоратори, тому клас змінної шрифту
// вішаємо на <html> один раз при завантаженні превʼю.
if (typeof document !== 'undefined') {
  document.documentElement.classList.add(inter.variable);
}

const preview: Preview = {
  decorators: [
    (Story) => (
      <div className={`${inter.variable} font-sans`}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
