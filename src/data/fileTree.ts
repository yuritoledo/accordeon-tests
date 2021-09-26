export const FILE_TREE = {
  name: '/',
  children: [
    {
      name: '/test',
      children: [
        {
          name: '/test',
        },
        {
          name: '/screens',
          children: [
            {
              name: 'HomeScreen.tsx',
            },
            {
              name: 'SettingsScreen.tsx',
            },
          ],
        },
      ],
    },
    {
      name: '/home',
      children: [
        {
          name: 'config.ts',
        },
      ],
    },
  ],
}