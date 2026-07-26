export default {
  name: 'article',
  title: 'Artikel',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Judul',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Kategori',
      type: 'string',
      options: {
        list: [
          { title: 'Tips Kesehatan', value: 'Tips Kesehatan' },
          { title: 'Pengumuman Klinik', value: 'Pengumuman Klinik' },
          { title: 'Edukasi', value: 'Edukasi' },
        ],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'content',
      title: 'Konten',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'date',
      title: 'Tanggal',
      type: 'string',
      description: 'Format: 10 Okt 2023',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'publishedAt',
      title: 'Tanggal Publikasi',
      type: 'datetime',
    },
  ],
  orderings: [
    {
      title: 'Published Date',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
}
