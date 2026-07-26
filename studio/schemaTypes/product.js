export default {
  name: 'product',
  title: 'Produk Herbal',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nama Produk',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'price',
      title: 'Harga',
      type: 'string',
      description: 'Format: Rp 250.000',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'size',
      title: 'Ukuran',
      type: 'string',
      description: 'Format: 500 gram, 100 ml, dll',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'shortDesc',
      title: 'Deskripsi Singkat',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'desc',
      title: 'Deskripsi Lengkap',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'benefits',
      title: 'Manfaat',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.min(1).max(5),
    },
    {
      name: 'image',
      title: 'Gambar Produk',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'alt',
      title: 'Alt Text Gambar',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'order',
      title: 'Urutan',
      type: 'number',
      description: 'Urutan tampil di website (1 = paling atas)',
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
