import MainLayout from './layouts/MainLayout'

export default function App() {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) document.documentElement.setAttribute('data-theme', savedTheme)
  return <MainLayout />
}
