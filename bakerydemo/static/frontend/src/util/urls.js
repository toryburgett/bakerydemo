export const baseUrl = (process.env.WAGTAIL_URL) ? (process.env.WAGTAIL_URL) : 'http://localhost:8000'

export const getMediaUrl = url => `${baseUrl}/media/${url}`