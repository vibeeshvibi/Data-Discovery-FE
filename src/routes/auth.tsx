import { createFileRoute } from '@tanstack/react-router'
import { SSO } from '../pages/SSO'

export const Route = createFileRoute('/auth')({
  component: SSO,
})
