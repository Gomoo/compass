// Custom smooth scroll function with faster animation
export const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (!element) return;

  const navbarHeight = 80; // Account for fixed navbar
  const targetPosition = element.offsetTop - navbarHeight;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = Math.min(Math.abs(distance) / 2, 800); // Faster scroll, max 800ms
  let startTime: number | null = null;

  const animation = (currentTime: number) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);

    // Easing function for smooth animation
    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

    const easedProgress = easeInOutCubic(progress);
    const currentPosition = startPosition + distance * easedProgress;

    window.scrollTo(0, currentPosition);

    if (progress < 1) {
      requestAnimationFrame(animation);
    }
  };

  requestAnimationFrame(animation);
};
