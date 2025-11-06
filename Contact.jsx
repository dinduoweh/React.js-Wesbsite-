import React from 'react'

export default function Contact() {
  return (
    <section className="contact container">
      <div className="contact-inner">
        <div className="social-row">
          <a href="https://github.com/" aria-label="GitHub" className="icon-link">
            {/* github */}
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 .5C5.73.5.9 5.33.9 11.59c0 4.72 3.07 8.73 7.33 10.15.54.1.74-.24.74-.53 0-.26-.01-1.12-.01-2.03-2.98.65-3.61-1.43-3.61-1.43-.49-1.24-1.2-1.57-1.2-1.57-.98-.67.07-.66.07-.66 1.08.08 1.65 1.11 1.65 1.11.96 1.64 2.52 1.17 3.13.9.1-.7.38-1.17.69-1.44-2.38-.27-4.88-1.19-4.88-5.26 0-1.16.41-2.11 1.09-2.86-.11-.27-.48-1.36.1-2.83 0 0 .9-.29 2.95 1.09A10.18 10.18 0 0112 6.84c.91.01 1.83.12 2.69.36 2.05-1.38 2.95-1.09 2.95-1.09.58 1.47.21 2.56.1 2.83.68.75 1.09 1.7 1.09 2.86 0 4.08-2.5 4.98-4.88 5.25.39.33.73.97.73 1.96 0 1.41-.01 2.55-.01 2.9 0 .29.2.63.75.52C19.03 20.32 22.1 16.31 22.1 11.59 22.1 5.33 17.27.5 12 .5z" fill="#6B7280"/>
            </svg>
          </a>

          <a href="https://www.linkedin.com/" aria-label="LinkedIn" className="icon-link linked">
            {/* linkedin circle */}
            <span className="linked-inner">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM8.34 17.34H6.14V10.5h2.2v6.84zM7.24 9.42c-.7 0-1.13-.47-1.13-1.06 0-.6.45-1.06 1.15-1.06.7 0 1.13.46 1.13 1.06 0 .59-.44 1.06-1.15 1.06zM18 17.34h-2.2v-3.37c0-.85-.3-1.43-1.06-1.43-.58 0-.92.39-1.07.77-.06.15-.07.36-.07.58v3.44H11.4s.03-5.58 0-6.16h2.2v.87c.29-.45.8-1.09 1.95-1.09 1.42 0 2.49.93 2.49 2.93v3.45z" fill="#111827"/>
              </svg>
            </span>
          </a>

          <a href="https://twitter.com/" aria-label="Twitter" className="icon-link">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 5.92c-.66.29-1.37.49-2.11.58.76-.46 1.34-1.19 1.61-2.06-.71.42-1.49.72-2.33.88A3.62 3.62 0 0015.5 4c-2 0-3.6 1.76-3.12 3.73C9.45 7.6 7.1 6.3 5.4 4.2c-.83 1.43.2 3.3 1.92 4.21-.6-.02-1.16-.18-1.65-.45v.05c0 1.93 1.37 3.55 3.17 3.92-.52.14-1.06.17-1.62.06.46 1.53 1.78 2.64 3.35 2.67A7.26 7.26 0 013 19.54 10.2 10.2 0 008.29 21c6.55 0 10.14-5.43 9.92-10.33.68-.5 1.26-1.12 1.72-1.83-.62.28-1.28.48-1.96.56z" fill="#6B7280"/>
            </svg>
          </a>

          <a href="mailto:example@example.com" aria-label="Email" className="icon-link">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" fill="#9CA3AF"/>
            </svg>
          </a>
        </div>

        <div className="contact-block">
          <h2>Contact Me.</h2>
          <p className="lead">Reach out to me</p>

          <div className="emails">
            <a href="mailto:ifechukwudeni.oweh@go.tarleton.edu">ifechukwudeni.oweh@go.tarleton.edu</a>
            <a href="mailto:teddyoweh@gmail.com">teddyoweh@gmail.com</a>
          </div>

          <div className="resources">
            <a href="#">Resume<span className="ext">↗</span></a>
            <a href="#">Github<span className="ext">↗</span></a>
            <a href="#">Linkedlin<span className="ext">↗</span></a>
            <a href="#">Twitter<span className="ext">↗</span></a>
          </div>
        </div>
      </div>
    </section>
  )
}
