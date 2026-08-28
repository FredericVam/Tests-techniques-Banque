// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */

// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

export default defineConfig({

/* Exécuter en parallèle les tests contenus dans les fichiers */
fullyParallel: true,

/* Faire échouer le build sur la CI si vous avez accidentellement laissé test.only dans le code source. */
forbidOnly: !!process.env.CI,

/* Réessayer les tests uniquement sur la CI */
retries: process.env.CI ? 2 : 0,

/* Désactiver l'exécution parallèle des tests sur la CI. */
workers: process.env.CI ? 1 : undefined,

/* Rapporteur à utiliser. Voir la documentation Playwright sur les rapporteurs de tests. */
reporter: 'html',

/* Paramètres partagés par tous les projets ci-dessous. Voir la documentation Playwright sur TestOptions. */
use: {

  /* URL de base à utiliser dans des actions telles que `await page.goto('/')`. */
  // baseURL: 'http://127.0.0.1:3000',

  /* Collecter une trace lors de la nouvelle tentative d'un test ayant échoué. Voir la documentation Playwright sur Trace Viewer. */
  trace: 'on-first-retry',
},

/* Configurer les projets pour les principaux navigateurs */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

/* Tester avec des tailles d'écran d'appareils mobiles. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

/* Lancer votre serveur de développement local avant de démarrer les tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

