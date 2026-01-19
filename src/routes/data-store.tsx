import { createFileRoute, Outlet } from '@tanstack/react-router'

function DataStoreLayout() {
  return <Outlet />
}

export const Route = createFileRoute('/data-store')({
  component: DataStoreLayout,
})
