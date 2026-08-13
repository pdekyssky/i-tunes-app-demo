import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home", end: true },
  { to: "/music", label: "Music" },
  { to: "/about", label: "About" },
] as const;

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  [
    "rounded-md px-4 py-2 text-sm font-medium transition-colors",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-400",
    isActive
      ? "bg-neutral-800 text-neutral-50"
      : "text-neutral-400 hover:bg-neutral-800/50 hover:text-neutral-100",
  ].join(" ");

const Navigation = () => {
  return (
    <nav
      aria-label="Main navigation"
      className="flex w-full items-center justify-center px-4 py-3 sm:px-6"
    >
      <div className="inline-flex gap-0.5 rounded-lg border border-neutral-800 bg-neutral-950/80 p-1">
        {navItems.map(({ to, label, ...rest }) => (
          <NavLink key={to} to={to} className={navLinkClass} {...rest}>
            {label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
