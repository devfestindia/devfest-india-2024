import mainData from "../data/config.json";
import faqData from "../data/faq.json";
import cocData from "../data/coc.json";
import navbarData from "../data/navbar.json";

export const useJSONData = () => {

  return {
    mainData,
    faqData,
    cocData,
    navbarData
  };
};
