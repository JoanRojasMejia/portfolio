import { Moon, Sun } from '@icons/icons-theme'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [theme, setTheme] = useState(window.localStorage.getItem('theme') ?? 'light')

  const handleClick = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    window.localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <button className="px-2" onClick={handleClick}>
      {theme === 'light' ? <Moon /> : <Sun />}
    </button>
  )
}
