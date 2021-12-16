import UserPostConstruction from "./UserPostConstruction";


function UserPosts() {
    const postsFromDB = [{date: '16/12/2021', username: 'kimberley', content: 'post number 1'},
        {date: '16/12/2021', username: 'kimberley', content: 'post number 2'}]

    return (
        <>
            {
                postsFromDB.map(post => <UserPostConstruction content={post.content} />)
            }
        </>
    )
}

export default UserPosts