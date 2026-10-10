import type { KeyboardEvent } from "react";

export function submitOnEnter(event: KeyboardEvent<HTMLInputElement>) {
  if (event.key !== "Enter" || event.nativeEvent.isComposing) return;
  event.preventDefault();
  if (!event.repeat) event.currentTarget.form?.requestSubmit();
}
