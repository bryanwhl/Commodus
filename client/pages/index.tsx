import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { MantineProvider } from '@mantine/core';
import App from './_app'

export default function Home() {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: 'light',
        colors: {
          // Add colors here
          deepBlue: ['#E9EDFC', '#C1CCF6', '#99ABF0' /* ... */],
          // or replace default theme color
          blue: ['#E9EDFC', '#C1CCF6', '#99ABF0' /* ... */],
        },

        shadows: {
          md: '1px 1px 3px rgba(0, 0, 0, .25)',
          xl: '5px 5px 3px rgba(0, 0, 0, .25)',
        },

        headings: {
          fontFamily: 'Roboto, sans-serif',
          sizes: {
            h1: { fontSize: 30 },
          },
        },
      }}
    >
      <App />
    </MantineProvider>
  )
}
