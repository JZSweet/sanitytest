import { defineField, defineType } from 'sanity'


export default defineType({
    name: 'project',
    title: 'Projects',
    type: 'document',
    fields: [

        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'mainImage',
            title: 'Main image',
            type: 'image',

            options: {
                hotspot: true,
                metadata: ['blurhash', 'lqip', 'palette', 'exif', 'location'],
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            title: 'Color',
            name: 'color',
            type: 'string',
            options: {
                list: [
                    'pink',
                    'yellow',
                    'purple',
                ],
            },
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: 'description',
            title: 'Description',
            type: 'blockContent',
        }),

    ],
    preview: {
        select: {
            title: 'title',
            media: 'mainImage',
        },
    },
})