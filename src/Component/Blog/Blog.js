import React from 'react';

const Blog = () => {
    return (
        <div>
          <div>
            <h2>What is 'cors'? </h2>
          <p>CORS stands for Cross-Origin Resource Sharing.

            Normally, requesting resources across domains is a security risk. If a random site could pull data into JavaScript from another, the random site could "steal" information that way. If the target site were, say, your bank's website, perhaps just visiting such a site could get sensitive information leaked.

            For this reason, modern browsers will ask the target site for CORS HTTP headers that list the requesting site as allowed to request resources cross-origin from it. If the target site doesn't return such headers, then the request is denied at the browser level. This lets "good" requests through that the target site allows, but leaves "bad" requests that aren't whitelisted, blocked.

            If sites don't have any sensitive data, they can return a wildcard origin "*" to indicate that any origin may request data. For example, a public API for a service with no login system might be perfectly OK for anyone to pull from, anywhere, and so wildcard CORS headers would be appropriate for it.</p>
          </div>
          <div>
            <h2>Why are you using firebase ? What other options do you have to implement
              authentication?</h2>
          <p>Starting with the most obvious reason - Firebase has a really good free tier. The so-called "Spark plan" provides you with quite generous usage limits (one of the top offerings in the business as far as I know) for all of Firebase products. You can find more details on the pricing page.</p>
          <p>From hosting and database, through static storage, messaging, analytics, and app distribution to cloud functions and machine learning, Firebase is truly an all-in-one solution. Sure, you can always go and find some better alternatives for each of these products individually, but I guarantee you won't achieve the same level of integration and polish between them, as you would with Firebase.</p>
          <p>Easy API</p>
          <p>Great docs & community</p>
          <p>"Serverless standard"</p>
          <h3>other option of Authentication:</h3>
          <p>Okta</p>
          <p>Supabase</p>
          <p>Ory</p>
          <p>STYTCH</p>
          </div>
          <div>
             <h2>How does the private route work?
            </h2>
          <p>A classic example would be a site that has a landing page, various marketing pages, a login page, and then an app section for logged-in users. The logged-in section doesn’t need to be server rendered as all data will be loaded live from your API after the user logs in. So it makes sense to make this portion of your site client-only.

            Client-only routes will exist on the client only and will not correspond to index.html files in an app’s built assets in the /public directory. If you’d like site users to be able to visit client routes directly, you need to set up your site to handle those routes appropriately. Or, if you have control over the configuration of the file server yourself, you can set up the server to handle these routes.</p>
          </div>
          <div>
          <h2>What is Node? How does Node work?</h2>
          <p>Node.js is a single-threaded, open-source, cross-platform runtime environment for building fast and scalable server-side and networking applications. It runs on the V8 JavaScript runtime engine, and it uses event-driven, non-blocking I/O architecture, which makes it efficient and suitable for real-time applications.

            Table of Contents</p>
          <p>Node.js uses the “Single Threaded Event Loop” architecture to handle multiple clients at the same time. To understand how this is different from other runtimes, we need to understand how multi-threaded concurrent clients are handled in languages like Java.

            See how Kinsta stacks up against the competition.

            Select your provider
            Compare

            In a multi-threaded request-response model, multiple clients send a request, and the server processes each one before sending the response back. However, multiple threads are used to process concurrent calls. These threads are defined in a thread pool, and each time a request comes in, an individual thread is assigned to handle it.</p>

          </div>

        </div>
    );
};

export default Blog;