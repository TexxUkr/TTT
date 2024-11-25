const en = {
  common: {
    ok: 'OK!',
    cancel: 'Cancel',
    back: 'Back',
    retry: 'Try again',
  },
  errorScreen: {
    title: 'Oops! Something went wrong!',
    friendlySubtitle:
      "This is the screen that your users will see in production when an error is thrown. You'll want to customize this message (located in `app/i18n/en.ts`) and probably the layout as well (`app/screens/ErrorScreen`). If you want to remove this entirely, check `app/app.tsx` for the <ErrorBoundary> component.",
    reset: 'RESET APP',
  },
  emptyStateComponent: {
    generic: {
      heading: 'So empty... so sad',
      content:
        'No data found yet. Try clicking the button to refresh or reload the app.',
      button: "Let's try this again",
    },
  },
  settings: {
    darkTheme: 'Dark Theme',
    logout: 'Logout',
  },
  home: {
    empty: 'No albums found. Try search again.',
  },
  album: {
    listeners: '{{amount}} listeners',
  },
};

export default en;
export type Translations = typeof en;