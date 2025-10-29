export async function analyze(tools) {
  return fetch(import.meta.env.VITE_SERVER_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ tools }),
  })
    .catch(() => {
      throw new Error(`HTTP error!`)
    })
    .then(res => res.json())
}
