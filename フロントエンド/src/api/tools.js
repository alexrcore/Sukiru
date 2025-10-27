export async function getTools() {
  return fetch('http://localhost:8080/')
    .catch(err => {
      console.log(res.status)
      console.log(err)
      throw new Error(`HTTP error! Status: ${res.status}`)
    })
    .then(res => res.json())
    .then(data => data.tools || [])
}
