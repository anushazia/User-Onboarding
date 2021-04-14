import React from 'react';
import { useState, useEffect } from 'react';
import * as Yup from 'yup';
import axios from 'axios';

export default function Form() {
     const [formState, setFormState] = useState({
          name: '',
          email: '',
          password: '',
          terms: true,
     })

     const [users, setUsers] = useState();

     const formSubmit = (event) => {
         event.preventDefault();
         axios
         .post("https://reqres.in/api/users", formState)
         .then((response) => {
             setUsers(response.data);
         })
         .catch((error) => console.log("error"));
     }



}

   

