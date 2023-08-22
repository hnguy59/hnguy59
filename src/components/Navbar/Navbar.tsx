import { useRouter } from 'next/router'
import Link from 'next/link'
import { Avatar } from '@mui/material'
import ThemeSwitcher from 'components/Theme/ThemeSwitcher'

interface NavbarProps {}

export default function Navbar() {
  const router = useRouter()

  return (
    <nav className="fixed w-full z-50">
      <div className="flex items-center gap-4 m-auto max-w-[768px] w-full p-2">
        <Link
          href="/"
          className="flex items-center gap-2 no-underline font-bold hover:cursor-pointer"
        >
          <Avatar src="/images/portrait.jpeg" />
          Henry Nguyen
        </Link>
        <div className="ml-auto">
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  )
}
