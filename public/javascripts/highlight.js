document.addEventListener('DOMContentLoaded', function() {
    const searchTerms = JSON.parse(document.getElementById('search-terms').textContent);
    const spans = document.querySelectorAll('.description span', '.duty span');
  
    spans.forEach(span => {
      const word = span.textContent.trim();
      if (searchTerms.includes(word)) {
        span.classList.add('highlight');
      }
    });
  });
  
  