import DefaultLayout from "./DefaultLayout";
export const Layouts = {
        Default: DefaultLayout,
};
export type LayoutKeys = keyof typeof Layouts; // "Main" | "Admin"

