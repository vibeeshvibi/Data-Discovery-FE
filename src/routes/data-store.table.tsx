import { createFileRoute } from '@tanstack/react-router'
import { Table } from '../pages/Table'

export const Route = createFileRoute('/data-store/table')({
  component: Table,
})
