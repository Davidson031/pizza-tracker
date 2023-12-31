import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Link, useForm, usePage } from '@inertiajs/react';
import SelectInput from "@/Components/SelectInput.jsx";
import { useEffect } from 'react';
import { useState } from 'react';
import { PlusIcon } from "@heroicons/react/24/outline";


export default function Dashboard({ auth, chef }) {

    const [toppings, setToppings] = useState([]);
    const [crusts, setCrusts] = useState([]);
    const [sizes, setSizes] = useState([]);


    const [newTopping, setnewTopping] = useState('');
    const [newCrust, setNewCrust] = useState('');
    const [newSize, setNewSize] = useState('');

    useEffect(() => {
        setToppings(chef.data.toppings);
        setCrusts(chef.data.crusts);
        setSizes(chef.data.sizes);
    }, [])


    const submit = (e) => {
        e.preventDefault();
    };

    const removeTopping = (index) => {

        setToppings(toppings.filter((topping, i) => {
            return i !== index;
        }));
    };

    const removeCrust = (index) => {
        setCrusts(crusts.filter((crust, i) => {
            return i !== index;
        }));
    };

    const removeSize = (index) => {
        setSizes(sizes.filter((size, i) => {
            return i !== index;
        }));
    };

    const addTopping = () => {
        setToppings([...toppings, { 'topping': newTopping }]);
        setnewTopping('')
    };

    const addCrust = () => {
        setCrusts([...crusts, { 'crust': newCrust }]);
        setNewCrust('')
    };

    const addSize = () => {
        setSizes([...sizes, { 'size': newSize }]);
        setNewSize('')
    };


    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6">
                            <form onSubmit={submit} className="flex flex-col justify-center">
                                <div className="container">
                                    <div className="flex items-center justify-center font-black m-3 mb-12">
                                        <h2 className="tracking-wide text-2xl text-gray-900">Toppings</h2>
                                    </div>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th className=''>
                                                    <input type="text" value={newTopping} onChange={(ev) => setnewTopping(ev.target.value)} className="focus:ring-indigo-500 mr-3 ml-2 mb-5 focus:border-indigo-500 shadow-sm  border-gray-300 rounded-md" />
                                                    <button type="button" className=" py-1 px-4 text-black" onClick={() => addTopping()}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 pt-1">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                                        </svg>

                                                    </button>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {
                                                toppings.map((topping, ind) => (
                                                    <tr key={ind}>
                                                        <td className='pr-5 pl-3'>  *  </td>
                                                        <td className='pr-5 pl-3'>{topping.topping}</td>
                                                        <td><button onClick={() => removeTopping(ind)}> Delete </button></td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </div>


                                <div className="container">
                                    <div className="flex items-center justify-center font-black m-3 mb-12">
                                        <h2 className="tracking-wide text-2xl text-gray-900">Crusts</h2>
                                    </div>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th className=''>
                                                    <input type="text" value={newCrust} onChange={(ev) => setNewCrust(ev.target.value)} className="focus:ring-indigo-500 mr-3 ml-2 mb-5 focus:border-indigo-500 shadow-sm  border-gray-300 rounded-md" />
                                                    <button type="button" className=" py-1 px-4 text-black" onClick={() => addCrust()}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 pt-1">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                                        </svg>

                                                    </button>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                crusts.map((crust, ind) => (
                                                    <tr key={ind}>
                                                        <td className='pr-5 pl-3'>  *  </td>
                                                        <td className='pr-5 pl-3'>{crust.crust}</td>
                                                        <td><button onClick={() => removeCrust(ind)}> Delete </button></td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </div>

                                <div className="container">
                                    <div className="container">
                                        <div className="flex items-center justify-center font-black m-3 mb-12">
                                            <h2 className="tracking-wide text-2xl text-gray-900">Sizes</h2>
                                        </div>
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th className=''>
                                                        <input type="text" value={newSize} onChange={(ev) => setNewSize(ev.target.value)} className="focus:ring-indigo-500 mr-3 ml-2 mb-5 focus:border-indigo-500 shadow-sm  border-gray-300 rounded-md" />
                                                        <button type="button" className=" py-1 px-4 text-black" onClick={() => addSize()}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 pt-1">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                                            </svg>

                                                        </button>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    sizes.map((size, ind) => (
                                                        <tr key={ind}>
                                                            <td className='pr-5 pl-3'>  *  </td>
                                                            <td className='pr-5 pl-3'>{size.size}</td>
                                                            <td><button onClick={() => removeSize(ind)}> Delete </button></td>
                                                        </tr>
                                                    ))
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <button className="px-4 py-1.5 rounded-md shadow-lg bg-gradient-to-r from-pink-600 to-red-600 font-medium text-gray-100 block transition duration-300 mt-10" type="submit">
                                    <span id="login_default_state">Salvar opções<span id="subtotal"></span></span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
