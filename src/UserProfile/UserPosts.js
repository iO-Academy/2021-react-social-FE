import UserPostConstruction from "./UserPostConstruction";


function UserPosts(posts) {
    console.log(posts.posts.posts)
    let postsFromDB = posts.posts.posts
    return (
        <>
            {
                 postsFromDB.map(post => <UserPostConstruction content={post.content} />)
            }
        </>
    )
}

export default UserPosts