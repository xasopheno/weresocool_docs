module.exports = {
  locales: ['en', 'pt', 'pseudo'],
  pseudoLocale: 'pseudo',
  sourceLocale: 'en',
  fallbackLocales: {
    default: 'en'
  },
  catalogs: [
    {
      path: 'translations/locales/{locale}/messages',
      include: ['src/pages', 'src/components']
    }
  ],
  format: 'po'
}
