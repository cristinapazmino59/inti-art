export type Theme = "dark" | "light" | "system";

export interface ThemeConfig {
    theme: Theme;
    systemTheme?: Theme;
}