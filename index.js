/*document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search');
    const imageContainer = document.querySelector('.image-container');
    const images = [
      'image1.jpg',
      'image2.jpg',
      'image3.jpg',
    
    ];
  
    function displayImages(filter = '') {
      imageContainer.innerHTML = '';
      images
        .filter(img => img.includes(filter))
        .forEach(img => {
          const imgElement = document.createElement('img');
          imgElement.src = img;
          imageContainer.appendChild(imgElement);
        });
    }
  
    searchInput.addEventListener('input', (e) => {
      displayImages(e.target.value);
    });
  
    displayImages();
  });*/
  function scrollar(event) {
    event.preventDefault(); 

    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    targetSection.scrollIntoView({ behavior: 'smooth' });
}

const LinkDeServico = document.querySelector('a[href="#Servicos"]');
const LinkDeContato = document.querySelector('a[href="#contato"]');

LinkDeServico.addEventListener('click', scrollar);
LinkDeContato.addEventListener('click', scrollar);
