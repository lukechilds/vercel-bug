# Vercel Bug

It seems that when a response is sent Vercel makes the assumption that everything is finished and prematurely kills an async handler instead of waiting for the Promise to resolve. This means any work deferred to the next tick after the response is sent will not be completed.

I think this is a bug, it's inconsistent with how synchronous handlers work and I would intuitively expect that if a handler returns a Promise, that Vercel would wait for that Promise to resolve before killing the process.