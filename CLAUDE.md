@AGENTS.md

# portfolio-system

UX/UI-портфоліо Yaroslava Rozhkova. Сайт англійською, робота з Claude українською.

## Стек
- Next.js (App Router), TypeScript, npm, Tailwind v4. Токени в блоці `@theme` у `src/app/globals.css`. Шрифт Inter (latin + cyrillic) підключено в `src/app/fonts.ts`.
- Хостинг: Vercel (проєкт `portfolio-system`, тека привʼязана через `vercel link`, папка `.vercel` і `.env.local` у `.gitignore`), репозиторій https://github.com/rozhkova945/portfolio-system
- Статус деплою: `vercel ls`, деталі: `vercel inspect <адреса>` (target production і Ready). Перевірка й публікація: скіл `vercel`

## Команди
- `npm run dev`: сайт на http://localhost:3000
- `npm run storybook`: Storybook на http://localhost:6006
- `npm run build`: збірка, як на Vercel (перевіряй перед комітом)
- `npm run lint`: перевірка коду

## Структура
- `src/app/`: сторінки (`page.tsx`), `layout.tsx`, `globals.css` (токени в `@theme`), `fonts.ts`
- `src/components/<Назва>/`: компонент і його історія Storybook
- `src/stories/`: сторінки Storybook без компонента (`Tokens.mdx`)
- `docs/`: план сайту, Figma, затверджені токени

## Правила роботи з Git
- Уся робота йде в гілці `main`. Нових гілок не створюй, поки я прямо не попрошу.
- Пуш у `main` публікує сайт на Vercel: перед пушем чекай окремого «так» у чаті. Комітити можна після кожного завершеного кроку.
- Файли `.env*` не читай, не виводь і не комітимо (вони в `.gitignore`). Токенів і паролів у чат не прошу й не приймаю.

## Як працювати
- Екран збирається тільки з наявних компонентів і токенів. Якщо чогось бракує, не вигадуй: назви, чого бракує, і спитай мене.
- Новий або змінений компонент: одна історія з Controls і сторінка docs у тому ж кроці, `title` латиницею. Тимчасових сторінок-перевірок на сайті не створюй: усе дивимось у Storybook.
- Після змін перевір, що в коді немає значень поза `@theme`, і що кожен клас справді працює: після скидання палітри й шкал Tailwind мовчки ігнорує невідомі класи.
- Пояснюй простими словами, я дизайнерка-початківка.

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
Лежать у `src/components/<Назва>/`, поруч історія `<Назва>.stories.tsx` (одна, з Controls і docs).
- `Button` (`Components/Button`): варіанти `primary`, `secondary`; розміри `md`, `lg`; стани default, hover, focus, disabled через `aria-disabled` + `aria-describedby`; може бути посиланням (`href`)
- `Navigation` (`Components/Navigation`): логотип, пункти меню, кнопка дії; стани default, hover, focus, активний пункт (`activeHref`); на вузькому екрані меню відкривається поверх контенту й закривається Escape
- `Field` (`Components/Field`): текстове поле з підписом; стани default, hover, focus, заповнене, помилка (`danger` + текст під полем), disabled

## Відомі особливості
- `Button` і `Navigation` клієнтські (`"use client"`): Button вішає обробник кліку, а сторінки серверні.
- Відступів 0, 5, 10 тощо немає: класи на кшталт `inset-x-0` чи `w-32` не працюють. Для ширин бери `w-full`, `w-1/4`, `max-w-page`, для позиціювання `top-full` і `w-full`.
- У MDX-сторінках Storybook зразки з токенами клади в `<Unstyled>`, інакше Storybook перекриває розмір і шрифт.
- Після додавання нових файлів Storybook інколи не бачить нових класів Tailwind: перезапусти `npm run storybook`.

## Скіли
- `.claude/skills/storybook/SKILL.md`: Storybook, історії й документація компонентів
- `.claude/skills/vercel/SKILL.md`: превʼю, деплой і логи Vercel (продакшн лише після мого «так»)
