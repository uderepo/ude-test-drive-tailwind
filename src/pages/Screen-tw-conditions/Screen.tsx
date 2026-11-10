/** Случай из step39-style-source (Conditions). Значения с условием: состояние (hover/focus/disabled) и ширина (md:/lg:). */
export default function ScreenTwConditions() {
  return (
    <main className="p-8 flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Conditions</h1>

      <button className="bg-white hover:bg-red-500 p-2 md:p-8 border">Hover red, md p-8</button>

      <div className="p-2 lg:p-6 bg-slate-100">Width only lg p-6</div>

      <input className="border p-1 focus:border-blue-500" placeholder="Focus border blue" />

      <button className="p-2 bg-emerald-200 disabled:bg-gray-300" disabled>
        Disabled gray fill
      </button>
    </main>
  );
}
