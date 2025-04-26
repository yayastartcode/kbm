import type { CollectionConfig } from 'payload'

export const Videos: CollectionConfig = {
  slug: 'videos',
  admin: {
    useAsTitle: 'title',
    description: 'Recent work videos gallery',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        description: 'Video title',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      admin: {
        description: 'Short description of the video (optional)',
      },
    },
    {
      name: 'videoFile',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'Upload video file (MP4 recommended)',
      },
    },
    {
      name: 'thumbnail',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'Thumbnail image for the video',
      },
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Feature this video on the homepage',
      },
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
      admin: {
        description: 'Display order (lower numbers appear first)',
      },
    },
    {
      name: 'client',
      type: 'text',
      admin: {
        description: 'Client name (optional)',
      },
    },
    {
      name: 'completionDate',
      type: 'date',
      admin: {
        description: 'Project completion date (optional)',
        date: {
          pickerAppearance: 'dayOnly',
          displayFormat: 'MMM d, yyyy',
        },
      },
    },
  ],
  timestamps: true,
}
