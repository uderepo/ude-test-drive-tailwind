import clsx from 'clsx';

const preset = { padding: '14px', backgroundColor: '#e0f2fe' };
const boxProps = { className: 'p-6 bg-slate-100', title: 'from props' };
const styles = { card: { padding: '12px', border: '1px solid #94a3b8' } };

/** Случай из step39-style-source (Unreadable), clsx и классы Tailwind как есть. Выражение, спред style={{...x}}, спред {...props}, класс функцией, стиль из объекта. */
export default function ScreenTwUnreadable() {
  const items = ['a', 'b', 'c'];
  const highlighted = items.length > 2;
  const accentColor = highlighted ? '#b91c1c' : '#1d4ed8';
  const gap = 8;
  return (
    <main className="p-8 flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Unreadable forms</h1>

      <h2 style={{ color: accentColor }}>Expression color</h2>

      <div style={{ padding: gap * 2, backgroundColor: '#fafafa' }}>Expression padding</div>

      <div style={{ ...preset }}>Spread style preset</div>

      <div {...boxProps}>Spread props box</div>

      <div className={clsx('p-3', highlighted && 'bg-emerald-100')}>clsx classes</div>

      <div style={styles.card}>Style from object</div>
    </main>
  );
}
