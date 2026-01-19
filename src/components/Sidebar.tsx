import { Link, useLocation } from '@tanstack/react-router'
import { IconAdjustmentsHorizontal, IconHome, IconSitemap } from '@tabler/icons-react'
import DDLogo from '../assets/icons/logo-text.svg'

export function Sidebar() {
  const location = useLocation()

  const isHomeActive = location.pathname === '/' || location.pathname.startsWith('/data-store')
  const isConfigureActive = location.pathname === '/configure'
  const isLineageActive = location.pathname === '/lineage'

  return (
    <aside className="w-16 bg-sidebar border-r border-sidebar-border flex flex-col">
      <div className="pt-6 pb-4">
        <img src={DDLogo} alt="Data Discovery Logo" className="w-8 h-8 mx-auto" />
      </div>
      <div className="flex-1 flex flex-col items-center justify-center gap-6">
        <Link
          to="/"
          className={`p-2 rounded-lg hover:bg-[#f0f4f8] transition-colors ${isHomeActive ? 'bg-[#f0f4f8]' : 'bg-white'}`}
        >
          <IconHome size={22} className={isHomeActive ? 'text-[var(--brand-secondary)]' : 'text-gray-500'} />
        </Link>
        <Link
          to="/configure"
          className={`p-2 rounded-lg hover:bg-[#f0f4f8] transition-colors ${isConfigureActive ? 'bg-[#f0f4f8]' : 'bg-white'}`}
        >
          <IconAdjustmentsHorizontal  size={22} className={isConfigureActive ? 'text-[var(--brand-secondary)]' : 'text-gray-500'} />
        </Link>
        <Link
          to="/lineage"
          className={`p-2 rounded-lg hover:bg-[#f0f4f8] transition-colors ${isLineageActive ? 'bg-[#f0f4f8]' : 'bg-white'}`}
        >
          <IconSitemap size={22} className={isLineageActive ? 'text-[var(--brand-secondary)]' : 'text-gray-500'} />
        </Link>
      </div>
    </aside>
  )
}
