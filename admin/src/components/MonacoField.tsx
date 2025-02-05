import { useEffect } from 'react';
import { type FieldValue, type InputProps } from '@strapi/strapi/admin';
import { editor } from 'monaco-editor';
import { LanguageIdEnum, setupLanguageFeatures } from 'monaco-sql-languages';
import { debounce } from 'lodash';
import { Box, Field } from '@strapi/design-system';

type MonacoFieldProps = InputProps &
  FieldValue & {
    attribute: {
      options: {
        language: string;
        minimap: boolean;
        required: boolean;
        lineNumbers: boolean;
        folding: boolean;
        height?: number;
      };
    };
  };

const MonacoField = (props: MonacoFieldProps) => {
  const { disabled, name, onChange, value, attribute } = props;
  const sanitizedFieldId = `monaco-field-${name.replace(/[^a-zA-Z0-9-_]/g, '-')}`;
  const options = attribute.options;

  useEffect(() => {
    setupLanguageFeatures(LanguageIdEnum.PG, {
      completionItems: {
        enable: true,
        triggerCharacters: [' ', '.'],
      },
    });

    const element = document.querySelector(`#${sanitizedFieldId}`)! as HTMLElement;
    const editorOptions: any = {
      value: value,
      language: LanguageIdEnum.PG,
      automaticLayout: true,
      readOnly: disabled,
      minimap: { enabled: options.minimap },
      lineNumbers: options.lineNumbers ? 'on' : 'off',
      lineNumbersMinChars: 3,
      renderLineHighlight: 'none',
      folding: options.folding,
      glyphMargin: false,
    };

    const editorInstance = editor.create(element, editorOptions);
    const handleChange = debounce(() => {
      onChange(name, editorInstance.getValue());
    }, 500);

    editorInstance.onDidChangeModelContent(handleChange);

    return () => {
      editorInstance.dispose();
    };
  }, []);

  const height = `${options.height || 300}px`;

  const style = {
    minHeight: height,
    border: '1px solid #dcdce4',
    borderRadius: '4px',
    overflow: 'hidden',
    padding: '0',
  };

  return (
    <Field.Root required={options.required} disabled={disabled}>
      <Field.Label>{name}</Field.Label>
      <Box padding={4} hasRadius={true} style={style}>
        <div id={sanitizedFieldId} className={'monaco-field-editor'} style={{ height }}></div>
      </Box>
    </Field.Root>
  );
};

export default MonacoField;
