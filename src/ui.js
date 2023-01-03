import './main.css'

const showError = errorMessage => {
    window.document.querySelector('#errors').textContent = errorMessage
  }

window.document.querySelector('#insert-text-button').onclick = () => {
    const text = window.document.querySelector('#insert-text-input').value

    if (!text) {
      showError('Error: Text must have a value');
      return
    }

    parent.postMessage({ pluginMessage: { type: 'text', value: text } }, '*')
  }
  
  window.document.querySelector('#pie-chart-button').onclick = () => {
    const text = window.document.querySelector('#pie-chart-input').value

    let numbers = text.split(',').map(x => Math.max(0, parseInt(x, 10)))
    if (numbers.length < 2) {
      showError('Error: Must have at least two segments');
      return
    }
    if (numbers.some(x => isNaN(x))) {
      showError('Error: All segments must be numbers');
      return
    }

    parent.postMessage({ pluginMessage: { type: 'pie-chart', value: numbers } }, '*')
  }

  