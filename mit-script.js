function isTouchDevice() {
  return !!('ontouchstart' in window) || !!('msmaxtouchpoints' in window.navigator);
};

if (isTouchDevice()) {
  document.querySelectorAll(".icon").forEach((icon) => {
    icon.style.textShadow = "none";
  });
}
