import { Link, useForm, usePage } from '@inertiajs/react';
import SelectInput from "@/Components/SelectInput.jsx";
import { useEffect } from 'react';

export default function Add({ chef }) {

    const { data, setData, post } = useForm({
        size: '',
        crust: '',
        topping: '',
    });

    useEffect(() => {
        console.log(data);
    }, [data]);


    const submit = (e) => {
        e.preventDefault();
        post(route('public.pizzas.store'), {
            preserveScroll: true
        });
    };

    return (
        <>
            {/* <pre>{JSON.stringify(chef.data, null, 2)}</pre> */}
            <div className="bg-gradient-to-tr from-fuchsia-300 to-sky-600">
                <section id="login" className="p-4 flex flex-col justify-center min-h-screen max-w-md mx-auto">
                    <div className="p-6 bg-sky-100 rounded">
                        <div className="flex items-center justify-center font-black m-3 mb-12">
                            <h2 className="tracking-wide text-2xl text-gray-900">Chef: {chef.data.name}</h2>
                        </div>
                        <form onSubmit={submit} className="flex flex-col justify-center">

                            <label className="text-sm font-medium">Size</label>

                            <select name="size" id="size" onChange={ (e) => setData('size', e.target.value) }>
                                <option value="none">None</option>
                                {
                                    chef.data.sizes.map((size, ind) => (
                                        <option value={size.size} key={ind}> {size.size}</option>
                                    ))
                                }
                            </select>


                            <label className="text-sm font-medium">Topping</label>
                            <select name="topping" id="topping" onChange={ (e) => setData('topping', e.target.value) }>
                                <option value="none">None</option>
                                {
                                    chef.data.toppings.map((topping, ind) => (
                                        <option value={topping.topping} key={ind}> {topping.topping}</option>
                                    ))
                                }
                            </select>



                            <label className="text-sm font-medium">Crust</label>
                            <select name="crust" id="crust" onChange={ (e) => setData('crust', e.target.value) }>
                                <option value="none">None</option>
                                {
                                    chef.data.crusts.map((crust, ind) => (
                                        <option value= { crust.crust } key={ind}> {crust.crust}</option>
                                    ))
                                }
                            </select>
                            <button className="px-4 py-1.5 rounded-md shadow-lg bg-gradient-to-r from-pink-600 to-red-600 font-medium text-gray-100 block transition duration-300 mt-5" type="submit">
                                <span id="login_default_state">Make Order<span id="subtotal"></span></span>
                            </button>
                        </form>
                    </div>
                </section>

            </div>
        </>
    );
}