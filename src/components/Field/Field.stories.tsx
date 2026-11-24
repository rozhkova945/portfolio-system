import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Field, type FieldProps } from './Field';

type StoryArgs = FieldProps & { hasError: boolean; errorText: string };

const meta = {
  title: 'Components/Field',
  component: Field,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    name: { control: 'text' },
    type: { control: 'select', options: ['text', 'email'] },
    placeholder: { control: 'text' },
    defaultValue: { control: 'text' },
    disabled: { control: 'boolean' },
    hasError: { control: 'boolean', description: 'Показати стан помилки' },
    errorText: { control: 'text', description: 'Текст помилки під полем' },
    error: { table: { disable: true } },
  },
  args: {
    label: 'Email',
    name: 'email',
    type: 'email',
    placeholder: 'name@example.com',
    defaultValue: '',
    disabled: false,
    hasError: false,
    errorText: 'Введіть email у форматі name@example.com',
  },
  render: ({ hasError, errorText, ...args }) => (
    <Field key={args.defaultValue} {...args} error={hasError ? errorText : undefined} />
  ),
  parameters: {
    docs: {
      description: {
        component: `
**Що це.** Текстове поле форми з підписом зверху й текстом помилки під полем. Для контактів: імʼя, email, повідомлення.

**Параметри** (значення за замовчуванням у дужках)
- \`label\`: підпис над полем (обовʼязковий)
- \`name\`: імʼя поля у формі
- \`type\` (\`text\`): \`text\` або \`email\`
- \`placeholder\`: підказка в порожньому полі
- \`defaultValue\`: початкове значення, стан «заповнене»
- \`error\`: текст помилки; є текст — поле в стані помилки
- \`disabled\` (\`false\`): вимкнене поле

**Варіанти і стани.** Default (межа \`ink-muted\`), hover (межа \`ink\`), focus (контур \`ink\`, натисни Tab), заповнене (\`defaultValue\`), помилка (межа \`danger\` і текст помилки \`danger\` під полем, повʼязаний через \`aria-describedby\`, поле має \`aria-invalid\`), disabled (фон \`line\`, текст \`ink-muted\`). У Controls стан помилки вмикається перемикачем \`hasError\`, текст — \`errorText\`.

**Токени.** Кольори: \`surface\` (фон поля), \`ink\`, \`ink-muted\` (межа, підказка), \`danger\`, \`line\`. Текст: \`text-body\` (значення), \`text-label\` (підпис), \`text-caption\` (помилка). Радіус: \`rounded-control\`. Відступи: кроки \`2\`, \`3\`, \`6\`.

**Коли використовувати.** Короткі однорядкові дані у формі контактів. **Коли ні:** довгий текст (для нього знадобиться окреме поле-область) і вибір із варіантів.

**Як брати в код.**
\`\`\`tsx
import { Field } from "@/components/Field/Field";

<Field label="Email" name="email" type="email" placeholder="name@example.com" />
<Field label="Email" name="email" error="Введіть email у форматі name@example.com" />
\`\`\`
`,
      },
    },
  },
} satisfies Meta<StoryArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
