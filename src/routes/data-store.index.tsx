import { createFileRoute } from '@tanstack/react-router'
import { DataStore } from '../pages/DataStore'

export const Route = createFileRoute('/data-store/')({
  component: DataStore,
})
