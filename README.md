This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## part04 lesson06

-додатково потрібно встановити пакет cross-env
-для дебага використовуємо npm run debag
-після запуску для підключення дебагера потрібно прожати F5

## part05 lesson05
-правили документ _document.tsx (у відео він створювався з нуля у вигляді класового елемента, в новій версії next він створюється за замовчуванням)
-_document.tsx в даному випадку слугує для додавання lang="ru" до тега html (хз чи є в нього ще якесь застосування)

## part07 lesson04
-всі модифікації в цьому коміті слугують для того щоб у кастомному компоненті
Button можна було юзати рідні атрибути тегу button (як от className, onClick i т.п.)

## part08 lesson01
-- З версії 16.8 зявились hooks. Дають можливість використовувати функціональні компоненти
замість класових (окрім Error boudary і ще деякі випадки Життєвого циклу компонента)
-- Види хуків
ОСНОВНІ: useState useEffect useContext
ДОДАТКОВІ: useReducer useCallback useMemo useRef useLayoutEffect useImperativeHandle useDebugValue