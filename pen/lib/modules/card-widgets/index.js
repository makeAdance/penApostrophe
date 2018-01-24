module.exports = {
  extend: 'apostrophe-widgets',
  label: 'Card',
  addFields: [
    {
      name: 'header',
      type: 'string',
      label: 'Header',
    },
    {
      name: 'title',
      type: 'string',
      label: 'Title',
    },
    {
      name: 'text',
      type: 'string',
      label: 'Text',
    },

    {
      type: 'select',
      name: 'border',
      label: 'Border',
      choices: [
        {
          label: 'Primary',
          value: 'border-primary',
        },
        {
          label: 'Secondary',
          value: 'border-secondary'
        },
        {
          label: 'Success',
          value: 'border-success'
        },
        {
          label: 'Danger',
          value: 'border-danger'
        },
        {
          label: 'Warning',
          value: 'border-warning'
        },
        {
          label: 'Info',
          value: 'border-info'
        },
        {
          label: 'Light',
          value: 'border-light'
        },
        {
          label: 'Dark',
          value: 'border-dark'
        }

      ]
    },

    {
      type: 'select',
      name: 'textColor',
      label: 'Text Colour',
      choices: [
        {
          label: 'Primary',
          value: 'text-primary',
        },
        {
          label: 'Secondary',
          value: 'text-secondary'
        },
        {
          label: 'Success',
          value: 'text-success'
        },
        {
          label: 'Danger',
          value: 'text-danger'
        },
        {
          label: 'Warning',
          value: 'text-warning'
        },
        {
          label: 'Info',
          value: 'text-info'
        },
        {
          label: 'Light',
          value: 'text-light'
        },
        {
          label: 'Dark',
          value: 'text-dark'
        }

      ]
    }

  ]
};
