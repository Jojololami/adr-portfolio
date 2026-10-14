import { isTodo, type Fill as FillValue } from "@/content/portfolio";

/**
 * Renders a content value. Unfinished values (todo("…")) render as a
 * highlighted "[…]" marker so they are obvious on preview deployments.
 */
export default function Fill({ value }: { value: FillValue }) {
  if (isTodo(value)) {
    return (
      <span className="rounded bg-placeholder px-1.5 py-px font-medium text-placeholder-foreground">
        [{value.todo}]
      </span>
    );
  }
  return <>{value}</>;
}
