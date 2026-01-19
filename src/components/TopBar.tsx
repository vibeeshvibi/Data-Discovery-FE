import React from 'react'
import { Input } from './ui/input'
import { IconSearch, IconHome, IconSettings, IconSitemap, IconDatabase, IconTable } from '@tabler/icons-react'
import { useMatches } from '@tanstack/react-router'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from './ui/breadcrumb'

interface TopBarProps {
  username?: string
  profilePicture?: string
}

export function TopBar({ username = "John Doe", profilePicture }: TopBarProps) {
  const matches = useMatches()

  // Generate breadcrumbs from route matches
  const breadcrumbs = matches
    .filter((match) => match.pathname !== '/' && !match.pathname.endsWith('/'))
    .map((match, index, arr) => {
      const isLast = index === arr.length - 1
      const path = match.pathname
      const title = getRouteTitle(path)
      const icon = getRouteIcon(path)

      return {
        path,
        title,
        icon,
        isLast,
      }
    })

  function getRouteTitle(pathname: string): string {
    switch (pathname) {
      case '/':
        return 'Home'
      case '/configure':
        return 'Configure'
      case '/data-store':
        return 'Data Store'
      case '/data-store/table':
        return 'Tables'
      case '/lineage':
        return 'Lineage'
      case '/column':
        return 'Column'
      default:
        return pathname.replace('/', '').replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())
    }
  }

  function getRouteIcon(pathname: string): React.ComponentType<{ size?: number; className?: string }> | null {
    switch (pathname) {
      case '/':
        return IconHome
      case '/configure':
        return IconSettings
      case '/data-store':
        return IconDatabase
      case '/data-store/table':
        return IconTable
      case '/lineage':
        return IconSitemap
      case '/column':
        return IconDatabase
      default:
        return null
    }
  }

  // Generate initials from username
  const getInitials = (name: string) => {
    const names = name.split(' ')
    if (names.length >= 2) {
      return (names[0][0] + names[names.length - 1][0]).toUpperCase()
    }
    return name[0].toUpperCase()
  }

  return (
    <header className="h-8 pt-4 px-4 mt-2 grid grid-cols-[auto_1fr_auto] items-center gap-4">
      {/* Breadcrumb - Left */}
      <div className="min-w-[20rem]">
        <Breadcrumb>
          <BreadcrumbList className="text-gray-500 text-sm">
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="flex items-center gap-1">
                <IconHome size={14} />
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            {breadcrumbs.map((crumb) => (
              <React.Fragment key={crumb.path}>
                <BreadcrumbSeparator>/</BreadcrumbSeparator>
                <BreadcrumbItem>
                  {crumb.isLast ? (
                    <BreadcrumbPage className="flex items-center gap-1 text-gray-500">
                      {crumb.icon && <crumb.icon size={14} />}
                      {crumb.title}
                    </BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink href={crumb.path} className="flex items-center gap-1 text-gray-500">
                      {crumb.icon && <crumb.icon size={14} />}
                      {crumb.title}
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
              </React.Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Search - Center */}
      <div className="flex justify-center">
        <div className="relative w-[20rem]">
          <Input
            placeholder="Search for a table"
            className="h-9 text-sm border pr-10 border-[#dde7ee] bg-[#fff] rounded-sm placeholder:text-[#9fa6ad]"
          />
          <IconSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" color='var(--brand-secondary)'  stroke={3}/>
        </div>
      </div>

      {/* Username and Profile Picture - Right */}
      <div className="flex items-center gap-3">
        <div className="text-md text-muted-foreground">
          Hello {username}!
        </div>
        <div className="w-10 h-10 rounded-full bg-[#e3effb] flex items-center justify-center">
          {profilePicture ? (
            <img
              src={profilePicture}
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover"
            />
          ) : (
            <span className="text-[var(--brand-secondary)] font-medium text-sm">
              {getInitials(username)}
            </span>
          )}
        </div>
      </div>
    </header>
  )
}
