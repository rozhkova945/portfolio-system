@AGENTS.md

# portfolio-system

UX/UI-портфоліо Yaroslava Rozhkova. Сайт англійською, робота з Claude українською.

## Стек
- Next.js (App Router), TypeScript, npm. Стилі зараз: CSS Modules + `globals.css`.
- Хостинг: Vercel, репозиторій https://github.com/rozhkova945/portfolio-system

## Правила роботи з Git
- Уся робота йде в гілці `main`. Нових гілок не створюй, поки я прямо не попрошу.
- Пуш у `main` публікує сайт на Vercel: перед пушем чекай окремого «так» у чаті.

## Матеріали
- План сайту: `docs/plan.docx`, `docs/plan.html`
- Перший екран у Figma: `docs/figma.md`

## Токени
Затверджений набір (крок 2а): `docs/tokens.md`. Це єдине джерело значень, поки вони не перенесені в `@theme`.
- Кольори (7): `canvas`, `surface`, `line`, `accent`, `ink`, `ink-muted`, `danger`
- Текст (8): `display`, `heading`, `lead`, `title`, `body`, `button`, `label`, `caption`
- Радіуси: `control`, `card`. Пропорція картинок: `cover`. Відступи: 8, 12, 16, 24, 32
- Кнопки темні (`ink` із текстом `canvas`); `accent` лише для великих слів і декору
- Межа поля й контур кнопки без заливки: `ink-muted`, не `line`

## Компоненти
Поки немає (є лише сторінка `src/app/page.tsx`).

## Скіли
- `.claude/skills/storybook/SKILL.md`: Storybook, історії й документація компонентів
- `.claude/skills/vercel/SKILL.md`: превʼю, деплой і логи Vercel
