import { GlobalStyle } from './ThemeProvider.style'

interface ThemeProviderProps {
    children: React.ReactNode
}

export function ThemeProvider(props: ThemeProviderProps) {
    return <div>
        <GlobalStyle/>
        {props.children}
    </div> 
}