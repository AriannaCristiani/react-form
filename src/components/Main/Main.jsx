import Card from "../Card/Card"
import posts from '../../posts.jsx'
import Tags from '../Tags/Tags.jsx'

console.log(posts.published)


export default function Main() {

    const publishedPosts = posts.filter((post) => post.published)
    const tags = []

    posts.forEach(post => {

        const postTags = post.tags
        console.log(postTags)

        postTags.forEach((tag) => {
            if (!tags.includes(tag)) {
                tags.push(tag)
            }
        })

    })


    return (
        <main>
            <section>
                <div className="container list">
                    <Tags tags={tags} />
                </div>
                <div className="container">
                    <form className="form" action="">
                        <input className="formText" type="text" placeholder="Inserisci il titolo del Post" />
                        <input className="formBtn" type="submit" value={'INVIA'} />
                    </form>
                </div>
                <div className="container">
                    <div className="row">
                        {publishedPosts.map((post) => (
                            <div key={post.id} className="col">
                                <Card post={post} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}