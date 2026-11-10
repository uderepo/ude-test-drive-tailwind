/** Случай из step39-style-source (Visibility). Скрытие: классом, атрибутом hidden, классом с условием ширины; видимый для сравнения. */
export default function ScreenTwVisibility() {
  return (
    <main className="p-8 flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Visibility</h1>

      <div className="hidden p-4">Hidden by class</div>

      <div hidden>Hidden by attribute</div>

      <div className="md:hidden p-4 bg-amber-100">Hidden from md</div>

      <div className="p-4 bg-white">Visible control</div>
    </main>
  );
}
