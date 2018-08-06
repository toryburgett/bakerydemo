export const baseUrl = (process.env.GATSBY_WAGTAIL_URL) ? (process.env.GATSBY_WAGTAIL_URL) : 'http://localhost:8000'

export const getMediaUrl = url => `${baseUrOl}/media/${url}`