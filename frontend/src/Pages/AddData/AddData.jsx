import React from 'react'
import { useContext } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { mainContext } from '../../Context/Context';
import { schema } from '../../Schema/Additional';
import "./_AddData.scss"
import { Helmet } from 'react-helmet';
const AddData = () => {

    const { state, postData, handleChange } = useContext(mainContext)
    const { register,
        handleSubmit,
        formState: { errors } } = useForm({
            resolver: yupResolver(schema),
        });
    const onSubmit = (data) => {
        console.log(data)
        postData()
    }
    return (
        <div className='addSection'>
               <Helmet>
                <title>ADD</title>
            </Helmet>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6 addForm">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="inputs">
                                <div className='headingName'>Name</div>
                                <input type="text" name='name' {...register("name")} value={state.name} onChange={handleChange} />
                                {errors.name && <p>This Name is required</p>}
                            </div>
                            <div className="inputs">
                                <div className='headingName'>Mark</div>
                                <input type="text" name='mark' {...register("mark")} value={state.mark} onChange={handleChange} />
                                {errors.mark && <p>This Mark Name is required</p>}

                            </div>
                            <div className="inputs">
                                <div className='headingName'>Price</div>
                                <input type="number" name='price' {...register("price")} value={state.price} onChange={handleChange} />
                                {errors.price && <p>This price is required</p>}

                            </div>
                            <div className="inputs">
                                <div className='headingName'>Image Adress</div>
                                <input type="url" name='url' {...register("url")} value={state.url} onChange={handleChange} />
                                {errors.url && <p>This Image Adress is required</p>}
                            </div>
                            <button>Add to data</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddData
