describe('Bowling', () => {
  it('scores no points when no pins knocked in the game', () => {
    const noPinsKnockedGame = [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0]]

    const score = computeScore(noPinsKnockedGame)

    expect(score).toEqual(0)
  })

  it('scores one point if only one pin knocked in the game', () => {
    const singlePinKnockedGame = [[0, 0], [0, 0], [1, 0], [0, 0], [0, 0]]

    const score = computeScore(singlePinKnockedGame)

    expect(score).toEqual(1)
  })

  it('sums the pins knocked in each roll of the game', () => {
    const game = [[2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2]]

    const score = computeScore(game)

    expect(score).toEqual(40)
  })

  it('computes the score of a game with a spare in the first frame', () => {
    const game = [[4, 6], [1, 1]]

    const score = computeScore(game)

    expect(score).toEqual(14)
  })

  xit('computes the score of a game with a single spare', () => {
    const game = [1, 1, 4, 6, 1, 1]

    const score = computeScore(game)

    expect(score).toEqual(16)
  })
})

const FIRST_POSITION=0
const SECOND_POSITION=1
const THIRD_POSITION=2
const FOURTH_POSITION=3
const SPARE = 10

function computeScore (game) {
  if (isFirstFrameASpare(game)) {
    const secondRolls = game[SECOND_POSITION]
    const secondFrame = new Frame(secondRolls)
    const firstFrameScore = scoreSpareFrame(secondFrame)
    return firstFrameScore + secondFrame.pinsKnocked()
  }
  return sumPinsKnocked(game)
}

function isFirstFrameASpare (game) {
  const firstFrame = new Frame(game[FIRST_POSITION])
  return firstFrame.isSpare()
}

function scoreSpareFrame (nextFrame) {
  return SPARE + nextFrame.pinsKnocked()
}

function sumPinsKnocked(game) {
  const pinsKnocked = 0
  return game.reduce((sum, frame) => sum + frame[0] + frame[1], pinsKnocked)
}

class Frame {
  constructor(rolls) {
    this.rolls = rolls
  }

  pinsKnocked () {
    return this.rolls[0] + this.rolls[1]
  }

  isSpare () {
    return this.pinsKnocked() == SPARE
  }
}
