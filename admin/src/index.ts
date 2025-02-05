import { PLUGIN_ID } from './pluginId';
import { Initializer } from './components/Initializer';
import fieldOptions from './components/fieldOptions';

export default {
  register(app: any) {
    app.customFields.register({
      name: 'sql-editor-text',
      pluginId: PLUGIN_ID,
      type: 'text',
      intlLabel: {
        id: 'sqleditor.field.label',
        defaultMessage: 'SQL Editor',
      },
      intlDescription: {
        id: 'sqleditor.field.description',
        defaultMessage: 'edit SQL queries',
      },
      components: {
        Input: async () => await import('./components/MonacoField'),
      },
      options: fieldOptions,
    });

    app.registerPlugin({
      id: PLUGIN_ID,
      initializer: Initializer,
      isReady: false,
      name: 'SQL Editor',
    });
  },

  async registerTrads({ locales }: { locales: string[] }) {
    return Promise.all(
      locales.map(async (locale) => {
        try {
          const { default: data } = await import(`./translations/${locale}.json`);
          return { data, locale };
        } catch {
          return { data: {}, locale };
        }
      })
    );
  },
};
