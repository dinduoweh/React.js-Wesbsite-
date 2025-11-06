import React from 'react'

export default function About() {
  return (
    <>
      <section className="about container" style={{paddingTop: 32}}>
        <h1 style={{fontSize: '2.7rem', fontWeight: 800, marginBottom: 8}}>
          Chimdindu (Goodness) Oweh.
        </h1>
        <div style={{fontSize: '1.2rem', color: '#444', marginBottom: 32}}>
          Software Engineer (ML), CS (Artificial Intelligence & Data Science) + Math{' '}
          <a href="#" style={{textDecoration:'underline'}}>@Trinity Western University  <span className="ext">↗</span></a>
        </div>

        <div className="about-flex" style={{display: 'flex', gap: 36, alignItems: 'flex-start', flexWrap: 'wrap'}}>
          <div style={{flex: '0 0 320px', maxWidth: 340, minWidth: 220}}>
            <img
              src=".IMG_7755.jpeg"
              alt="Teddy Oweh at university"
              style={{width: '100%', borderRadius: 16, marginBottom: 12}}
            />
          </div>
          <div style={{flex: 1, minWidth: 260}}>
            <p style={{fontSize: '1.08rem', marginBottom: 18}}>
              I am a software engineer with a background in computer science and mathematics. I am currently an undergraduate student at Conestoga college  , pursuing a Bachelors degree in Computer Science with a focus on Artificial Intelligence and Data Science.
            </p>
            <p style={{fontSize: '1.08rem', marginBottom: 18}}>
              I am also current leading a research team{' '}
              <a href="#" style={{textDecoration:'underline'}}>@Conestoga College - Machine Intelligence Security and Research Lab <span className="ext">↗</span></a>,
              President of the{' '}
              <a href="#" style={{textDecoration:'underline'}}>Tarleton Computer Society<span className="ext">↗</span></a>
            </p>
            <p style={{fontSize: '1.08rem'}}>
              Big fan of opensource development, I have built several libraries, modules, packages & tools, in database, networking systems, algorithms, web-frameworks & machine learning/ai fields all opensourced{' '}
              <a href="#" style={{textDecoration:'underline'}}>Github - @dinduoweh<span className="ext">↗</span></a>
            </p>
          </div>
        </div>
      </section>

      {/* Contact block at the bottom, matching your screenshot */}
      <section className="contact container">
        <div className="contact-block" style={{marginTop: 40}}>
          <h2>Contact Me.</h2>
          <p className="lead">Reach out to me{' '}
            <a href="mailto:Chimdindu.oweh@mytwu.ca" style={{textDecoration:'underline'}}>Chimdindu.Oweh@mytwu.ca <span className="ext">↗</span></a>
            ,{' '}
            <a href="mailto:owehjeremy@gmail.com" style={{textDecoration:'underline'}}>owehjeremy@gmail.com <span className="ext">↗</span></a>
          </p>
          <div className="resources" style={{marginTop: 18}}>
            <a href="#" style={{textDecoration:'underline'}}>Resume<span className="ext">↗</span></a>
            <a href="#" style={{textDecoration:'underline'}}>Github<span className="ext">↗</span></a>
            <a href="#" style={{textDecoration:'underline'}}>Linkedlin<span className="ext">↗</span></a>
            <a href="#" style={{textDecoration:'underline'}}>Twitter<span className="ext">↗</span></a>
          </div>
        </div>
      </section>
    </>
  )
}
