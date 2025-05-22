fetch('examples/added.html')
  .then(response => response.text())
  .then(html => {
    const annotationLayer = document.querySelector('div.annotationLayer[hidden]');
    if (annotationLayer) {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = html;
      annotationLayer.insertAdjacentElement('afterend', tempDiv.firstElementChild);
    } else {
      console.warn('annotationLayer not found');
    }
  })
  .catch(err => console.error('Failed to load added.html:', err));
