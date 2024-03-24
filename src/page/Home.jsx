import React from 'react';
import {  signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc, getDocs  } from "firebase/firestore";
import {db} from '../firebase';

const Home = () => {
    const navigate = useNavigate();

    onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log(user, 'user');
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
        //   const uid = user.uid;
          // ...
        } else {
            console.log(user, 'user');

          // User is signed out
          // ...
        }
    });


    const handleLogout = () => {               
        signOut(auth).then(() => {
        // Sign-out successful.
            navigate("/");
            console.log("Signed out successfully")
        }).catch((error) => {
        // An error happened.
        });
    }

    const handleTest = async (e)  => {     
        e.preventDefault();  
        //   console.log(db, 'db');
        //   console.log(collection(db, "test"), 'collection(db, "test")');
        // await getDocs(collection(db, "test"))
        // .then((querySnapshot)=>{               
        //     const newData = querySnapshot.docs
        //         .map((doc) => ({...doc.data(), id:doc.id }));
        //     console.log(newData, 'newData');
        // // setTodos(newData);                
        //     // console.log(todos, newData);
        // })
        try {
            const docRef = await addDoc(collection(db, "todos"), {
              todo: 'test todo',    
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }

          await getDocs(collection(db, "test"))
          .then((querySnapshot)=>{               
              const newData = querySnapshot.docs
                  .map((doc) => ({...doc.data(), id:doc.id }));
              console.log(newData, "getDocs newData");
          })
    }
   
    return(
        <>
            <nav>
                <p>
                    Welcome Home
                </p>
 
                <div>
        			<button onClick={handleLogout}>
                        Logout
                    </button>
                    <button onClick={handleTest}>
                        test
                    </button>
        		</div>
            </nav>
        </>
    )
}
 
export default Home;