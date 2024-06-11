import React from 'react'
import routes from '../../routes/sidebar'
import { secondaryroutes } from '../../routes/sidebar'
import { NavLink, Route } from 'react-router-dom'
import * as Icons from '../../icons'
import {
  SearchIcon,
  MoonIcon,
  SunIcon,
  BellIcon,
  MenuIcon,
  OutlinePersonIcon,
  OutlineCogIcon,
  OutlineLogoutIcon,
  SettingsIcon,
} from '../../icons/index'
import SidebarSubmenu from './SidebarSubmenu'
import { Button } from '@windmill/react-ui'
import SecondarySidemenu from './SecondarySidemenu'

function Icon({ icon, ...props }) {
  const Icon = Icons[icon]
  return <Icon {...props} />
}

function SidebarContent() {
  return (
    <div className="py-4 text-gray-500 dark:text-gray-400">
      <a className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200" href="#">
        Artemis
      </a>
      
      <ul className="mt-6">
      <p className='ml-4'>Main</p>
        {routes.map((route) =>
          route.routes ? (
            <SidebarSubmenu route={route} key={route.name} />
          ) : (
            <li className="relative px-6 py-3" key={route.name}>
              <NavLink
                exact
                to={route.path}
                className="inline-flex p-2 rounded-md items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                activeClassName="text-gray-800 dark:text-gray-100 bg-blue-600"
              >
                <Route path={route.path} exact={route.exact}>
                  <span
                    className="absolute inset-y-0 left-0 w-1 bg-blue-600 rounded-tr-lg rounded-br-lg"
                    aria-hidden="true"
                  ></span>
                </Route>
                <Icon className="w-5 h-5" aria-hidden="true" icon={route.icon} />
                <span className="ml-4">{route.name}</span>
              </NavLink>
            </li>
          )
        )}
      </ul>
      <ul className="mt-6">
      <p className='ml-4'>Secondary</p>
        {secondaryroutes.map((secondaryroutes) =>
          secondaryroutes.secondaryroutes ? (
            <SecondarySidemenu route={secondaryroutes} key={secondaryroutes.name} />
            
          
          ) : (
            <li className="relative px-6 py-3" key={secondaryroutes.name}>
              <NavLink
                exact
                to={secondaryroutes.path}
                className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                activeClassName="text-gray-800 dark:text-gray-100"
              >
                <Route path={secondaryroutes.path} exact={secondaryroutes.exact}>
                  <span
                    className="absolute inset-y-0 left-0 w-1 bg-blue-600 rounded-tr-lg rounded-br-lg"
                    aria-hidden="true"
                  ></span>
                </Route>
                <Icon className="w-5 h-5" aria-hidden="true" icon={secondaryroutes.icon} />
                <span className="ml-4">{secondaryroutes.name}</span>
              </NavLink>
            </li>
          )
        )}
      </ul>
      <div className="px-6 my-6 grid gap-4">
      <div className='flex'>
      <SettingsIcon className="w-4 h-4 mr-3" aria-hidden="true" />
      <span className="ml-4">Settings</span>
      </div>
      <div className='flex'>
      <OutlineLogoutIcon className="w-4 h-4 mr-3" aria-hidden="true" />
      <span>Log out</span>
      </div>
        
      </div>
    </div>
  )
}

export default SidebarContent
