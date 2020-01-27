const translations = {
  ru: {
    search: 'Поиск',
    table: 'Таблица',
    preview: 'Превью',
    view: 'Вид'
  },

  en: {
    search: 'Search',
    table: 'Table',
    preview: 'Preview',
    view: 'View'
  }
}

export const languages = [
  {code: 'ru', name: 'Русский'},
  {code: 'en', name: 'English'},
]

export const translate = (langCode, text) => translations[langCode][text];

