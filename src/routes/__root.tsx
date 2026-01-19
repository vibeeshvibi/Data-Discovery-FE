import { Outlet, createRootRoute, useLocation } from '@tanstack/react-router'
import { NuqsAdapter } from 'nuqs/adapters/tanstack-router'
import { Sidebar } from '../components/Sidebar'
import { TopBar } from '../components/TopBar'

export const Route = createRootRoute({
    component: RootComponent,
})

function RootComponent() {
    const location = useLocation()
    const isAuthRoute = location.pathname === '/auth'

    if (isAuthRoute) {
        return (
            <div className="h-screen">
                <NuqsAdapter>
                    <main className="h-full">
                        <Outlet />
                    </main>
                </NuqsAdapter>
            </div>
        )
    }

    return (
        <div className="flex h-screen ">
            <NuqsAdapter>
                <Sidebar />
                <div className="flex-1 overflow-auto">
                    <TopBar />
                    <main className="flex-1 h-full px-2">
                        <Outlet />
                    </main>
                </div>
            </NuqsAdapter>
        </div>
    )
}
