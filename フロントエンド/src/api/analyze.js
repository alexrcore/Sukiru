export async function analyze(tools) {
  return fetch('http://localhost:8080/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ tools }),
  })
    .catch(() => {
      throw new Error(`HTTP error!`)
    })
    .then(res => res.json())
}
