@AGENTS.md

# portfolio-system

UX/UI-портфоліо Yaroslava Rozhkova. Сайт англійською, робота з Claude українською.

## Стек
- Next.js (App Router), TypeScript, npm, Tailwind v4. Токени в блоці `@theme` у `src/app/globals.css`. Шрифт Inter (latin + cyrillic) підключено в `src/app/fonts.ts`.
- Хостинг: Vercel, репозиторій https://github.com/rozhkova945/portfolio-system

## Правила роботи з Git
- Уся робота йде в гілці `main`. Нових гілок не створюй, поки я прямо не попрошу.
- Пуш у `main` публікує сайт на Vercel: перед пушем чекай окремого «так» у чаті.

## Storybook
- Запуск: `npm run storybook` (http://localhost:6006). Сторінка токенів: `src/stories/Tokens.mdx`. Правила: `.claude/skills/storybook/SKILL.md`

## Матеріали
- План сайту: `docs/plan.docx`, `docs/plan.html`
- Перший екран у Figma: `docs/figma.md`

## Токени
Єдине джерело значень: блок `@theme` у `src/app/globals.css`. Затверджена таблиця з походженням значень і контрастом: `docs/tokens.md`. Значень у `.tsx` не пишемо.
- Кольори: `canvas`, `surface`, `line`, `accent`, `ink`, `ink-muted`, `danger`. Класи: `bg-canvas`, `bg-surface`, `border-line`, `bg-accent`, `text-ink`, `text-ink-muted`, `text-danger`, `border-danger`
- Текст: `text-display`, `text-heading`, `text-lead`, `text-title`, `text-body`, `text-button`, `text-label`, `text-caption` (висота рядка, трекінг, жирність задані парами в `@theme`)
- Радіуси: `rounded-control` (кнопки, поля), `rounded-card` (картки)
- Пропорція картинок: `aspect-cover` (3 / 2)
- Відступи: лише 8, 12, 16, 24, 32 px, тобто `2, 3, 4, 6, 8` у класах (`p-2`, `gap-4`). Це домовленість: Tailwind сам `p-5` не заборонить, тому ми її тримаємо. У цьому проєкті стандартну шкалу ще й скинуто, тож `p-5` просто не працюватиме
- Ширина сторінки: `max-w-page` (технічний токен розмітки, не дизайн-токен)
- Кнопки темні: `bg-ink` із текстом `text-canvas`. `accent` лише для великих слів і декору. Межа поля й контур кнопки без заливки: `ink-muted`, не `line`
- Заборонено: hex і rgb, стандартні класи Tailwind поза системою (`bg-blue-600`, `text-sm`, `text-white`), значення в квадратних дужках (`p-[13px]`)

## Компоненти
Поки немає (є лише сторінка `src/app/page.tsx`).

## Скіли
- `.claude/skills/storybook/SKILL.md`: Storybook, історії й документація компонентів
- `.claude/skills/vercel/SKILL.md`: превʼю, деплой і логи Vercel
