/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */
const routes = [
  {
    path: '/app/dashboard', // the url
    icon: 'HomeIcon', // the component being exported from icons/index.js
    name: 'Dashboard', // name that appear in Sidebar
  },
  {
    path: '/app/forms',
    icon: 'FormsIcon',
    name: 'Discover',
  },
  {
    path: '/app/cards',
    icon: 'CardsIcon',
    name: 'Users',
  },
  {
    path: '/app/charts',
    icon: 'ChartsIcon',
    name: 'Documents',
  },
  {
    path: '/app/buttons',
    icon: 'PagesIcon',
    name: 'Appications',
  },
  
  
  {
    icon: 'ModalsIcon',
    name: 'Pages',
    routes: [
      // submenu
      {
        path: '/login',
        name: 'Login',
      },
      {
        path: '/create-account',
        name: 'Create account',
      },
      {
        path: '/forgot-password',
        name: 'Forgot password',
      },
      {
        path: '/app/404',
        name: '404',
      },
      {
        path: '/app/blank',
        name: 'Blank',
      },
    ],
  },
]

export const secondaryroutes = [
  {
    path: '/app/dashboard', // the url
    icon: 'HomeIcon', // the component being exported from icons/index.js
    name: 'Support Center', // name that appear in Sidebar
  },
  {
    path: '/app/forms',
    icon: 'FormsIcon',
    name: 'Inbox',
  },
  {
    path: '/app/cards',
    icon: 'CardsIcon',
    name: 'File Manager',
  },
  {
    path: '/app/charts',
    icon: 'ChartsIcon',
    name: 'Data List',
  },

  
  
  // {
  //   icon: 'ModalsIcon',
  //   name: 'Pages',
  //   secondaryroutes: [
  //     // submenu
  //     {
  //       path: '/login',
  //       name: 'Login',
  //     },
  //     {
  //       path: '/create-account',
  //       name: 'Create account',
  //     },
  //     {
  //       path: '/forgot-password',
  //       name: 'Forgot password',
  //     },
  //     {
  //       path: '/app/404',
  //       name: '404',
  //     },
  //     {
  //       path: '/app/blank',
  //       name: 'Blank',
  //     },
  //   ],
  // },
]

export default routes
