const saveButton = document.querySelector('.local').addEventListener('click', function() {
    let nome = document.getElementById('fname').value
    let cognome = document.getElementById('lname').value
    if (nome && cognome) {
     localStorage.setItem('nome', nome)
      localStorage.setItem('cognome', cognome)
      alert('Dati salvati nel Local Storage!')
      mostraDatiSalvati()
    } else {
      alert("Per favore, inserisci sia il nome che il cognome.")
    }
  })

//elimina dati salvati
  const deleteButton = document.querySelector('.bye').addEventListener('click', function() {
   localStorage.removeItem('nome')
    localStorage.removeItem('cognome')
    alert('Dati eliminati dal Local Storage!')
  })

