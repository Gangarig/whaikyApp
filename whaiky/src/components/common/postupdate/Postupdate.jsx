import React , { useState , useMemo } from 'react'
import ModalComponent from '../Modal/Modal'
import { postStatus , getStatus } from '../../../api/FirestoreAPI';
import  PostCard  from '../PostCard/PostCard';
import { getCurrentTimeStamp } from '../../../helpers/useMoment';
import { getUniqueid } from '../../../helpers/getUniqueid';
import './Postupdate.scss'


export default function PostStatus({currentUser}) {

  let userEmail = localStorage.getItem('userEmail');
  const [modalOpen, setModalOpen] = useState(false);
  const [status , setStatus] = useState('')
  const [allStatuses , setAllStatuses] = useState([]);
  const sendStatus = async () => { 
    let object = {
      status : status,
      timeStamp : getCurrentTimeStamp('LLL'),
      userEmail : userEmail,
      userName : currentUser.name,
      postID : getUniqueid(),
    };
   await postStatus(object);
   await setModalOpen(false);
   await setStatus('');
  }

  useMemo(() => {
    getStatus(setAllStatuses);
  },[])

  return (
    <div>
      <div  className='postStatusMain' >
      <button className='postStatusBtn' onClick={() => setModalOpen(true)} >Start Post</button>
      </div>
      <ModalComponent 
      setStatus={setStatus}  
      modalOpen={modalOpen} 
      setModalOpen={setModalOpen} 
      status={status}
      sendStatus={sendStatus}
      />
      {allStatuses.map((posts) => {
        return (
          <PostCard posts={posts} />
        )
      })}
    </div>
  )
}
