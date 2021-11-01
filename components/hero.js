const Headline = ({ compStyles }) => {
  return (
    <>
      <h1 className={compStyles.title}>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>

      <p className={compStyles.description}>
        Get started by editing{' '}
        <code className={compStyles.code}>pages/index.js</code>
      </p>
    </>
  )
}

export default Headline
