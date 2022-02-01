import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

import {MDBDataTable} from 'mdbreact';

import Sidebar from './Sidebar';

import Loader from '../layout/Loader';
import MetaData from '../layout/MetaData';
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { getAdminSlider, deleteSlider, clearErrors} from '../../actions/sliderActions';
import { DELETE_SLIDER_RESET } from '../../constants/sliderConstants'

function SliderList({ history }) {

    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, error, slider } = useSelector(state => state.slider);
    const { error: deleteError, isDeleted } = useSelector(state => state.deleteSlider)

    useEffect(() => {
        dispatch(getAdminSlider());

        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }

        if (deleteError) {
            alert.error(deleteError);
            dispatch(clearErrors())
        }

        if (isDeleted){
            alert.success('Slider delete successfully');
            history.push('/admin/sliders')
            dispatch({type: DELETE_SLIDER_RESET})
        }

    }, [dispatch, alert, error, deleteError, isDeleted, history]);
    

    const setSliders = () => {
        const data = {
            columns: [
                {
                    label: 'ID',
                    field: 'id',
                    sort: 'asc'
                },
                // {
                //     label: 'Name',
                //     field: 'name',
                //     sort: 'asc'
                // },
                // {
                //     label: 'Price',
                //     field: 'price',
                //     sort: 'asc'
                // },
                // {
                //     label: 'Stock',
                //     field: 'stock',
                //     sort: 'asc'
                // },
                {
                    label: 'Actions',
                    field: 'actions'
                },
            ],
            rows: []
        }

        slider.forEach((slide) => {
            data.rows.push({
                id: slide._id,
                // name: slide.name,
                actions: <React.Fragment>
                        <Link to={`/admin/slider/${slide._id}`} className="btn btn-primary py-1 px-2">
                            <i className="fa fa-pencil"></i>
                        </Link>
                        <button 
                        className="btn btn-danger py-1 px-2 ml-2" onClick={ () => deleteSeliderHandler(slide._id)}>
                            <i className="fa fa-trash"></i>
                        </button>
                </React.Fragment>
            })
        })

        return data;
    }

    const deleteSeliderHandler = (id) => {
        
        let warning = 'Be carefull !! you slider will be lost'
        if (window.confirm(warning)) {
             dispatch(deleteSlider(id))
        } else {
            return 'Product delete';
        }
    }

    return (
        <React.Fragment>
            
            <MetaData title={'Admin Slider'}/>

            <div className="row">
                <div className="col-12 col-md-2">
                    <Sidebar />
                </div>
                <div className="col-12 col-md-10">
                    <React.Fragment>

                        <h1 className="my-5">Slider</h1>

                        {loading ? <Loader /> : (
                            <MDBDataTable
                                data={setSliders()}
                                className="px-3"
                                bordered
                                striped
                                hover
                            />
                        )}

                    </React.Fragment>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SliderList
