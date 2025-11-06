import React, { useState } from 'react'

const featuredImg = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=900&q=80"

const projectData = [
  {
    title: 'My personal website ',
    desc: 'The Jeremy-Website- repository is a public project hosted on GitHub that showcases my personal website built using HTML. The repository demonstrates my front-end development skills, including structuring web pages, organizing content, and designing a user-friendly layout. It serves as an online portfolio where I display my work, creativity, and understanding of core web development concepts. The project has gained some recognition with a star from another user, reflecting engagement from the developer community.',
    tech: ['Html', 'Css '],
    link: 'https://github.com/dinduoweh/Jeremy-Website-.git',
  },
  {
    title: 'Calculator App',
    desc: 'The Calculator Project on GitHub is a simple web-based calculator built using HTML and CSS. It showcases a basic user interface for performing arithmetic operations. While it’s a good beginner project for learning front-end structure and styling, it could be improved by adding JavaScript functionality for real calculations, better responsiveness, and a detailed README file. Overall, it’s a solid foundation for expanding into a more advanced version using React or adding features like history, dark mode, and keyboard input.',
    tech: ['Html ' ,'css'],
    link: 'https://github.com/dinduoweh/Calculator-Project-.git',
  },
  {
    title: 'Google Form ',
    desc: 'The Google Form project on GitHub is a simple HTML-based sign-up form. It demonstrates basic form structure and design for collecting user information. While it’s a good starting point for learning form creation, it could be improved by adding CSS styling, input validation, and backend functionality for storing form data.',
    tech: ['Html', 'Css'],
    link: '#',
  },
  {
    title: "Multipliaction Table Generated ",
    desc: "The Multiplication Table Generated project is a simple program designed to display multiplication tables for a given number or range. It helps users easily understand how multiplication works by generating results in a clear, structured format. This type of project is great for practicing loops, conditionals, and user input handling in programming. It also demonstrates basic logic-building skills and can be improved by adding features like user input validation, customizable table ranges, or a graphical interface.",
    tech: ['Python', ],
    link: 'https://github.com/dinduoweh/jeremy-py.git',
  },
]

const tags = [
  'All',
  'Machine Learning / Artificial Intelligence',
  'Networking & Cloud Computing',
  'Algorithms / Dynamical Programming',
  'Microservice / Backend Systems',
  'Database Systems',
  'Data Analytics & PreProcessing',
  'Hardware Engineering Integrations',
  'Frontend & UI Development',
  'Full Stack Development',
  'Libraries / Packages / Modules / Applications / Frameworks',
]

export default function Projects() {
  const [search, setSearch] = useState('')
  const [activeTag, setActiveTag] = useState('All')

  // Filter projects by search and tag (simple demo logic)
  const filtered = projectData.filter(p => {
    const matchesTag = activeTag === 'All' || (p.tags && p.tags.includes(activeTag))
    const matchesSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.desc.toLowerCase().includes(search.toLowerCase())
    return matchesTag && matchesSearch
  })

  return (
    <section className="projects container">
      <h1 style={{fontSize: '2.5rem', fontWeight: 800, marginBottom: 0}}>Projects.</h1>
      <div style={{fontSize: '1.25rem', color: '#444', margin: '18px 0 32px 0'}}>
        Coding is like a puzzle, and sometimes the best way to solve it is to take a step back and look at the big picture. <span style={{textDecoration:'underline'}}>&ndash; Jeremy Oweh</span>
      </div>

      <div style={{marginBottom: 32}}>
        <img src={featuredImg} alt="Project team" style={{width:'100%',borderRadius:18,marginBottom:8,border:'1px solid #ddd'}} />
        <div style={{fontSize:'1rem',color:'#666',marginTop:4,textAlign:'right'}}>NASA USLI '23 / NASA Marshall Space Flight Center <span className="ext">↗</span></div>
      </div>

      <div style={{marginBottom: 24}}>
        <input
          type="text"
          className="project-search"
          placeholder="Search Jeremy's Projects"
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{width:'100%',padding:'14px',fontSize:'1.1rem',border:'1px solid #ddd',borderRadius:8,marginBottom:18,background:'#ededed'}}
        />
        <div className="project-tags" style={{display:'flex',flexWrap:'wrap',gap:12}}>
          {tags.map(tag => (
            <button
              key={tag}
              className={activeTag === tag ? 'tag-active' : 'tag'}
              style={{
                border:'1.5px solid #222',
                background: activeTag === tag ? '#222' : 'transparent',
                color: activeTag === tag ? '#fff' : '#222',
                borderRadius: 18,
                padding: '7px 18px',
                fontSize: '1rem',
                cursor: 'pointer',
                fontWeight: 500,
                marginBottom: 4,
              }}
              onClick={() => setActiveTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <h2 style={{fontSize:'2rem',fontWeight:700,margin:'32px 0 12px 0'}}>All Project's</h2>
      <div style={{borderTop:'1.5px solid #e5e7eb',marginBottom:24}}></div>
      <div>
        {projectData.map((p, i) => (
          <div key={p.title} style={{borderBottom:'1.5px solid #e5e7eb',padding:'28px 0',display:'flex',alignItems:'center',justifyContent:'space-between',gap:24}}>
            <div style={{flex:1}}>
              <div style={{fontWeight:700,fontSize:'1.15rem',marginBottom:2}}>{p.title}</div>
              <div style={{fontSize:'1.08rem',color:'#444',marginBottom:12}}>{p.desc}</div>
              <div style={{display:'flex',alignItems:'center',gap:18,fontSize:'1rem'}}>
                {p.tech.map(t => (
                  <span key={t} style={{display:'flex',alignItems:'center',gap:4}}>
                    <span style={{fontSize:'1.5em',color:t==='Python'?'#2563eb':t==='Jupyter Notebook'?'#f87171':'#f59e42',verticalAlign:'middle'}}>•</span>
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <a href={p.link} style={{border:'1.5px solid #222',borderRadius:24,padding:'10px 28px',fontSize:'1.1rem',fontWeight:500,background:'#fff',color:'#222',textDecoration:'none',transition:'background .2s',display:'inline-block'}}>
              View <span className="ext">↗</span>
            </a>
          </div>
        ))}
      </div>

      <div className="contact-block">
        <h2>Contact Me.</h2>
        <p>Reach out to me</p>
        <div className="emails">
          <a href="mailto:">Chimdindu.oweh@mytwu.ca</a>
          <a href="mailto:owehjeremy@gmail.com">owehjeremy@gmail.com</a>
        </div>
        <div className="resources">
          <a href="#">Resume</a>
          <a href="#">Github</a>
          <a href="#">Linkedin</a>
          <a href="#">Twitter</a>
        </div>
      </div>
    </section>
  )
}
