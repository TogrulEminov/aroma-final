import * as yup from 'yup';

export const schema = yup.object().shape({
    name: yup.string().required(),
    price: yup.number().required().positive().integer(),
    mark: yup.string().required(),
    url: yup.string().url().required(),
});