function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('المكتب الاستشاري للمراجعة والمحاسبة | عمرو قطب')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}