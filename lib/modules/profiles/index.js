module.exports = {
    extend: 'apostrophe-pieces',
    name: 'profile',
    label: 'Profile',
    pluralLabel: 'Profiles',
    addFields: [
        {
            name: 'title',
            label: 'Username',
            type: 'string',
            required: true
        },
        {
            name: 'firstName',
            label: 'First Name',
            type: 'string',
            required: true
        },
        {
            name: 'lastName',
            label: 'Last Name',
            type: 'string',
            required: true
        },
        {
            name: 'body',
            label: 'Biography',
            type: 'area',
            options: {
                widgets: {
                    'apostrophe-rich-text': {
                        toolbar: [ 'Bold', 'Italic', 'Link', 'Unlink' ]
                    },
                    'apostrophe-images': {}
                }
            }
        },
        {
            name: 'thumbnail',
            label: 'Thumbnail',
            type: 'singleton',
            widgetType: 'apostrophe-images',
            options: {
                limit: 1,
                minSize: [ 200, 200 ],
                aspectRatio: [ 1, 1 ]
            }
        }
    ]
};