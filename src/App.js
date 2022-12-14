import { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import Post from './components/Post'
import Add from './components/Add'
import Edit from './components/Edit'
import Search from './components/Search'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

// load api
import { GoogleMap, useLoadScript } from '@react-google-maps/api'

const App = () => {
  const [post, setPost] = useState([])
  const [showEdit, setShowEdit] = useState([])

  // search
  const [isSearching, setIsSearching] = useState(false)
  const [filteredPost, setFilteredPost] = useState([])
  // search

  // check if map loaded || dont need to load twice

  // map

  // modal
  const [showModal, setShowModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)

  const handleClose = () => setShowModal(false)
  const handleShow = () => setShowModal(true)
  const handleShowEdit = () => setShowEditModal(true)
  const handleCloseEdit = () => setShowEditModal(false)
  // modal

  // click target id
  // const targetClick = () => {}

  const getPost = () => {
    axios
      .get('https://stark-journey-01436.herokuapp.com/')
      .then(
        (response) => setPost(response.data),
        (err) => console.log(err)
      )
      .catch((error) => console.log(error))
  }

  const handleCreate = (data) => {
    axios.post('https://stark-journey-01436.herokuapp.com/', data).then((response) => {
      console.log(response)
      getPost()
    })
  }

  const handleEdit = (data) => {
    axios.put('https://stark-journey-01436.herokuapp.com/' + data._id, data).then((response) => {
      let newPost = post.map((post) => {
        return post._id !== data._id ? post : data
      })
      setPost(newPost)
    })
  }

  const handleDelete = (deletedPost) => {
    axios.delete('https://stark-journey-01436.herokuapp.com/' + deletedPost._id).then((response) => {
      getPost()
    })
  }
  // search
  // search
  // search
  // const onSearchChange = (searchInput) => {
  //   const searchInputLower = searchInput.toLowerCase()
  //   if (searchInput.length > 0) {
  //     setIsSearching(true)
  //     const result = post.filter((post) => {
  //       console.log(post.location)
  //       return (
  //         post.post.match(searchInputLower) ||
  //         post.location.match(searchInputLower) ||
  //         post.date.match(searchInputLower)
  //       )
  //     })
  //     setFilteredPost(result)
  //   } else {
  //     setIsSearching(false)
  //   }
  // }
  const onSearchChange = useCallback(
    (searchInput) => {
      const searchInputLower = searchInput.toLowerCase()
      if (searchInput.length > 0) {
        setIsSearching(true)
        const result = post.filter((post) => {
          return (
            post.location.toLowerCase().match(searchInputLower) ||
            post.post.toLowerCase().match(searchInputLower) ||
            post.date.toLowerCase().match(searchInputLower)
          )
        })
        setFilteredPost(result)
      } else {
        setIsSearching(false)
      }
    },
    [post]
  )

  // const dropdownFunction = () => {
  //   document.getElementById(`dropdown${props.post.id}`).classList.toggle('show')
  // }

  const NoSearchResults = () => {
    return (
      <>
        <p className="noResults">No related posts found...</p>
      </>
    )
  }

  const postToDisplay = isSearching ? filteredPost : post
  // search
  // search
  // search
  const [show, setShow] = useState(false)
  const [showPost, setShowPost] = useState(false)
  const [showHomeP, setShowHomeP] = useState(false)

  useEffect(() => {
    getPost()
  }, [])

  const showHome = () => {
    setShowHomeP(true)
    setShowPost(false)
    setShow(false)
  }
  const showPostP = () => {
    setShowHomeP(false)
    setShowPost(true)
    // setShowPost(false)
  }
  // const showAdd = () => {
  //   setShowHomeP(false)
  //   setShowPost(false)
  //   setShow(true)
  // }

  return (
    <div className="container-fluid m-auto-0">
      <div className="header-nav"></div>
      <nav className="navbar w-100">
        <img src="./logo.png" className="logo" />
        <Search onSearchChange={onSearchChange} />

        <button className="btn btn-light addbtn" onClick={show}>
          <ion-icon name="add"></ion-icon>
        </button>
        <button className="btn btn-light showhomebtn" onClick={showHome}>
          <ion-icon name="home"></ion-icon>
        </button>
        <button className="btn btn-light" onClick={showPostP}>
          <ion-icon name="logo-twitter"></ion-icon>
        </button>
        <button className="btn btn-light">
          <ion-icon name="add"></ion-icon>
        </button>
      </nav>
      <div>
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Location</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {' '}
            <GoogleMap zoom={7} center={{ lat: 28, lng: -81 }} mapContainerClassName="map-container"></GoogleMap>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      {showHomeP ? (
        <div className="container">
          <video width="300rem" height="400rem" muted autoPlay loop controls>
            <source src="./T.mp4" type="video/mp4" />
          </video>
        </div>
      ) : null}

      {/* <h1 className="text-center">twitter Clone</h1> */}

      <div className="row posts-container text-center">
        {post.map((post) => {
          return showPost ? (
            <div className="post-container m-2" key={post._id}>
              <div className="col-12 m-auto ">
                <Post post={post} />
                {/* {showEdit ? <Edit handleEdit={handleEdit} /> : null} */}
              </div>
              {/* <button className="btn btn-outline-primary" onClick={(post) => setShowEdit(!showEdit)}>
                EDIT
              </button> */}
              <>
                {/* no longer needed  */}
                <Button variant="primary" onClick={handleShowEdit}>
                  Modal Btn
                </Button>

                <Modal show={showEditModal} onHide={handleCloseEdit}>
                  <Modal.Header closeButton>
                    <Modal.Title>Edit</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Edit handleEdit={handleEdit} />
                  </Modal.Body>
                  <Modal.Footer>
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => {
                        handleDelete(post)
                      }}
                      value={post._id}
                    >
                      Delete
                    </button>
                    <Button variant="secondary" onClick={handleCloseEdit}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              </>

              {/* <Edit post={post} handleEdit={handleEdit} /> */}
            </div>
          ) : null
        })}
        <NoSearchResults />
      </div>
    </div>
  )
}

export default App
