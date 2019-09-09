const isTouchDevice = () => !!('ontouchstart' in window) || !!('msmaxtouchpoints' in window.navigator)

const githubIcon = document.getElementById('github-icon')

if (window.innerWidth >= 708) {
  GitHubCalendar('#github-tooltip', 'gabrielecanepa', {
    summary_text: '',
    global_stats: false,
    responsive: true
  })

  tippy(githubIcon, {
    html: document.querySelector('#github-tooltip'),
    placement: 'bottom',
    arrow: true,
    interactive: true,
    distance: 20,
    inertia: true
  })

  githubIcon.addEventListener(
    'click',
    event => isTouchDevice() && event.preventDefault(),
    false
  )
}
