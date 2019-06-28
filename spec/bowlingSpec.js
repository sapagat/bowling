describe('Bowling', () => {
  it('scores no points when no pins knocked in the game', () => {
    const noPinsKnockedGame = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

    const score = computeScore(noPinsKnockedGame)

    expect(score).toEqual(0)
  })

  it('scores one point if only one pin knocked in the game', () => {
    const singlePinKnockedGame = [0, 0, 0, 0, 1, 0, 0, 0, 0, 0]

    const score = computeScore(singlePinKnockedGame)

    expect(score).toEqual(1)
  })

  it('sums the pins knocked in each roll of the game', () => {
    const game = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]

    const score = computeScore(game)

    expect(score).toEqual(40)
  })

  it('computes spare', () => {
    const game = [4, 6, 1]

    const score = computeScore(game)

    expect(score).toEqual(12)
  })
})

const FIRST_POSITION=0
const SECOND_POSITION=1
const THIRD_POSITION=2

function computeScore (game) {
  if (game[FIRST_POSITION] + game[SECOND_POSITION] === 10) {
    return 10 + game[THIRD_POSITION] + game[THIRD_POSITION]
  }
  return sumPinsKnocked(game)
}

function sumPinsKnocked(game) {
  const pinsKnocked = 0
  return game.reduce((sum, frame) => sum + frame, pinsKnocked)
}
