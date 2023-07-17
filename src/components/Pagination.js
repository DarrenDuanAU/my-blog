const Paginations = (
  props,
)=> {
  const maxPages = props.maxPages;
  const setCurrentPage = props.setCurrentPage;
  const pageArray = Array.from(Array(maxPages).keys())



  return(
    <div className="pagination-container">
      {pageArray.map((item)=>(
        <div className="pagination-box" onClick={(e) => {setCurrentPage(e.target.id)}} id={item+1} key={item+1}>{item+1}</div>
      ))}
    </div>
  )
}
export default Paginations;