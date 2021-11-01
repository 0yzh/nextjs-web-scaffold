import Link from 'next/link'

const About = () => {
  return (
    <section>
      <div className="content-container">
        <h1 className="headline-1">about</h1>
        <Link href="/">
          <a>back to home</a>
        </Link>
        <p className="caption">Lorem ipsum</p>
      </div>
    </section>
  )
}

export default About
