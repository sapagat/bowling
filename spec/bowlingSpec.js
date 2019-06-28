describe('Bowling', () => {
  it('scores no points when no pins knocked in the game', () => {
    const noPinsDown = '-- -- -- -- -- -- -- -- -- --'

    const score = computeScore(noPinsDown)

    expect(score).toEqual(0)
  })
})

function computeScore () {
  
}
