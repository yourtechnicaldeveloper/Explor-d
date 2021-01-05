import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/pages/dashboard',
  },
  
  {
    title: 'Manage User',
    icon: 'layout-outline',
    link: '/pages/user',
  },
  {
    title: 'Manage Categories',
    icon: 'edit-2-outline',
    link: '/pages/categories/category-list',
  }, 
  {
    title: 'Manage Tours',
    icon: 'keypad-outline',
    link: '/pages/tours/tours-list',
  },
  {
    title: 'Manage Badge',
    icon: 'browser-outline',
    link: '/pages/badge/badge-list',
  }, 

  {
    title: 'FAQ',
    icon: 'browser-outline',
    link: '/pages/layout/accordion',
  }, 

  {
    title: 'Privacy Policy',
    icon: 'browser-outline',
    link: '/pages/privacy-policy',
  }, 
  
];
