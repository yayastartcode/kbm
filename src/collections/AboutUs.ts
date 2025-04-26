import type { CollectionConfig } from 'payload'

export const AboutUs: CollectionConfig = {
  slug: 'about-us',
  admin: {
    useAsTitle: 'title',
    description: 'Configure the About Us section',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'We are leaders in the building sector',
      admin: {
        description: 'Main heading for the About Us section',
      },
    },
    {
      name: 'subtitle',
      type: 'text',
      required: true,
      defaultValue: 'WHO WE ARE',
      admin: {
        description: 'Subtitle displayed above the main heading',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      defaultValue: 'Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.',
      admin: {
        description: 'Main descriptive text for the About Us section',
      },
    },
    {
      name: 'features',
      type: 'array',
      required: true,
      minRows: 1,
      maxRows: 5,
      admin: {
        description: 'Bullet points highlighting key features or benefits',
      },
      fields: [
        {
          name: 'feature',
          type: 'text',
          required: true,
        },
      ],
      defaultValue: [
        { feature: 'Individual approach' },
        { feature: 'Technical architecture' },
        { feature: 'Customer support' },
      ],
    },
    {
      name: 'buttonText',
      type: 'text',
      required: true,
      defaultValue: 'About Us',
      admin: {
        description: 'Text displayed on the call-to-action button',
      },
    },
    {
      name: 'buttonLink',
      type: 'text',
      required: true,
      defaultValue: '/about',
      admin: {
        description: 'URL the button links to',
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'Image displayed in the About Us section',
      },
    },
    {
      name: 'visi',
      type: 'textarea',
      required: true,
      defaultValue: 'Menjadi perusahaan kontraktor dan supplier terkemuka yang dikenal karena kualitas, integritas, dan inovasi dalam setiap proyek yang kami tangani.',
      admin: {
        description: 'Visi perusahaan',
      },
    },
    {
      name: 'misi',
      type: 'textarea',
      required: true,
      defaultValue: '- Memberikan layanan berkualitas tinggi dengan standar keamanan dan profesionalisme terbaik\n- Mengembangkan hubungan jangka panjang dengan klien melalui kepercayaan dan hasil kerja yang memuaskan\n- Menerapkan teknologi dan metode terkini untuk meningkatkan efisiensi dan kualitas pekerjaan\n- Berkontribusi positif terhadap masyarakat dan lingkungan dalam setiap proyek yang kami kerjakan',
      admin: {
        description: 'Misi perusahaan (daftar poin-poin misi, gunakan format bullet points dengan tanda "-" di awal setiap baris)',
      },
    },
    {
      name: 'strukturOrganisasiCover',
      type: 'upload',
      relationTo: 'media',
      required: false,
      admin: {
        description: 'Cover image for Struktur Organisasi section (landscape, full width)',
      },
    },
    {
      name: 'strukturOrganisasiImage',
      type: 'upload',
      relationTo: 'media',
      required: false,
      admin: {
        description: 'Organizational structure chart image',
      },
    },
  ],
  timestamps: true,
}
