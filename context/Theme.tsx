import { ThemeProviderProps, ThemeProvider as NextThemesProvider } from 'next-themes'

function ThemeProvider({children, ...props}:ThemeProviderProps) {

  return (
    <NextThemesProvider {...props}>{children}</NextThemesProvider>
  )
}

export default ThemeProvider