export default function handler(request, response) {
    console.log('before');
    response.send('hello, world!');
    // This gets logged
    console.log('after');
}