export * from "./format";
export * from "./render";
export * from "./waiting";
export * from "./constants";

export const noop = () => {};

/**
 * Tailwind
 */
export const classNames = (...classes: any[]) => classes.filter(Boolean).join(" ");

/**
 * SWR
 */
export const fetcher = (...args: [string]) => fetch(...args).then((res) => res.json());
