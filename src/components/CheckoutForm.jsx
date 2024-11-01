<<<<<<< HEAD
const CheckoutForm = () => {
  return (
	<h1 className="text-3xl">CheckoutForm</h1>
  )
=======
import { Form, redirect } from 'react-router-dom';
import FormInput from './FormInput';
import SubmitBtn from './SubmitBtn';
import { customFetch, formatPrice } from '../utils';
import { toast } from 'react-toastify';
import { clearCart } from '../features/cart/cartSlice';

export const action = (store) => async() => {
	console.log(store);
	return null;
}

const CheckoutForm = () => {
  return <Form method='POST' className='flex flex-col gap-y-4'>
	<h4 className='font-medium text-xl capitalize'>Shipping Information</h4>
	<FormInput label='first name' name='name' type='text' />
	<FormInput label='address' name='address' type='text' />
	<div className="mt-4">
		<SubmitBtn text='place your order' />
	</div>
  </Form>
>>>>>>> 4c775bd (After Video 508 - Checkout Form - Setup)
}
export default CheckoutForm;