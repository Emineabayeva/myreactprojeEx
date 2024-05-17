import React from 'react'
import { Formik } from 'formik';
import { v4 as uuidv4 } from 'uuid';
const Add = () => {
  return (
    <div>

<Formik
       initialValues={{ email: '', password: '' }}
       onSubmit={(values, { setSubmitting }) => {
axios.post("http://localhost:4404/products",{
id:uuidv4(),
title:values.title,
image:values.image,
desctiption:values.desctiption,
price:values.price,

})
        
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form onSubmit={handleSubmit}>
           <input
             type="text"
             name="title"
             placeholder='title'
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.title}
           />
           <input
             type="text"
             name="image"
             placeholder='image'
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.image}
           />
             <input
             type="text"
             name="description"
             placeholder='description'
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.desctiption}
           />
            <input
             type="number"
             name="price"
             placeholder='price'
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.price}
           />
           
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </form>
       )}
     </Formik>
    </div>
  )
}

export default Add