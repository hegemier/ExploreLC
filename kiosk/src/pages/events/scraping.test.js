const { URL, dl, getData } = require('./scraping')
const j = require('./eventList.json')

test('scraping URL', () => {
    expect(URL).toBe("https://explorelc.org/events");
});
test('json created', () => {
    expect(j).not.toContain('data');
});
test('event list not empty', () => {
    expect(j['data']).not.toHaveLength(0);
});
test('event contains title', () => {
    expect(j['data'][0]['title']).not.toBeNull();
});
test('event contains date', () => {
    expect(j['data'][0]['date']).not.toBeNull();
});
test('event date not empty', () => {
    expect(j['data'][0]['date']).not.toHaveLength(0);
});
test('event contains img url', () => {
    expect(j['data'][0]['pic']).not.toBeNull();
});
test('event img format', () => {
    expect(j['data'][0]['pic']).toContain("https://scontent");
});
test('event contains link', () => {
    expect(j['data'][0]['link']).not.toBeNull();
});
test('event link format', () => {
    expect(j['data'][0]['link']).toContain("https://www.facebook.com/");
});