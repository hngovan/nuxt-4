export type Article = {
  id: string
  title: string
  status: 'draft' | 'public'
  author: string
  date: string
  locale: 'en' | 'ja' | 'vn'
}
