export class PnpFactory {

  constructor () {
    this.pnp = this.defaultPnp()
    return this
  }

  constants = {
    // Limited support for foreground/background combinations
    // Default
    COLOR_DEFAULT: 'qti3-player-color-default',
    // Default - reverse polarity
    COLOR_DEFAULT_REVERSE: 'qti3-player-color-defaultreverse',
    // High contrast
    COLOR_BLACK_WHITE: 'qti3-player-color-blackwhite',
    // High contrast - reverse polarity
    COLOR_WHITE_BLACK: 'qti3-player-color-whiteblack',
    // Black on Rose
    COLOR_BLACK_ROSE: 'qti3-player-color-blackrose',
    // Rose on Black
    COLOR_ROSE_BLACK: 'qti3-player-color-roseblack',
    // Yellow on Blue
    COLOR_YELLOW_BLUE: 'qti3-player-color-yellowblue',
    // Rose on Black
    COLOR_BLUE_YELLOW: 'qti3-player-color-blueyellow',
    // Medium Gray on Dark Gray
    COLOR_MGRAY_DGRAY: 'qti3-player-color-mgraydgray',
    // Dark Gray on Medium Gray
    COLOR_DGRAY_MGRAY: 'qti3-player-color-dgraymgray',
  }

  defaultPnp () {
    let pnp = {
      textAppearance: {
        colorStyle: this.constants.COLOR_DEFAULT
      },
      glossaryOnScreen: true, // unsupported
      layoutSingleColumn: false // unsupported
    }
    return pnp
  }

  setPnp (pnp) {
    if (typeof pnp === 'undefined') return

    if (pnp === null) {
      this.pnp = this.defaultPnp()
    }

    if (('textAppearance' in pnp) && (pnp.textAppearance !== null)) {
      if ('colorStyle' in pnp.textAppearance) {
        this.setColorStyle(pnp.textAppearance.colorStyle)
      }
    }

    if (('glossaryOnScreen' in pnp) && (pnp.glossaryOnScreen !== null)) {
      this.setGlossaryOnScreen(pnp.glossaryOnScreen)
    }
  }

  getPnp () {
    return this.pnp
  }

  getColorStyle () {
    return this.pnp.textAppearance.colorStyle
  }

  setColorStyle (colorStyle) {
    this.pnp.textAppearance.colorStyle = colorStyle
  }

  getGlossaryOnScreen () {
    return this.pnp.glossaryOnScreen
  }

  setGlossaryOnScreen (glossaryOnScreen) {
    this.pnp.glossaryOnScreen = glossaryOnScreen
  }

}
