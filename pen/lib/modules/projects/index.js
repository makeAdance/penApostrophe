module.exports = {

    extend: 'apostrophe-pieces',
    name: 'project',
    label: 'Project',
    pluralLabel: 'Projects',
    addFields: [
        {
            name: 'title',
            label: 'Project title',
            type: 'string',
            required: true
        }
    ]


};