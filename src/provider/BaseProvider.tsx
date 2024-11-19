import { ReactNode } from 'react'
import { ReactQueryProvider } from './ReactQueryProvider'

import '@/i18n'

interface IBaseProvider {
	children: ReactNode
}

export function BaseProvider({ children }: IBaseProvider) {
	return <ReactQueryProvider>{children}</ReactQueryProvider>
}
