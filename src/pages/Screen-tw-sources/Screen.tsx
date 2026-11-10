import styles from './Screen.module.css';
import './tw-sources.css';

/** Случай из step39-style-source (Sources), формы Tailwind как есть; строка «чужой лист» (Bootstrap) снята — пакета в проекте нет.
 *  Откуда значение: класс Tailwind, у элемента, нигде, класс + у элемента, !important, CSS-модуль, правило CSS, наследование, чужой лист. */
export default function ScreenTwSources() {
  return (
    <main className="p-8 flex flex-col gap-4 bg-surface">
      <h1 className="text-2xl font-bold">Style sources</h1>

      <div className="p-4 bg-white rounded-lg">Tailwind p-4 card</div>

      <div style={{ padding: '24px', backgroundColor: '#fef3c7' }}>Inline padding 24</div>

      <div>Nothing set block</div>

      <div className="p-4 bg-white" style={{ padding: '10px' }}>Class p-4 and inline 10</div>

      <div className="!p-2 bg-white" style={{ padding: '30px' }}>Important p-2 over inline 30</div>

      <div className={styles.card}>CSS module card</div>

      <div className="plain-rule boost">Plain CSS rule</div>

      <div style={{ color: '#065f46' }}>
        <p>Inherited green text</p>
      </div>

      <p>Default text</p>

      <section>
        <span>Span in plain block</span>
      </section>

      <div className="flex gap-2">
        <span>Span in flex</span>
      </div>

    </main>
  );
}
