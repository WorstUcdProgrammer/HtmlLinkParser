const axios = require("axios");
const cheerio = require("cheerio");

const getPage = async (url) => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const url = "https://pacer.uscourts.gov/";
const html = await getPage(url);
if (html) {
  const $ = cheerio.load(html);
    
}
