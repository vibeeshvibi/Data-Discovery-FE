import { createFileRoute } from '@tanstack/react-router'
import { ConfigurePage } from '../pages/ConfigurePage'

export const Route = createFileRoute('/configure')({
  component: ConfigurePage,
})
