// Newsletter form stub (no backend).
document.getElementById('newsletter')?.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thanks! (Newsletter is a visual stub for now.)');
});

// Floating event popup — auto-dismisses when the countdown bar finishes.
(function () {
  const EVENT_ID = 'spring-career-kickoff-2026';
  const pop = document.getElementById('eventpop');
  const closeBtn = document.getElementById('eventpopClose');
  const timerFill = document.getElementById('eventpopTimer');
  if (!pop || !closeBtn || !timerFill) return;

  const dismissedKey = 'cscareers:eventpop:dismissed';

  // If the user dismissed this specific event before, never show it.
  try {
    if (localStorage.getItem(dismissedKey) === EVENT_ID) {
      pop.classList.add('is-gone');
      return;
    }
  } catch (_) {}

  const hide = (rememberDismiss) => {
    pop.classList.add('is-hidden');
    // Remove from layout after the transition so it can't be tabbed to.
    setTimeout(() => pop.classList.add('is-gone'), 400);
    if (rememberDismiss) {
      try { localStorage.setItem(dismissedKey, EVENT_ID); } catch (_) {}
    }
  };

  // Manual close
  closeBtn.addEventListener('click', () => hide(true));

  // Auto-hide when the timer bar animation ends.
  timerFill.addEventListener('animationend', (e) => {
    if (e.animationName === 'timerShrink') hide(false);
  });

  // Pause timer on hover so users who are reading it don't lose it.
  pop.addEventListener('mouseenter', () => {
    timerFill.style.animationPlayState = 'paused';
  });
  pop.addEventListener('mouseleave', () => {
    timerFill.style.animationPlayState = 'running';
  });
})();
