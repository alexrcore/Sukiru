export async function getTools() {
  return fetch('http://localhost:8080/')
    .catch(() => {
      throw new Error(`HTTP error!`)
    })
    .then(res => res.json())
    .then(data => data.tools || [])
}
