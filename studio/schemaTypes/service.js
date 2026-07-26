export default {
  name: 'service',
  title: 'Layanan Terapi',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nama Layanan',
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
      description: 'Format: Rp 150.000 atau Mulai Rp 50.000',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'duration',
      title: 'Durasi',
      type: 'string',
      description: 'Format: ±45 menit',
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
      title: 'Gambar',
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
