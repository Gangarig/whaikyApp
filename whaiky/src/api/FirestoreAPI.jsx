import Item from 'antd/es/list/Item';
import { firestore } from '../firebaseconfig';
import { addDoc, collection ,onSnapshot } from 'firebase/firestore';
import { toast } from 'react-toastify';

let postsRef = collection(firestore, 'posts');
let userRef = collection(firestore, 'users');

export const postStatus = (object) => {

    addDoc(postsRef , object)
    .then((res) => {
       toast.success('Post Added Successfully');
    })
    .catch((err) => {
        toast.error('Something went wrong');
    })
};

export const getStatus = (setAllStatuses) => {
    onSnapshot(postsRef, (response) => {
        setAllStatuses(response.docs.map((doc) => {
            return { ...doc.data() , id: doc.id};
        })
        );
    });
};

export const postUserData = (object) => {
    addDoc(userRef, object)
    .then(() => {})
    .catch((err) => {
        console.log(err);
    });
};

export const getCurrentUser = (setCurrentUser) => {
    onSnapshot(userRef, (response) => {
      setCurrentUser(
        response.docs
          .map((docs) => {
            return { ...docs.data(), id: docs.id };
          })
          .filter((item) => {
            return item.email === localStorage.getItem("userEmail");
          })[0]
      );
    });
  };