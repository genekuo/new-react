const precisionRound = (number, precision) => {
    const factor = Math.pow(10, precision)
    return Math.round(number * factor) / factor
  }

  export default precisionRound