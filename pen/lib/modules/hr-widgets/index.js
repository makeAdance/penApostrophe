module.exports = {        
  extend: 'apostrophe-widgets',        
  label: 'Hr',
  addFields: [
    {
      name: 'marginTop',
      label: 'Margin Top',
      type: 'integer'
    },
    {
      name: 'marginBottom',
      label: 'Margin Bottom',
      type: 'integer'
    },
    {
      name: 'hr',
      label: 'Horizontal Line',
      type: 'boolean'
    },
  ]        
};