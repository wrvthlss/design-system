window.addEventListener('message', (event) => {
  if (event.data.type === 'TEST_MESSAGE') {
    console.log(`Received message in iframe: ${event.data.payload}`);
  }
});

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

// // .storybook/preview.ts
// import { Preview } from "@storybook/react";
// import '../src/demo/tokens.css';

// const switchStylesheet = (brand: string) => {
//   let linkElement = document.getElementById('brand-stylesheet') as HTMLLinkElement;
//   if (linkElement) {
//     document.head.removeChild(linkElement);
//   }

//   const newLinkElement = document.createElement('link');
//   newLinkElement.rel = 'stylesheet';
//   newLinkElement.id = 'brand-stylesheet';
//   newLinkElement.href = `/brandStyles/${brand}.css`;
//   document.head.appendChild(newLinkElement);

//   console.log(`Switched to ${brand} stylesheet`);
// };

// const storedBrand = localStorage.getItem('selectedBrand') || 'anthem';
// console.log(`Applying stored brand: ${storedBrand}`);
// switchStylesheet(storedBrand);

// window.addEventListener('message', (event: MessageEvent) => {
//   console.log('Received message:', event.data); // Debugging log
//   if (event.data.type === 'BRAND_CHANGE') {
//     console.log(`Received message: BRAND_CHANGE - ${event.data.brand}`); // Debugging log
//     switchStylesheet(event.data.brand);
//   }
// });

// const preview: Preview = {
//   parameters: {
//     controls: {
//       matchers: {
//         color: /(background|color)$/i,
//         date: /Date$/,
//       },
//     },
//     designTokens: {
//       disable: false,
//       defaultTab: "Colors",
//       showSearch: true,
//       editable: true,
//     },
//     actions: { disable: true },
//     interactions: { disable: true },
//     backgrounds: {
//       default: 'light',
//       values: [
//         { name: 'light', value: '#ffffff' },
//         { name: 'dark', value: '#000000' },
//       ],
//     },
//     docs: {
//       source: {
//         type: 'code',
//       },
//     },
//     layout: 'padded',
//   },
// };

// export default preview;
