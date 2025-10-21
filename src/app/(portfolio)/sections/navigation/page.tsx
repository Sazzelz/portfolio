type NavItem = {
  id: string;
  label: string;
};

type NavigationProps = {
  items: NavItem[];
};

export default function Navigation({ items }: NavigationProps) {
  return (
    <nav className="sticky top-4 z-10 mx-auto w-full max-w-3xl rounded-full border border-neutral-200 bg-white/40  px-4 py-2 shadow-sm backdrop-blur transition-transform">
      <ul className="flex flex-wrap justify-center gap-3 text-sm font-medium uppercase tracking-[0.3em] text-neutral-500">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="rounded-full px-3 py-1 transition hover:bg-rose-900 hover:text-white"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
