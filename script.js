const allIconSprites = [
  "ei-archive",
  "ei-comment",
  "ei-plus",
  "ei-sc-vimeo",
  "ei-arrow-down",
  "ei-credit-card",
  "ei-pointer",
  "ei-sc-vk",
  "ei-arrow-left",
  "ei-envelope",
  "ei-question",
  "ei-sc-youtube",
  "ei-arrow-right",
  "ei-exclamation",
  "ei-redo",
  "ei-search",
  "ei-arrow-up",
  "ei-external-link",
  "ei-refresh",
  "ei-share-apple",
  "ei-bell",
  "ei-eye",
  "ei-retweet",
  "ei-share-google",
  "ei-calendar",
  "ei-gear",
  "ei-sc-facebook",
  "ei-spinner-2",
  "ei-camera",
  "ei-heart",
  "ei-sc-github",
  "ei-spinner-3",
  "ei-cart",
  "ei-image",
  "ei-sc-google-plus",
  "ei-spinner",
  "ei-chart",
  "ei-like",
  "ei-sc-instagram",
  "ei-star",
  "ei-check",
  "ei-link",
  "ei-sc-linkedin",
  "ei-tag",
  "ei-chevron-down",
  "ei-location",
  "ei-sc-odnoklassniki",
  "ei-trash",
  "ei-chevron-left",
  "ei-lock",
  "ei-sc-pinterest",
  "ei-trophy",
  "ei-chevron-right",
  "ei-minus",
  "ei-sc-skype",
  "ei-undo",
  "ei-chevron-up",
  "ei-navicon",
  "ei-sc-soundcloud",
  "ei-unlock",
  "ei-clock",
  "ei-paperclip",
  "ei-sc-telegram",
  "ei-user",
  "ei-close-o",
  "ei-pencil",
  "ei-sc-tumblr",
  "ei-close",
  "ei-play",
  "ei-sc-twitter"
];

document.addEventListener("DOMContentLoaded", function() {
  //somehow parse through user's HTML

  let filteredIconDivs = document.querySelectorAll(".icon").forEach(icon => {
    icon.classList.forEach(className => {
      if (allIconSprites.includes(className)) {
        let imgDomElement = document.createElement("img");
        imgDomElement.setAttribute("src", `./icons/${className}.svg`);
        icon.appendChild(imgDomElement);
      }
    });
  });
  //
  // let img = document.createElement("img");
  // img.setAttribute("src", "./icons/ei-archive.svg");
  //
  // document.querySelector("#unique").appendChild(img);
});
