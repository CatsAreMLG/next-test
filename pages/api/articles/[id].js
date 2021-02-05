import {articles} from '../../../data'

const handler = ({query: {id}}, res) => {
    const filtered = articles.filter(article => article.id === id)

    filtered.length > 0 
    ? res.status(200).json(filtered[0]) 
    : res.status(404).json({message: `Article with the id of ${id} if not found`})
}

export default handler