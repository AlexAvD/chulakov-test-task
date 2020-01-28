const translations = {
  ru: {
    'search-placeholder': 'Поиск',

    'view-title': 'Вид',
    'view-item-table': 'Таблица',
    'view-item-preview': 'Превью',
    
    'filter-sort-title': 'Сортировка',
    'filter-sort-field-id': 'ID',
    'filter-sort-field-name': 'Имя',
    'filter-sort-field-age': 'Возраст',

    'filter-order-title': 'Порядок',
    'filter-order-ascending': 'По возрастанию',
    'filter-order-descending': 'По убыванию',

    'years': [ 'лет', 'год', 'года' ]
  },

  en: {
    'search-placeholder': 'Search',

    'view-title': 'View',
    'view-item-table': 'Table',
    'view-item-preview': 'Preview',
    
    'filter-sort-title': 'Sort by',
    'filter-sort-field-id': 'ID',
    'filter-sort-field-name': 'Name',
    'filter-sort-field-age': 'Age',

    'filter-order-title': 'Order by',
    'filter-order-ascending': 'Ascending',
    'filter-order-descending': 'Descending',

    'years': 'years'
  }
}

export const languages = [
  {code: 'ru', name: 'Русский'},
  {code: 'en', name: 'English'},
]

export const translate = (langCode, text) => translations[langCode][text];

