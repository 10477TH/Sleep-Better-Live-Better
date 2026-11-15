export type AppRoute =
  | 'home'
  | 'about'
  | 'science'
  | 'research'
  | 'guide'
  | 'journey'
  | 'references';

export const VALID_ROUTES: AppRoute[] = [
  'home',
  'about',
  'science',
  'research',
  'guide',
  'journey',
  'references',
];

export function parseHashRoute(hash: string): AppRoute {
  const cleaned = hash.replace(/^#\/?/, '').split('?')[0].toLowerCase().trim();
  if (VALID_ROUTES.includes(cleaned as AppRoute)) {
    return cleaned as AppRoute;
  }
  return 'home';
}

export function navigateToRoute(route: AppRoute): void {
  window.location.hash = `#/${route}`;
}
