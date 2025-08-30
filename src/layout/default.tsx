import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { useEffect } from 'react'

import { useVcosole } from '@/hooks/useVconsole'

export default function RootLayout() {
  const [vc] = useVcosole()
  useEffect(() => {
    console.log('VConsole ?', vc)
    if (vc) {
      vc.show()
    }
  }, [])
  return (
    <div id={'root-layout'}>
      <Outlet />
      <TanStackRouterDevtools />
      <ReactQueryDevtools initialIsOpen={false} />
    </div>
  )
}
