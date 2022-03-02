const stations = [
  ["Big Bear Donair", 10, "restaurant"],
  ["Bright Lights Elementary", 50, "school"],
  ["Moose Mountain Community Centre", 45, "community centre"],
];

function chooseStations(arr) {
  let retArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i][1] >= 20 &&
      (arr[i][2] === "school" || arr[i][2] === "community centre")
    ) {
      retArr.push(arr[i][0]);
    }
  }
  return retArr;
}

console.log(chooseStations(stations));
