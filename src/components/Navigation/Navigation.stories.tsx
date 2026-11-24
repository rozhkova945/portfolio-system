import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Navigation } from './Navigation';

const meta = {
  title: 'Components/Navigation',
  component: Navigation,
  tags: ['autodocs'],
  argTypes: {
    logo: { control: 'text' },
    activeHref: { control: 'select', options: ['', '#work', '#about', '#cv'] },
    ctaLabel: { control: 'text' },
    ctaHref: { control: 'text' },
    items: { control: 'object' },
  },
  args: {
    logo: 'Yaroslava Rozhkova',
    items: [
      { label: 'Work', href: '#work' },
      { label: 'About', href: '#about' },
      { label: 'CV ↗', href: '#cv' },
    ],
    activeHref: '',
    ctaLabel: 'Let’s talk ↗',
    ctaHref: '#contact',
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
**Що це.** Верхня навігація сайту: логотип, пункти меню і кнопка дії справа.

**Параметри**
- \`logo\`: імʼя для логотипу (кожне слово з нового рядка, великими літерами)
- \`items\`: пункти меню, масив \`{ label, href }\`
- \`activeHref\`: \`href\` активного пункту, порожній — активного немає
- \`ctaLabel\`, \`ctaHref\`: текст і посилання кнопки дії

**Варіанти і стани.** Стани пункту: default, hover (колір \`ink-muted\`), focus (контур \`ink\`, Tab), активний (підкреслення кольором \`accent\` і \`aria-current="page"\`). На широкому екрані все в один рядок. На вузькому лишається логотип і кнопка «Menu»: меню відкривається поверх контенту (рамка \`line\`, фон \`canvas\`) і закривається клавішею Escape або повторним натисканням. Подивитись вузький екран можна кнопкою Viewport у тулбарі Storybook.

**Токени.** Кольори: \`ink\`, \`ink-muted\`, \`accent\`, \`canvas\`, \`line\`, \`surface\`. Текст: \`text-title\` (логотип), \`text-body\` (пункти), \`text-button\`. Радіуси: \`rounded-control\`, \`rounded-card\`. Відступи: кроки \`6\`, \`8\`. Кнопка дії — компонент Button.

**Коли використовувати.** Один раз зверху кожної сторінки. **Коли ні:** для навігації всередині сторінки чи в підвалі.

**Як брати в код.**
\`\`\`tsx
import { Navigation } from "@/components/Navigation/Navigation";

<Navigation
  logo="Yaroslava Rozhkova"
  items={[{ label: "Work", href: "#work" }, { label: "About", href: "#about" }]}
  activeHref="#work"
  ctaLabel="Let’s talk ↗"
  ctaHref="#contact"
/>
\`\`\`
`,
      },
    },
  },
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
