import { HiCamera } from 'react-icons/hi'
export default {
    name: 'photo',
    title: 'photo',
    type: 'document',
    icon: HiCamera,
    fields: [
        {
            name: "name",
            title: "title for the picture",
            type: 'string',
            description: 'name of photo'
        },
        {
            name: "slug",
            title: "slug",
            type: 'slug',
            options: {
                source: 'name',
                maxlength: 100
            },
        },
        {
            name: "image",
            title: "image",
            type: 'image',
            options: {
             hotspot: true
            },
        },
    ]
}
