import Card from "../Card/Card"
import posts from '../../posts.jsx'
import Tags from '../Tags/Tags.jsx'
import { useState } from "react"

//console.log(posts.published)


export default function Main() {

    const publishedPosts = posts.filter((post) => post.published)
    const tags = []
    const [title, setTitle] = useState('Peonie')
    const [newPost, setNewPost] = useState(posts)


    function addPost(event) {
        event.preventDefault()

        const newTitle = title.trim()

        if (newTitle === '') return


        console.log('stai aggiungendo un post')
    }

    posts.forEach(post => {

        const postTags = post.tags
        //console.log(postTags)

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
                    <form onSubmit={addPost} className="form" action="">
                        <input className="formText" type="text" onChange={(event) => setTitle(event.target.value)} placeholder="Inserisci il titolo del Post" value={title} />
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