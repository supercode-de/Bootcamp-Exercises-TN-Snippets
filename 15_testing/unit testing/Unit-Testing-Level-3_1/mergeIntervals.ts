type Interval = [number, number];

function mergeIntervals(intervals: Interval[]): Interval[] {
  if (intervals.length === 0) return [];

  // sort by start time
  intervals.sort((a, b) => a[0] - b[0]);

  const result: Interval[] = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const lastInterval = result[result.length - 1];
    const currentInterval = intervals[i];

    // overlapping intervals?
    if (lastInterval[1] >= currentInterval[0]) {
      lastInterval[1] = Math.max(lastInterval[1], currentInterval[1]); // merge them
    } else {
      result.push(currentInterval); // no overlap, add interval
    }
  }

  return result;
}
