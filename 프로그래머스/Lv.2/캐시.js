const solution = (cacheSize, cities) => {
  if (cacheSize === 0) return cities.length * 5;

  let cache = [];
  cache.push(cities[0].toLowerCase());
  console.log(cache);
  let time = 5; // cities의 0번째 요소는 항상 없으니까

  for (let i = 1; i < cities.length; i++) {
    const city = cities[i].toLowerCase();
    if (cache.includes(city)) {
      cache.splice(cache.indexOf(city), 1);
      time += 1;
    } else {
      if (cache.length === cacheSize) {
        cache.shift(); // 캐시 안에서 제일 오래된 값 제거
      }
      time += 5;
    }
    cache.push(city);
  }

  return time;
};
