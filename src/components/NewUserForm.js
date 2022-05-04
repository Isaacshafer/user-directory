import React from 'react'
import { useFormik } from 'formik'


export default function NewUserForm(props) {
    const userData = props.userData

    const formik = useFormik({
        initialValues: {
            id: '',
            name: '',
            city: '',
            country: '',
            employer: '',
            title: '',
            favoriteMovies: []
        }, onSubmit: values => {
            values.name = {first: values.firstname, last: values.lastname}
            values.id = (userData[userData.length-1].id) + 1
            props.submitNewUser(values)
            alert(JSON.stringify(values, null, 2))
        }
    })

  return (
    <form onSubmit={formik.handleSubmit}>
        <label htmlFor='firstname'></label>
        <input
            id='firstname'
            placeholder='first name'
            name='firstname'
            type='text'
            onChange={formik.handleChange}
            value={formik.values.firstname}
        />
        <label htmlFor='lastname'></label>
        <input
            id='lastname'
            placeholder='last name'
            name='lastname'
            type='text'
            onChange={formik.handleChange}
            value={formik.values.lastname}
        />
        <label htmlFor='city'></label>
        <input
            id='city'
            placeholder='city'
            name='city'
            type='text'
            onChange={formik.handleChange}
            value={formik.values.city}
        />
        <label htmlFor='country'></label>
        <input
            id='country'
            placeholder='country'
            name='country'
            type='text'
            onChange={formik.handleChange}
            value={formik.values.country}
        />
        <label htmlFor='employer'></label>
        <input
            id='employer'
            placeholder='employer'
            name='employer'
            type='text'
            onChange={formik.handleChange}
            value={formik.values.employer}
        />
        <label htmlFor='title'></label>
        <input
            id='title'
            placeholder='title'
            name='title'
            type='text'
            onChange={formik.handleChange}
            value={formik.values.title}
        />
        <label htmlFor='favoriteMovies'></label>
        <input
            id='favoriteMovies'
            placeholder='favorite movie'
            name='favoriteMovies[0]'
            type='text'
            onChange={formik.handleChange}
            value={formik.values.favoriteMovies[0]}
        />
        <input
            id='favoriteMovies'
            placeholder='favorite movie'
            name='favoriteMovies[1]'
            type='text'
            onChange={formik.handleChange}
            value={formik.values.favoriteMovies[1]}
        />
        <input
            id='favoriteMovies'
            placeholder='favorite movie'
            name='favoriteMovies[2]'
            type='text'
            onChange={formik.handleChange}
            value={formik.values.favoriteMovies[2]}
        />
        <button type='submit'>Submit</button>
    </form>
  )
}
