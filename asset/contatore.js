let counter = sessionStorage.getItem('counter')
    if (counter === null) {
      counter = 0
    } else {
      counter = parseInt(counter, 10); 
    }
      function updateCounter() {
      counter++
      sessionStorage.setItem('counter', counter) 
      document.getElementById('Value').textContent = counter
    }
    document.getElementById('Value').textContent = counter

    
    setInterval(updateCounter, 1000)