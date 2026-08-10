import { stackCategories } from "@/content/stack";

export function StackSection() {
  return (
    <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
      {stackCategories.map((category) => (
        <div key={category.title}>
          <h3 className="mb-4 inline-block border-b border-border-slate pb-2 font-mono-label text-mono-label text-text-primary">
            {category.title.toUpperCase()}
          </h3>
          <ul className="space-y-3 font-mono-code text-mono-code text-text-secondary">
            {category.items.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
