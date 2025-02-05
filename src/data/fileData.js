export const fileData = [
  {
    label: 'src',
    id: 1,
    value: 'src',
    children: [
      {
        label: 'components',
        id: 1,

        value: 'src/components',
        children: [
          {
            id: 1,
            label: 'Accordion.tsx',
            value: 'src/components/Accordion.tsx',
            content: 'this is accordian file',
          },
          { id: 2, label: 'Tree.tsx', value: 'src/components/Tree.tsx' },
          {
            id: 3,
            label: 'Button.tsx',
            value: 'src/components/Button.tsx',
          },
        ],
      },
    ],
  },
  {
    label: 'node_modules',
    value: 'node_modules',
    children: [
      {
        label: 'react',
        value: 'node_modules/react',
        children: [
          { label: 'index.d.ts', value: 'node_modules/react/index.d.ts' },
          { label: 'package.json', value: 'node_modules/react/package.json' },
        ],
      },
      {
        label: '@mantine',
        value: 'node_modules/@mantine',
        children: [
          {
            label: 'core',
            value: 'node_modules/@mantine/core',
            children: [
              {
                label: 'index.d.ts',
                value: 'node_modules/@mantine/core/index.d.ts',
              },
              {
                label: 'package.json',
                value: 'node_modules/@mantine/core/package.json',
              },
            ],
          },
          {
            label: 'hooks',
            value: 'node_modules/@mantine/hooks',
            children: [
              {
                label: 'index.d.ts',
                value: 'node_modules/@mantine/hooks/index.d.ts',
              },
              {
                label: 'package.json',
                value: 'node_modules/@mantine/hooks/package.json',
              },
            ],
          },
          {
            label: 'form',
            value: 'node_modules/@mantine/form',
            children: [
              {
                label: 'index.d.ts',
                value: 'node_modules/@mantine/form/index.d.ts',
              },
              {
                label: 'package.json',
                value: 'node_modules/@mantine/form/package.json',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: 'package.json',
    value: 'package.json',
  },
  {
    label: 'tsconfig.json',
    value: 'tsconfig.json',
  },
];
