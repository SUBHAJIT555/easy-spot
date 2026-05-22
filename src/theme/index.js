const smartChoiceStore = require("./sites/smart-choice-store");
const trueBasket = require("./sites/true-basket");
const quickPickMarket = require("./sites/quick-pick-market");
const easySpot = require("./sites/easy-spot");

const themes = {
  "easy-spot": easySpot,
  "smart-choice-store": smartChoiceStore,
  "true-basket": trueBasket,
  "daily-cart": smartChoiceStore,
  "quick-pick-market": quickPickMarket,
};

const themeId = process.env.NEXT_PUBLIC_SITE_THEME || "easy-spot";

const activeTheme = themes[themeId] || easySpot;

module.exports = activeTheme;
module.exports.themes = themes;
module.exports.themeId = themeId;
module.exports.getTheme = (id) => themes[id] || easySpot;
