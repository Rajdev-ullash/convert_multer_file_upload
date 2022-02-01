import React, { useState, useEffect } from 'react'

import MetaData from '../layout/MetaData'
import Sidebar from './Sidebar'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { createSlider, clearErrors } from '../../actions/sliderActions'
import { CREATE_SLIDER_RESET } from '../../constants/sliderConstants'

function CreateSlider({history}) {
    // const [name, setName] = useState('');
    // const [price, setPrice] = useState(0);
    // const [description, setDescription] = useState('');
    // const [category, setCategory] = useState('');
    // const [stock, setStock] = useState(0);
    // const [seller, setSeller] = useState('');
    const [images, setImages] = useState([]);
    const [imagesPreview, setImagesPreview] = useState([])

    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, error, success } = useSelector(state => state.createSlider);

    useEffect(() => {

        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }

        if (success) {
            history.push('/admin/sliders');
            alert.success('Product Slider successfully');
            dispatch({ type: CREATE_SLIDER_RESET })
        }

    }, [dispatch, alert, error, success, history])

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        // formData.set('name', name);
        // formData.set('price', price);
        // formData.set('description', description);
        // formData.set('category', category);
        // formData.set('stock', stock);
        // formData.set('seller', seller);

        images.forEach(image => {
            formData.append('images', image)
        })

        dispatch(createSlider(formData))
    }

    const onChange = e => {

        const files = Array.from(e.target.files)

        setImagesPreview([]);
        setImages([])

        files.forEach(file => {
            const reader = new FileReader();

            reader.onload = () => {
                if (reader.readyState === 2) {
                    setImagesPreview(oldArray => [...oldArray, reader.result])
                    setImages(oldArray => [...oldArray, reader.result])
                }
            }

            reader.readAsDataURL(file)
        })
    }

    return (
        <React.Fragment>
            <MetaData title={'Create New Slider'} />
            <div className="row">
                <div className="col-12 col-md-2">
                    <Sidebar />
                </div>

                <div className="col-12 col-md-10">
                    <React.Fragment>
                        <div className="wrapper my-5">
                            <form className="shadow-lg" onSubmit={submitHandler} encType='multipart/form-data'>
                                <h1 className="mb-4">New Slider</h1>

                                <div className='form-group'>
                                    <label>Images - Upload At least 3 Img</label>

                                    <div className='custom-file'>
                                        <input
                                            type='file'
                                            name='product_images'
                                            className='custom-file-input'
                                            id='customFile'
                                            onChange={onChange}
                                            multiple
                                        />
                                        <label className='custom-file-label' htmlFor='customFile'>
                                            Choose Images
                                     </label>
                                    </div>

                                    {imagesPreview.map(img => (
                                        <img src={img} key={img} alt="Images Preview" className="mt-3 mr-2" width="55" height="52" />
                                    ))}

                                </div>


                                <button
                                    id="login_button"
                                    type="submit"
                                    className="btn btn-block py-3"
                                    disabled={loading ? true : false}
                                >
                                    CREATE
                                </button>

                            </form>
                        </div>
                    </React.Fragment>
                </div>
            </div>

        </React.Fragment>
    )
}

export default CreateSlider
