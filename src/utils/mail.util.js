const SCRIPT_ID = 'AKfycby9vlD8itIOu66DqzDvZTFJB87Xtdo6eCt5xUrZ5GK9ZwrGwLHCk71etGXDTTAlwXFO'
const HOST = 'script.google.com'

export function sendEmail(email) {
  const url = `https://${HOST}/macros/s/${SCRIPT_ID}/exec`

  const body = JSON.stringify({ email });
  const requestOptions = {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
      "Content-Length": body.length,
      "Host": HOST,
    },
    body: body
  }

  return fetch(url, requestOptions)
}