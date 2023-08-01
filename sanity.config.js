import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { media } from 'sanity-plugin-media'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'

export default defineConfig({
    name: 'default',
    title: 'Sanitytest',

    projectId: 'lw8ufzav',
    dataset: 'production',

    plugins: [
        deskTool({
            structure: (S) =>
                S.list()
                .title('Content')
                .items([
                    S.listItem()
                    .title('Global')
                    .child(S.document().schemaType('globalSettings').documentId('globalSettings')),
                    ...S.documentTypeListItems().filter(item => !['globalSettings'].includes(item.getId())),
                ]),
        }),
        media(),
        visionTool(),
    ],

    schema: {
        types: schemaTypes,
    },
})