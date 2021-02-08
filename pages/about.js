import Head from '../components/Head/Head'

import aboutStyles from '../styles/About.module.css'

const about = () => {
    return (
      <div>
        <Head title={"About"} />
        I'm a full-stack web developer living in San Antonio, Texas.
        <br />
        In my usual day, I get breakfast and work on a few of my solo projects
        finishing myday off with experimenting with different tools and
        technologies.
        <br />
        Fluent in React/Redux, Ruby/Rails, HTML, CSS/LESS/SCSS, Modern JS,
        SQL/SQLite. Love to design great looking projects.
        <br />
        You can find me on My <a className={aboutStyles.link} href="https://github.com/catsaremlg" target="_">Github</a> or on <a className={aboutStyles.link} href="https://www.linkedin.com/in/joshuadgon/" target="_">LinkedIn</a>.
      </div>
    );
}
 
export default about;