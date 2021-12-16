import UserPostConstruction from "./UserPostConstruction";


function UserPosts() {
//for each over array of objects from db
//output new container for each item with unique data in it

    // let post = ''
    const postsFromDB = [{date: '16/12/2021', username: 'kimberley', content: 'post number 1'},
        {date: '16/12/2021', username: 'kimberley', content: 'post number 2'}]

    //
    // postsFromDB.forEach(function (post) {
    //     console.log(post.date)
    //     // <UserPost date={post.date} username={post.username} content={post.content}/>
    //     post += '<div>' + post.date + '</div><div>' + post.username + '</div><div>' + post.content + '</div>'
    //     <UserPostConstruction content={post.content} />
    // })
    return (
        <>
            {
                postsFromDB.map(post => <UserPostConstruction content={post.content} />)
            }
        </>
    )
}

export default UserPosts