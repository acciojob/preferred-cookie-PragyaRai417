function getCookie(name) {
  const value = ; ${document.cookie};
  const parts = value.split(; ${name}=);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
}

function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = expires=${date.toUTCString()};
  document.cookie = ${name}=${value}; ${expires}; path=/;
}

function applyPreferences() {
  const savedFontSize = getCookie('fontsize');
  const savedFontColor = getCookie('fontcolor');

  if (savedFontSize) {
    document.body.style.fontSize = savedFontSize + 'px';
    document.getElementById('fontsize').value = savedFontSize;
  }

  if (savedFontColor) {
    document.body.style.color = savedFontColor;
    document.getElementById('fontcolor').value = savedFontColor;
  }
}

document.getElementById('preferences-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const fontSize = document.getElementById('fontsize').value;
  const fontColor = document.getElementById('fontcolor').value;

  setCookie('fontsize', fontSize, 365);  
  setCookie('fontcolor', fontColor, 365);  

  // Apply the changes immediately after saving
  document.body.style.fontSize = fontSize + 'px';
  document.body.style.color = fontColor;
});

window.onload = applyPreferences;