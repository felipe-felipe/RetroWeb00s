// scripts.js - Totally Radical JavaScript

function launchPopup() {
    const popup = window.open('', '', 'width=400,height=300');
    popup.document.write('<h1 style="font-family: Comic Sans MS; color: hotpink;">✨SUPRISE✨</h1>');
    popup.document.write('<p style="font-size: 18px;">You have unlocked the secret hamster realm! 🐹🌟</p>');
    popup.document.write('<img src="images/hamster_realm.gif" style="width: 100%;" />');
    popup.document.body.style.backgroundColor = 'black';
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('guestbook-form');
    const entriesContainer = document.getElementById('guestbook-entries');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();
  
      if (!name || !email || !message) {
        alert('Please fill out everything! Hamsters hate laziness.');
        return;
      }
  
      const entry = document.createElement('div');
      entry.className = 'entry';
      entry.innerHTML = `
        <h3>${name}</h3>
        <p>${message}</p>
        <small>(${email})</small>
        <hr />
      `;
      entriesContainer.prepend(entry);
  
      form.reset();
      alert('Entry submitted! The hamsters are pleased 🐹✨');
    });
  });
  