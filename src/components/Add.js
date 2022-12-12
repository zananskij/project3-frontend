import { useState, useEffect } from 'react'

const Add = (props) => {
  const [post, setPost] = useState({ post: '', img: '', location: '', date: '' })

  const handleChange = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleCreate(post)
  }

  return (
    <div className="container-fluid">
      <div
        className="mb-5 bg-light 
      m-auto "
      >
        <form onSubmit={handleSubmit}>
          <label className="form-label" htmlFor="location ">
            location :{' '}
          </label>
          <input className=" form-control " type="text" name="location" onChange={handleChange} />
          <br />
          <br />
          <div className="mb-3">
            <label className="form-label" htmlFor="post">
              Post :{' '}
            </label>
            <input className=" form-control " type="text" name="post" onChange={handleChange} />
            <br />
            <br />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="date">
              date :{' '}
            </label>{' '}
            <br></br>
            <input className=" form-control " type="date" name="date" onChange={handleChange} />
            <br></br>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="img">
              Image :{' '}
            </label>
            <input className=" form-control " type="text" name="img" onChange={handleChange} />
            <br></br>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="lat">
              Lat :{' '}
            </label>
            <input className=" form-control " type="number" name="lat" onChange={handleChange} />
            <br></br>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="lng">
              Lng :{' '}
            </label>
            <input className=" form-control " type="number" name="lng" onChange={handleChange} />
            <br></br>
          </div>
          <input className="btn btn-danger" type="submit" />
        </form>
      </div>
    </div>
  )
}

export default Add
