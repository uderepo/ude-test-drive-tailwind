import { useContext } from 'react';
import { ThemeContext } from '../../shared/theme/model/context/context';

/**
 * Токен в формах Tailwind на токенах проекта (tokens.css): var(--x) у элемента, короткое имя Tailwind поверх токена
 * (text-primary, bg-surface, p-md — @theme в index.css), произвольное значение с токеном другого корня (ref-color, typo),
 * цепочка темы, неизвестное имя. Случай из step39-style-source (Tokens).
 */
export default function ScreenTwTokens() {
  const theme = useContext(ThemeContext);
  return (
    <main className="p-8 flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Tailwind tokens</h1>

      <h2 style={{ color: 'var(--sys-primary)' }}>Token var sys-primary</h2>

      <h2 className="text-primary">Tailwind text-primary</h2>

      <div className="p-md bg-surface border">Tailwind p-md on surface</div>

      <p className="text-[var(--ref-color-blue-500)] text-[length:var(--typo-body-font-size)]">Arbitrary ref-color and typo</p>

      <h3 style={{ color: theme?.sys.onSurface }}>Theme chain sys onSurface</h3>

      <h4 style={{ color: 'var(--legacy-ink)' }}>Unknown name legacy-ink</h4>
    </main>
  );
}
