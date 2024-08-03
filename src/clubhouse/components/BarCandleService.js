const getMaxTicketCount = (barchartData) =>
  barchartData.reduce(
    (acc, currentObj) =>
      currentObj.ticketCount > acc ? currentObj.ticketCount : acc,
    0
  );

const getScallingFactor = (maxHeight, currentCandleHeight) =>
  (currentCandleHeight / maxHeight) * 100;

const updateChartHeight = (barchartData) => {
  let result = [...barchartData];
  const maxHeight = getMaxTicketCount(barchartData);

  result = result.map((currentObj) => {
    let objResult;
    objResult = {
      ...currentObj,
      height: currentObj?.ticketCount
        ? `${getScallingFactor(maxHeight, currentObj?.ticketCount)}px`
        : 0,
    };
    return objResult;
  });
  return result;
};

export { getMaxTicketCount, updateChartHeight };
