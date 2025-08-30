import { createFileRoute } from '@tanstack/react-router'

import Home from '@/routes/home'

export const Route = createFileRoute('/')({
  component: Home,
})
