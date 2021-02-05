import HeadComponent from 'next/head'

const Head = ({title,name,tags,icon = "/favicon.ico"}) => {
    return ( 
        <HeadComponent>
            <title>{title}</title>
            <link rel="icon" href={icon} />
            {name?<meta name={name} content={tags} />:''}
        </HeadComponent>
    );
}
 
export default Head;