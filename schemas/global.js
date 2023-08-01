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
            name: 'greeting',
            title: 'Greeting',
            type: 'string',
        }),
        defineField({
            name: 'intro',
            title: 'Intro',
            type: 'text',
        }),
        defineField({
            title: 'Phone Number',
            name: 'phone',
            type: 'string',
        }),
        defineField({
            title: 'Email',
            name: 'email',
            type: 'string',
        }),
        defineField({
            title: 'Facebook URL',
            name: 'facebook_url',
            type: 'string',
        }),
        defineField({
            title: 'Instagram URL',
            name: 'instagram_user',
            type: 'string',
        }),
    ],
    preview: {
        select: {
            title: 'title',
        },
    },
})