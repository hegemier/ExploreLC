const NIGHTMARE = require('nightmare');
const CHEERIO = require('cheerio');
const fs = require('fs');

var nightmare = NIGHTMARE({show: true});
var url = "https://explorelc.org/events";

var getData = html => {
  var eventList = [];

  const $ = CHEERIO.load(html);
  $('div.sk_fb_events_col').each((k, elem0) => {
    $(elem0).find('div.grid-item-facebook-event').each((i, elem) => {
      /* Getting the date info */
      let dateList = [];
      var d = $(elem).find('div.sk_ww_fb_events_date_time > div.icon_text > div').html();
      if(!d) {
        d = $(elem).find('div.sk_ww_fb_events_date_time > div.icon_text').html();
        dateList.push(d);
      }
      else {
        $(elem).find('div.sk_ww_fb_events_date_time > div.icon_text > div.sk-m-r-15px').each( (j, elem1) => {
          d = $(elem1).html();
          dateList.push(d);
        });
      }
  
      /* re for image */
      var re = /\((.*)\)/;
      var p = re.exec($(elem).find('div.photo-thumb').attr('style'));
      if(p == null) {
        p = [''];
      }
      else {
        p = p[0].slice(2, -2);
      }
  
      /* push details to the events dictionary */
      eventList.push({
        title: $(elem).find('h2.title').html().replace("&apos;", "'").replace("&#x2019;", "'").replace("&amp;", "&"),
        date: dateList,
        pic: p,
        link: $(elem).find('div.event-btns > a').attr('href')
      });
    });
  })

  var json = {'data': eventList};

  return json;
}

nightmare.goto(url)
  .wait('div.sk-events')
  .evaluate(() => document.querySelector('body').innerHTML)
  .end()
  .then(response => {
    let dl = getData(response);

    json_dl = JSON.stringify(dl);

    fs.writeFile('eventList.json', json_dl, () => {console.log('Saved!')});
  }).catch(err => {
    console.log(err);
  });
