import { useState } from 'react';
import Head from 'next/head'

export default function Contact() {
  let [count, setCount] = useState(0);
  return <div className="container">
    <Head>
      <title>abombado Starter!</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <div>
        This is the count: {count}
      </div>
      <button onClick={() => {
        setCount(count + 1);
      }}>
        Add
      </button>
      <button onClick={() => {
        setCount(count - 1);
      }}>
        Subtract
      </button>
      <form name="contact" action="/success" method="POST" data-netlify="true" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label htmlFor="yourname">Your Name:</label>
          <input type="text" name="name" id="yourname" />
        </p>
        <p>
          <label htmlFor="youremail">Your Email: </label>{' '}
          <input type="email" name="email" id="youremail" />
        </p>
        <p>
          <label htmlFor="yourmessage">Message: </label>
          <textarea name="message" id="yourmessage"></textarea>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </main>

  </div>
}