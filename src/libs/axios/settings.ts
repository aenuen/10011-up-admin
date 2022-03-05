const isDevMode = process.env.NODE_ENV === 'development'
export const apiBaseUrl = isDevMode ? 'http://localhost:10000' : 'http://localhost:10000'
export const publicPath = [/^\/public/, /^\/login/]
