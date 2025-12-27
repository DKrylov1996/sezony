export default function SectionHeading({
  eyebrow,
  title,
  subtitle
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="space-y-3">
      {eyebrow ? (
        <div className="flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-mint-500">
          <span className="accent-dot" />
          <span>{eyebrow}</span>
        </div>
      ) : null}
      <h2 className="text-3xl font-medium text-mint-500 md:text-4xl">{title}</h2>
      {subtitle ? (
        <p className="max-w-3xl text-base text-leaf-200/80 md:text-lg">{subtitle}</p>
      ) : null}
    </div>
  );
}
