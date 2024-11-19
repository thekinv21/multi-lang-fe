import { ReactNode } from 'react'
import { ReactQueryProvider } from './ReactQueryProvider'

interface IBaseProvider {
	children: ReactNode
}

export function BaseProvider({ children }: IBaseProvider) {
	return <ReactQueryProvider>{children}</ReactQueryProvider>
}
