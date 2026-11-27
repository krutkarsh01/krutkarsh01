const teaScene = document.querySelector('.character-tea-scene[data-character-scene]');

if (teaScene) {
  async function prepareTea() {
    if (!teaScene.classList.contains('is-character-visible')) return;
    teaScene.removeEventListener('character-scene-visibility', prepareTea);

    try {
      await teaScene.querySelector('.character-tea-sip').decode();
      teaScene.classList.add('is-sipping');
    } catch {
      // Keep the resting pose if the alternate pose fails to load.
    }
  }

  teaScene.addEventListener('character-scene-visibility', prepareTea);
  prepareTea();
}
