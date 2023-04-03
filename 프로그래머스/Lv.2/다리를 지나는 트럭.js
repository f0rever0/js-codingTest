function solution(bridge_length, weight, truck_weights) {
  let time = 0; // 경과시간
  let passing = []; // 다리를 건너는 트럭
  let truckWeightSum = 0; // 다리에 있는 트럭의 무게 합

  while (truck_weights.length || passing.length) {
    // 트럭이 모두 건널때까지
    if (
      weight >= truckWeightSum + truck_weights[0] &&
      bridge_length >= passing.length + 1
    ) {
      const currentTruck = truck_weights.shift();
      truckWeightSum += currentTruck;
      passing.push([currentTruck, time + bridge_length]);
      time++;
    } else {
      const [currentTruck, truckOutTime] = passing.shift();
      if (time < truckOutTime) time = truckOutTime;
      truckWeightSum -= currentTruck;
    }
  }
  return time + 1;
}
