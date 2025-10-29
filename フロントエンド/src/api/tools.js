export async function getTools() {
  return fetch(import.meta.env.VITE_SERVER_URL)
    .catch(() => {
      throw new Error(`HTTP error!`)
    })
    .then(res => res.json())
    .then(data => data.tools || [])
}
