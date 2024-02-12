module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        editor: '0px 8px 12px #0000000F',
      },
    },
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      red: '#FF0000',
      tints: {
        'forest-green': {
          'tint-1': '#577434',
          'tint-2': '#738B55',
          'tint-3': '#8FA277',
          'tint-4': '#ABB999',
          'tint-5': '#C7D0BB',
          'tint-6': '#E3E7DD',
        },
        'teal-mist': {
          'tint-1': '#18AEBB',
          'tint-2': '#3EBBC6',
          'tint-3': '#65C9D1',
          'tint-4': '#8BD6DD',
          'tint-5': '#B2E4E8',
          'tint-6': '#D8F1F3',
        },
        'leaf-green': {
          'tint-1': '#A3A436',
          'tint-2': '#B2B357',
          'tint-3': '#C1C279',
          'tint-4': '#D1D19A',
          'tint-5': '#E0E0BC',
          'tint-6': '#EFEFDD',
        },
        'jungle-green': {
          'tint-1': '#314D25',
          'tint-2': '#536A49',
          'tint-3': '#75886D',
          'tint-4': '#98A692',
          'tint-5': '#BAC3B6',
          'tint-6': '#DCE1DA',
        },
        'battleship-grey': {
          'tint-1': '#949A92',
          'tint-2': '#A5AAA4',
          'tint-3': '#B7BBB6',
          'tint-4': '#C9CCC8',
          'tint-5': '#DBDDDA',
          'tint-6': '#EDEEEC',
        },
      },
      shades: {
        'forest-green': {
          'shade-1': '#577434',
          'shade-2': '#3A4D22',
          'shade-3': '#3A4D22',
          'shade-4': '#2B3A1A',
          'shade-5': '#1D2611',
          'shade-6': '#0E1308',
        },
        'teal-mist': {
          'shade-1': '#18AEBB',
          'shade-2': '#14919B',
          'shade-3': '#10747C',
          'shade-4': '#0C575D',
          'shade-5': '#083A3E',
          'shade-6': '#041D1F',
        },
        'leaf-green': {
          'shade-1': '#A3A436',
          'shade-2': '#87882D',
          'shade-3': '#6C6D24',
          'shade-4': '#51521B',
          'shade-5': '#363612',
          'shade-6': '#1B1B09',
        },
        'jungle-green': {
          'shade-1': '#314D25',
          'shade-2': '#28401E',
          'shade-3': '#203318',
          'shade-4': '#182612',
          'shade-5': '#10190C',
          'shade-6': '#080C06',
        },
        'battleship-grey': {
          'shade-1': '#949A92',
          'shade-2': '#7B8079',
          'shade-3': '#626661',
          'shade-4': '#4A4D49',
          'shade-5': '#313330',
          'shade-6': '#181918',
        },
      },
      data: {
        'color-1': '#DFE566',
        'color-2': '#F7A47B',
        'color-3': '#79D4F1',
        'color-4': '#9092BE',
        'color-5': '#FBD07B',
        'color-6': '#AC9A81',
        'color-7': '#A8A8A9',
        'color-8': '#F4A3A0',
        'color-9': '#B0E195',
        'color-10': '#BA80C6',
        'color-11': '#FFB302',
        'color-12': '#E93E3E',
        'color-13': '#FFF7E5',
        'color-14': '#E3E7DD',
        'color-15': '#FDEBEB',
        'color-16': '#577434',
      },
      snacks: {
        success: '#00A73314',
        error: '#FDEBEB',
        warn: '#FFF7E5',
        info: '#E8F8FD',
        borders: {
          success: '#00A733',
          error: '#E93E3E',
          warn: '#FFB302',
          info: '#21B8E8',
        },
      },
    },
    fontSize: {
      xs: ['12px', { lineHeight: '16px' }],
      sm: ['14px', { lineHeight: '18px' }],
      md: ['16px', { lineHeight: '20px' }],
      lg: ['18px', { lineHeight: '22px' }],
      xl: ['20px', { lineHeight: '24px' }],
      '2xl': ['24px', { lineHeight: '28px' }],
      '3xl': ['28px', { lineHeight: '32px' }],
      '4xl': ['32px', { lineHeight: '42px' }],
    },
    fontFamily: {
      albertSans: 'var(--font-inter)',
    },
  },
  plugins: [],
};