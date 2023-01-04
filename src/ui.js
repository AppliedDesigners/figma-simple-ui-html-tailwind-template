import './main.css'

/**
 * https://developer.mozilla.org/en-US/docs/Web/API/FormData/entries
 * - Entries: key value pairs
 * - Values: just values
 */ 
window.document.querySelector('#submit-button').onclick = () => {
  const form = window.document.querySelector('#form')
  /**
   * Convert the form entries into an object
   */
  const formData = new FormData(form)
  const formValues = Object.fromEntries(formData.entries());

  parent.postMessage({ pluginMessage: { type: 'submit', value: formValues } }, '*')
}
  
window.document.querySelector('#cancel-button').onclick = () => {
  parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*')
}