// You can add JavaScript functionality here if needed
// This file can be expanded to include more interactive features

// Sample portfolio items (replace with actual portfolio items)
const portfolioItems = [
    {
      title: 'The Empty Mind',
      image: 'empty.jpg',
      genre: 'Drama',
      releaseDate: 'March 2023',
      description: 'What if your heart starts thinking.',
      awards: ['Best Director', 'Best Screenplay']
    },
    {
      title: 'Pasho:Chapter !',
      image: 'WhatsApp Image 2024-04-22 at 04.06.09_4571e025.jpg',
      genre: 'Thriller',
      releaseDate: 'September 2024',
      description: 'What if your one wrong decision holds you into a loop.', 
      awards: ['Best Cinematography', 'Audience Choice Award']
    }
    // Add more portfolio items as needed
  ];
  
  // Function to dynamically create portfolio items
  function createPortfolioItems() {
    const portfolioGrid = document.querySelector('.portfolio-grid');
  
    portfolioItems.forEach(item => {
      const portfolioItem = document.createElement('div');
      portfolioItem.classList.add('portfolio-item');
  
      const image = document.createElement('img');
      image.src = item.image;
      image.alt = item.title;
  
      const overlay = document.createElement('div');
      overlay.classList.add('portfolio-overlay');
  
      const title = document.createElement('h3');
      title.textContent = item.title;
  
      const genreAndDate = document.createElement('p');
      genreAndDate.textContent = `Genre: ${item.genre} | Release Date: ${item.releaseDate}`;
  
      const description = document.createElement('p');
      description.textContent = item.description;
  
      const awards = document.createElement('p');
      awards.textContent = `Awards: ${item.awards.join(', ')}`;
  
      const viewDetails = document.createElement('a');
      viewDetails.href = '#'; // Add actual link when details page is implemented
      viewDetails.textContent = 'View Details';
  
      overlay.appendChild(title);
      overlay.appendChild(genreAndDate);
      overlay.appendChild(description);
      overlay.appendChild(awards);
      overlay.appendChild(viewDetails);
  
      portfolioItem.appendChild(image);
      portfolioItem.appendChild(overlay);
  
      portfolioGrid.appendChild(portfolioItem);
    });
  }
  
  // Call the function to create portfolio items
  createPortfolioItems();
  