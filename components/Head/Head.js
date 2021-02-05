import HeadComponent from 'next/head'

const Head = ({title,name,tags,icon}) => {
    return ( 
        <HeadComponent>
            <title>{title}</title>
            <link rel="icon" href={icon} />
            {name?<meta name={name} content={tags} />:''}
        </HeadComponent>
    );
}

Head.defaultProps = {
    title: 'Next News',
    keyworkds: 'Next.js, web development, programming',
    description: 'Get the latest Next.js News',
    icon: '/favicon.ico'
}
 
export default Head;