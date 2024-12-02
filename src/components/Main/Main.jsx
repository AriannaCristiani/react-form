import Card from "../Card/Card"
import posts from '../../posts.jsx'
import Tags from '../Tags/Tags.jsx'
import { useState } from "react"

console.log(posts.published)


export default function Main() {

    const publishedPosts = posts.filter((post) => post.published)
    const tags = []
    const [newTitle, setNewTitle] = useState('Peonie')

    posts.forEach(post => {

        const postTags = post.tags
        console.log(postTags)

        postTags.forEach((tag) => {
            if (!tags.includes(tag)) {
                tags.push(tag)
            }
        })

    })

    function addPost(event) {
        event.preventDefault()
        console.log('stai aggiungendo un post')


    }


    return (
        <main>
            <section>
                <div className="container list">
                    <Tags tags={tags} />
                </div>
                <div className="container">
                    <form onSubmit={addPost} className="form" action="">
                        <input className="formText" type="text" placeholder="Inserisci il titolo del Post" value={newTitle} />
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