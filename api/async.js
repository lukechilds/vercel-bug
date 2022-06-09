const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export default async function handler(request, response) {
    console.log('before');
    response.send('hello, world!');
    await delay(100);
    // This doesn't get logged
    console.log('after');
}