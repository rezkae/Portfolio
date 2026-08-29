type Fact = {
  label: string;
  value: string;
};

/**
 * Compact "most important info" highlight strip — one bordered row of
 * label/value facts (Drei-style stat bar), responsive down to one column.
 */
export default function FactStrip({ items }: { items: Fact[] }) {
  return (
    <div className="border-t border-line">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, index) => (
          <div
            key={item.label}
            className={`border-line p-4 sm:p-6 md:p-8 ${
              index % 2 === 0 ? "sm:border-r" : ""
            } ${index < items.length - 1 ? "border-b" : ""} ${
              index >= 2 ? "sm:border-b-0" : ""
            } lg:border-b-0 ${
              index < items.length - 1 ? "lg:border-r" : ""
            }`}
          >
            <span className="eyebrow block text-muted">{item.label}</span>
            <p className="mt-1 font-display text-lg font-bold text-paper sm:text-xl">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
