export function calculateInterpretationRankAverage(rankArray) {
    const rankAmountSum = rankArray.reduce((previousValue, currentValue) => {
        return previousValue + currentValue.amount
    }, 0)

    const rankAverage = (rankAmountSum / rankArray.length).toFixed(1)

    return rankAverage
}