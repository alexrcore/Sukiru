import MainLayout from './layouts/MainLayout'

function App() {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme)
  }

  return <MainLayout />
}

export default App
