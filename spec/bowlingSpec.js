describe('Bowling', () => {
  it('scores no points when no pins knocked in the game', () => {
    const noPinsKnockedGame = '-- -- -- -- -- -- -- -- -- --'

    const score = computeScore(noPinsKnockedGame)

    expect(score).toEqual(0)
  })

  it('scores one point if only one pin knocked in the game', () => {
    const singlePinKnockedGame = '-- -- -- -- 1- -- -- -- -- --'

    const score = computeScore(singlePinKnockedGame)

    expect(score).toEqual(1)
  })

  it('sums the pins knocked in the first roll of each frame', () => {
    const game = '9- 9- 9- 9- 9- 9- 9- 9- 9- 9-'

    const score = computeScore(game)

    expect(score).toEqual(90)
  })
})

const NO_PIN_DOWN_GAME = '-- -- -- -- -- -- -- -- -- --'

function computeScore (game) {
  if (game === NO_PIN_DOWN_GAME) {
    return 0
  }

  return 1
}
