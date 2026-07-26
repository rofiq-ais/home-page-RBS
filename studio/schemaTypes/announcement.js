export default {
  name: 'announcement',
  title: 'Running Text',
  type: 'document',
  fields: [
    {
      name: 'text',
      title: 'Teks',
      type: 'string',
      description: 'Teks yang ditampilkan di running text (boleh pakai emoji)',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'active',
      title: 'Aktif',
      type: 'boolean',
      description: 'Tampilkan teks ini di website',
      initialValue: true,
    },
    {
      name: 'order',
      title: 'Urutan',
      type: 'number',
      description: 'Urutan tampil (1 = paling kiri)',
      initialValue: 1,
    },
  ],
  orderings: [
    {
      title: 'Urutan',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
}
