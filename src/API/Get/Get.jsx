const Get = {
  appleData: (page) => {
    return `https://newsapi.org/v2/everything?q=apple&from=${new Date().getFullYear()}-${
      new Date().getMonth() + 1
    }-${new Date().getDate()}&to=${new Date().getFullYear()}-${
      new Date().getMonth() + 1
    }-${new Date().getDate()}&sortBy=popularity&page=${page}&pageSize=10&apiKey=cd5989874f8649ebb2dca88790fc68e4`;
  },
  teslaData: (page) => {
    return `https://newsapi.org/v2/everything?q=tesla&from=${new Date().getFullYear()}-${
      new Date().getMonth() + 1
    }-${new Date().getDate()}&sortBy=publishedAt&page=${page}&pageSize=10&apiKey=cd5989874f8649ebb2dca88790fc68e4`;
  },
  useBusinessData: (page) => {
    return `https://newsapi.org/v2/top-headlines?country=us&category=business&page=${page}&pageSize=10&apiKey=cd5989874f8649ebb2dca88790fc68e4`;
  },
  weatherData: (country) => {
    return `https://api.openweathermap.org/data/2.5/weather?q=${country}&units=metric&appid=274f61e74d7f8090a7f9dd2f7a0c3ec2`;
  },
};
export default Get;
