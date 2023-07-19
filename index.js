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

const getLink = async () => {
  const html = await getPage(url);
  if (html) {
    const $ = cheerio.load(html);
    const links = [];
    $("[href]").each((index, element) => {
      const link = $(element).attr("href");
      if (link && !links.includes(link)) {
        links.push(link);
      }
    });
    console.log(links);
  }
};

const url = "https://pacer.uscourts.gov/";
getLink(url);
