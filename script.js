"use strict";

function isTouchDevice() {
  return !!('ontouchstart' in window) || !!('msmaxtouchpoints' in window.navigator);
};

// Avatar tooltip
const message = document.querySelector('#randomMessage');
const initialText = message.textContent;
const avatarTip = tippy('#avatarTooltip', {
  arrow: true,
  distance: 20,
  inertia: true,
  interactive: true,
  html: '#randomMessage',
  onShow() {
    const quotes = ['Hello!', '&iexcl;Hola!', 'Ciao!', 'Olá!', 'Oi!'];
    const content = this.querySelector('.tippy-content');
    content.innerHTML = quotes[Math.floor(Math.random() * quotes.length)];
    avatarTip.loading = false;
  },
  onHidden() {
    const content = this.querySelector('.tippy-content')
    content.innerHTML = initialText
  },
  popperOptions: {
    modifiers: {
      preventOverflow: {
        enabled: false
      },
      hide: {
        enabled: false
      }
    }
  }
});

// Mail tooltip
const mailIcon = document.getElementById('mailIcon');
const mailTip = tippy(mailIcon, {
  html: document.querySelector('#mailTooltip'),
  placement: 'right',
  arrow: true,
  interactive: true,
  distance: 20
});
let mailTouch = isTouchDevice();
mailIcon.addEventListener("click", function(event) {
  if (mailTouch) {
    event.preventDefault();
    mailTouch = false;
  }
}, false);
