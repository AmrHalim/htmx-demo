import light from './templates/themes/light';

export type Theme = 'dark' | 'light';
export const loadMainStyles = (theme: Theme = 'light') => (theme === 'light' ? light : '');

