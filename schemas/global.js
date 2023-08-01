import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'globalSettings',
    title: 'Global',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Website Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'previewImage',
            title: 'Preview Image',
            type: 'image',

            options: {
                hotspot: true,
                metadata: ['blurhash', 'lqip', 'palette', 'exif', 'location'],
            },
        }),
        defineField({
            name: 'intro',
            title: 'Intro',
            type: 'text',
        }),

        defineField({
            title: 'website URL',
            name: 'website_url',
            type: 'string',
        }),
    ],
    preview: {
        select: {
            title: 'title',
        },
    },
})