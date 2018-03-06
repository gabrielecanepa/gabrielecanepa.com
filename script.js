// Avatar tooltip
const message = document.querySelector('#randomMessage');
const initialText = message.textContent;
const avatarTip = tippy('#avatarTooltip', {
  arrow: true,
  distance: 20,
  interactive: true,
  html: '#randomMessage',
  onShow() {
    const quotes = ['Hello', 'Hola']
    // `this` inside callbacks refers to the popper element
    const content = this.querySelector('.tippy-content')
    content.innerHTML = quotes[Math.floor(Math.random() * quotes.length)];
    avatarTip.loading = false;
  },
  onHidden() {
    const content = this.querySelector('.tippy-content')
    content.innerHTML = initialText
  },
  // prevent tooltip from displaying over button
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
const mailTip = tippy('#mailIcon', {
  html: document.querySelector('#mailTooltip'),
  placement: 'right',
  arrow: true,
  interactive: true,
  distance: 20
});
