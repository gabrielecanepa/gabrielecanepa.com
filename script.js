function isTouchDevice() {
  return (
    !!('ontouchstart' in window) || !!('msmaxtouchpoints' in window.navigator)
  );
}

if (window.innerWidth >= 708) {
  GitHubCalendar('#githubTooltip', 'gabrielecanepa', {
    summary_text: '',
    global_stats: false,
    responsive: true
  });
  const githubIcon = document.getElementById('githubIcon');
  const githubTip = tippy(githubIcon, {
    html: document.querySelector('#githubTooltip'),
    placement: 'bottom',
    arrow: true,
    interactive: true,
    distance: 20,
    inertia: true
  });
  githubIcon.addEventListener(
    'click',
    function(event) {
      isTouchDevice() && event.preventDefault();
    },
    false
  );
}
