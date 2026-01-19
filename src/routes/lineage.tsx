import { createFileRoute } from '@tanstack/react-router'
import { Lineage } from '../pages/Lineage'

export const Route = createFileRoute('/lineage')({
  component: Lineage,
})
