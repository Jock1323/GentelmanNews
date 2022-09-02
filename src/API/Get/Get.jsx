const APPLE_GET_URL = `https://newsapi.org/v2/everything?q=apple&from=2022-08-22&to=2022-08-22&sortBy=popularity&page=${1}&pageSize=10&apiKey=cd5989874f8649ebb2dca88790fc68e4`;
const TESLA_GET_URL = `https://newsapi.org/v2/everything?q=tesla&from=2022-07-23&sortBy=publishedAt&page=${1}&pageSize=10apiKey=cd5989874f8649ebb2dca88790fc68e4`;
const USA_TOP_BUSINESS_URL =
  "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=cd5989874f8649ebb2dca88790fc68e4";

const Get = {
  appleData: (page) => {
    return `https://newsapi.org/v2/everything?q=apple&from=2022-08-02&to=2022-08-02&sortBy=popularity&page=${page}&pageSize=10&apiKey=cd5989874f8649ebb2dca88790fc68e4`;
  },
  teslaData: (page) => {
    return `https://newsapi.org/v2/everything?q=tesla&from=2022-08-02&sortBy=publishedAt&page=${page}&pageSize=10&apiKey=cd5989874f8649ebb2dca88790fc68e4`;
  },
  useBusinessData: (page) => {
    return `https://newsapi.org/v2/top-headlines?country=us&category=business&page=${page}&pageSize=10&apiKey=cd5989874f8649ebb2dca88790fc68e4`;
  },
};
export default Get;
