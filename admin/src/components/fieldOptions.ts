export default {
  base: [
    {
      name: 'options.required',
      type: 'checkbox',
      intlLabel: {
        id: 'sqleditor.field.minimap.required.label',
        defaultMessage: 'Required field',
      },
      description: {
        id: 'sqleditor.field.minimap.required.description',
        defaultMessage: "You won't be able to create an entry if this field is empty",
      },
    },
    {
      intlLabel: {
        id: 'sqleditor.field.minimap.label',
        defaultMessage: 'Minimap',
      },
      name: 'options.minimap',
      description: {
        id: 'sqleditor.field.minimap.description',
        defaultMessage: 'Show minimap when edit',
      },
      type: 'checkbox',
      defaultValue: false,
    },
    {
      intlLabel: {
        id: 'sqleditor.field.lineNumbers.label',
        defaultMessage: 'Line numbers',
      },
      description: {
        id: 'sqleditor.field.lineNumbers.description',
        defaultMessage: 'Show line numbers',
      },
      name: 'options.lineNumbers',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      intlLabel: {
        id: 'sqleditor.field.folding.label',
        defaultMessage: 'Folding',
      },
      name: 'options.folding',
      description: {
        id: 'sqleditor.field.folding.description',
        defaultMessage: 'Enable code folding',
      },
      type: 'checkbox',
      defaultValue: true,
    },
  ],
  advanced: [
    {
      intlLabel: {
        id: 'sqleditor.field.height.label',
        defaultMessage: 'Height',
      },
      name: 'options.height',
      description: {
        id: 'sqleditor.field.height.description',
        defaultMessage: 'Height of the editor in pixels',
      },
      type: 'number',
      defaultValue: 300,
    },
  ],
  // validator: () => ({
  //   height: number()
  //     .required()
  //     .min(200, {
  //       id: 'monaco.field.height.minValidation',
  //       defaultMessage: 'Height is too short! Minimum is 200',
  //     })
  //     .max(500, {
  //       id: 'monaco.field.height.maxValidation',
  //       defaultMessage: 'Height is too large! Maximum is 500',
  //     }),
  // }),
};
