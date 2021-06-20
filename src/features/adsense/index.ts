import ReactGA from "react-ga";

/**
 * 羽月直播间链接
 */
export const ChiiLink =
  "https://live.bilibili.com/22870039";

/**
 * 跳转至直播间
 */
export function jumpToChii() {
  console.log(
    "你想用钱来收买我吗？这是对我的侮辱！我本想这样大声呵斥他，但钱实在是太多了。"
  );
  ReactGA.ga("send", {
    hitType: "event",
    eventCategory: "Outbound Link",
    eventAction: "click",
    eventLabel: "Chii Adsense",
  });
  window.open(ChiiLink);
}
