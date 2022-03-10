import defaultSettings from '@/settings'

const title = defaultSettings.title || 'Video Admin'

export default (pageTitle: string) => pageTitle ? `${pageTitle} - ${title}` : `${title}`
