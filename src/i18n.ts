import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

import enJSON from '@/locales/en/translation.json'
import trJSON from '@/locales/tr/translation.json'

i18n
	.use(Backend)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		interpolation: {
			escapeValue: false
		},
		resources: {
			en: {
				...enJSON
			},
			tr: {
				...trJSON
			}
		},
		lng: 'tr',
		debug: false
	})

export default i18n
