import React from "react";
const Posts = (props)=> {
  const dataArray = props.currentPosts;
  const loading = props.loading;

  if (loading){
    return <div>Loading...</div>
  }
  return(
    <ul>
      {dataArray.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  )
}
export default Posts;