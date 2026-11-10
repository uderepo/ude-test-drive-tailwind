import './screen36.css';
import { PassCard } from '../../components/PassCard/Component';
import { DropCard } from '../../components/DropCard/Component';

const marginSpread = { margin: '3px' };
const borderSpread = { border: '2px solid rgb(0, 0, 200)' };
/**
 * «Add …» на проекте с Tailwind: свойство задано классом Tailwind / у элемента / обоими / спредом / нигде; раскладка flex/grid/
 * inline-flex классами; padding классом Tailwind. Случай из inspector-3.6b (Screen-home), классы как есть — Tailwind в проекте.
 */
export default function ScreenTwAddProps() {
  return (
        <main style={{ padding: '24px' }}>
              <h1 className="rule-color">RuleColor</h1>
              <h2 className="no-color">NoColor</h2>
              {/* 3.6б Add margin: class / inline / both / spread / none */}
              <p className="m-4">MarginClass</p>
              <p style={{ margin: '8px' }}>MarginInline</p>
              <p className="m-4" style={{ margin: '8px' }}>MarginBoth</p>
              <p style={{ ...marginSpread }}>MarginSpread</p>
              <p>MarginNone</p>
              {/* KT3б п.5: Remove margin + undo */}
              <p style={{
                    marginTop: 4
              }}>MarginTop4</p>
              <p style={{
                    margin: 8
              }}>MarginNum8</p>
              {/* Add border */}
              <p className="css-border">BorderClass</p>
              <p style={{ border: '1px solid rgb(0, 128, 0)' }}>BorderInline</p>
              <p className="css-border" style={{ border: '1px solid rgb(0, 128, 0)' }}>BorderBoth</p>
              <p style={{ ...borderSpread }}>BorderSpread</p>
              <p>BorderNone</p>
              {/* Add corner radius */}
              <p className="css-radius">RadiusClass</p>
              <p style={{ borderRadius: '8px' }}>RadiusInline</p>
              <p>RadiusNone</p>
              {/* Add fill */}
              <p className="css-fill">FillClass</p>
              <p style={{ backgroundColor: 'rgb(255, 200, 0)' }}>FillInline</p>
              <p>FillNone</p>
              {/* Layout: class flex / grid / inline-flex; controls */}
              <div className="flex gap-2">FlexClass</div>
              <div className="grid">GridClass</div>
              <div className="inline-flex">InlineFlexClass</div>
              <div>DivPlain</div>
              <div style={{ display: 'flex' }}>FlexNoDir</div>
              {/* Tailwind padding class (acceptance: p-4 → no Add padding fields as class-set) */}
              <p className="text-lg text-red-500 p-4">TwPad</p>
              <p className="typo-lg">TypoClass</p>
              <div>BareTag</div>
              <PassCard>PassCard</PassCard>
              <DropCard>DropCard</DropCard>
        </main>
  );
}
