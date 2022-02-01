// import React, { useState, useEffect } from 'react'

// import MetaData from '../layout/MetaData'
// import Sidebar from './Sidebar'

// import { useAlert } from 'react-alert'
// import { useDispatch, useSelector } from 'react-redux'
// import { updateSlider, getAdminSlider, clearErrors } from '../../actions/sliderActions'
// import { UPDATE_SLIDER_RESET } from '../../constants/sliderConstants'

// const UpdateSlider = ({ match, history }) => {

//     const [images, setImages] = useState([]);

//     const [oldImages, setOldImages] = useState([]);
//     const [imagesPreview, setImagesPreview] = useState([])

//     const alert = useAlert();
//     const dispatch = useDispatch();

//     const { error, slider } = useSelector(state => state.slider)
//     const { loading, error: updateError, isUpdated } = useSelector(state => state.deleteSlider);

//     const sliderId = match.params.id;

//     useEffect(() => {

//         if (slider && slider._id !== sliderId) {
//             dispatch(getAdminSlider(sliderId));
//         } else {
//             // setName(product.name);
//             // setPrice(product.price);
//             // setDescription(product.description);
//             // setCategory(product.category);
//             // setSeller(product.seller);
//             // setStock(product.stock)
//             setOldImages(slider.images)
//         }

//         if (error) {
//             alert.error(error);
//             dispatch(clearErrors())
//         }

//         if (updateError) {
//             alert.error(updateError);
//             dispatch(clearErrors())
//         }


//         if (isUpdated) {
//             history.push('/admin/sliders');
//             alert.success('Slider updated successfully');
//             dispatch({ type: UPDATE_SLIDER_RESET })
//         }

//     }, [dispatch, alert, error, isUpdated, history, updateError, slider, sliderId])


//     const submitHandler = (e) => {
//         e.preventDefault();

//         const formData = new FormData();
        
//         images.forEach(image => {
//             formData.append('images', image)
//         })

//         dispatch(updateSlider(slider._id, formData))
//     }

//     const onChange = e => {

//         const files = Array.from(e.target.files)

//         setImagesPreview([]);
//         setImages([])
//         setOldImages([])

//         files.forEach(file => {
//             const reader = new FileReader();

//             reader.onload = () => {
//                 if (reader.readyState === 2) {
//                     setImagesPreview(oldArray => [...oldArray, reader.result])
//                     setImages(oldArray => [...oldArray, reader.result])
//                 }
//             }

//             reader.readAsDataURL(file)
//         })
//     }


//     return (
//         <React.Fragment>
//             <MetaData title={'Update slider'} />
//             <div className="row">
//                 <div className="col-12 col-md-2">
//                     <Sidebar />
//                 </div>

//                 <div className="col-12 col-md-10">
//                     <React.Fragment>
//                         <div className="wrapper my-5">
//                             <form className="shadow-lg" onSubmit={submitHandler} encType='multipart/form-data'>
//                                 <h1 className="mb-4">Update Slider</h1>
//                                 <div className='form-group'>
//                                     <label>Images</label>

//                                     <div className='custom-file'>
//                                         <input
//                                             type='file'
//                                             name='product_images'
//                                             className='custom-file-input'
//                                             id='customFile'
//                                             onChange={onChange}
//                                             multiple
//                                         />
//                                         <label className='custom-file-label' htmlFor='customFile'>
//                                             Choose Images
//                                  </label>
//                                     </div>

//                                     {oldImages && oldImages.map(img => (
//                                         <img key={img} src={img.url} alt={img.url} className="mt-3 mr-2" width="55" height="52" />
//                                     ))}

//                                     {imagesPreview.map(img => (
//                                         <img src={img} key={img} alt="Images Preview" className="mt-3 mr-2" width="55" height="52" />
//                                     ))}

//                                 </div>


//                                 <button
//                                     id="login_button"
//                                     type="submit"
//                                     className="btn btn-block py-3"
//                                     disabled={loading ? true : false}
//                                 >
//                                     UPDATE
//                             </button>

//                             </form>
//                         </div>
//                     </React.Fragment>
//                 </div>
//             </div>

//         </React.Fragment>
//     )
// }

// export default UpdateSlider
