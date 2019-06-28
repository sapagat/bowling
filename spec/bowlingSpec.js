describe('Bowling', () => {
  it('scores no points when no pins knocked in the game', () => {
    const noPinsDown = '-- -- -- -- -- -- -- -- -- --'

    const score = computeScore(noPinsDown)

    expect(score).toEqual(0)
  })

  it('scores one point if only one pin knocked in the game', () => {
    const singlePinDown = '-- -- -- -- 1- -- -- -- -- --'

    const score = computeScore(singlePinDown)

    expect(score).toEqual(1)
  })
})

const NO_PIN_DOWN_GAME = '-- -- -- -- -- -- -- -- -- --'

function computeScore (pinsDown) {
  if (pinsDown === NO_PIN_DOWN_GAME) {
    return 0
  }

  return 1
}
