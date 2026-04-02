import { QueryClientProvider } from "@tanstack/react-query";
import {queryClient} from '../lib/react-query'

type Props = {
    children: React.ReactNode
}

export const AppProvider = ({children}: Props) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}