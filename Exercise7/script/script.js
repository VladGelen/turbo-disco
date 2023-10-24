$(document).ready(function() {
    const numImages = 8; 
    const imagesPerPage = 3; 
  

    const totalPages = Math.ceil(numImages / imagesPerPage);
  

    for (let i = 1; i <= totalPages; i++) {
      $('.pager').append(`<span class="page">${i}</span>`);
    }
  
    // Set the initial page to 1
    let currentPage = 1;
    updatePager(currentPage);
  
    // Function to update the pager highlighting based on the current page
    function updatePager(currentPage) {
      $('.page').removeClass('active');
      $(`.page:nth-child(${currentPage})`).addClass('active');
    }
  
    // Function to handle sliding the gallery
    function slideGallery(direction) {
      const slider = $('.gallery-slider');
      const sliderWidth = slider.width();
  
      if (direction === 'prev' && currentPage > 1) {
        currentPage--;
      } else if (direction === 'next' && currentPage < totalPages) {
        currentPage++;
      }
  
      const offset = (currentPage - 1) * sliderWidth;
      slider.animate({ scrollLeft: offset }, 500);
  
      updatePager(currentPage);
    }
  
    // Event handler for clicking on the pager
    $('.pager').on('click', '.page', function() {
      currentPage = parseInt($(this).text());
      slideGallery();
    });
  
    // Event handlers for previous and next arrow clicks
    $('.pager').prepend('<span class="arrow prev">&lt;</span>');
    $('.pager').append('<span class="arrow next">&gt;</span>');
  
    $('.arrow.prev').click(function() {
      slideGallery('prev');
    });
  
    $('.arrow.next').click(function() {
      slideGallery('next');
    });
  });
  