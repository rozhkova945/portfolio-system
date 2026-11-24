import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary'] },
    size: { control: 'select', options: ['md', 'lg'] },
    disabled: { control: 'boolean' },
    disabledReason: { control: 'text' },
    href: { control: 'text' },
    children: { control: 'text' },
  },
  args: {
    children: 'View selected work ↓',
    variant: 'primary',
    size: 'md',
    disabled: false,
    disabledReason: 'Недоступно: форма ще не заповнена',
  },
  parameters: {
    docs: {
      description: {
        component: `
**Що це.** Кнопка сайту: головна дія сторінки (\`primary\`) або друга за важливістю (\`secondary\`). Якщо передати \`href\`, рендериться як посилання.

**Параметри** (значення за замовчуванням у дужках)
- \`variant\` (\`primary\`): \`primary\` або \`secondary\`
- \`size\` (\`md\`): \`md\` або \`lg\`
- \`disabled\` (\`false\`): вимикає кнопку через \`aria-disabled\`
- \`disabledReason\`: пояснення для скрінрідера, звʼязується через \`aria-describedby\`
- \`href\`: перетворює кнопку на посилання
- \`onClick\`: обробник натискання
- \`children\`: текст кнопки

**Варіанти і стани.** \`primary\` — заливка \`ink\`, текст \`canvas\`. \`secondary\` — контур \`ink-muted\`, текст \`ink\`. Стани: default, hover (\`primary\` стає \`ink-muted\`, \`secondary\` отримує фон \`surface\`), focus (контур \`ink\`, видно при навігації клавішею Tab), disabled (\`line\` і \`ink-muted\`, курсор «заборонено»). Hover і focus справжні: наведи мишу й натисни Tab.

**Токени.** Кольори: \`ink\`, \`ink-muted\`, \`canvas\`, \`surface\`, \`line\`. Текст: \`text-button\`. Радіус: \`rounded-control\`. Відступи: кроки \`3\`, \`4\`, \`6\`, \`8\`.

**Коли використовувати.** Головна дія блоку («Написати», «Дивитися кейси»), друга дія поруч з нею. На сторінці лише одна \`primary\` на екран. **Коли ні:** для навігаційних пунктів меню (для них є компонент Navigation) і для дрібних посилань у тексті.

**Як брати в код.**
\`\`\`tsx
import { Button } from "@/components/Button/Button";

<Button variant="primary" href="#work">View selected work ↓</Button>
<Button variant="secondary" disabled disabledReason="Недоступно">Get in touch</Button>
\`\`\`
`,
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
