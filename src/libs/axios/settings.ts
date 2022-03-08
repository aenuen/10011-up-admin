const isDevMode = process.env.NODE_ENV === 'development'
export const apiBaseUrl = isDevMode ? 'http://localhost:10010' : 'http://localhost:10010'
export const publicPath = [/^\/public/, /^\/login/]
