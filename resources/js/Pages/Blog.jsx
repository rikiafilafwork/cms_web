import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Blog() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Blog
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <table className="w-full table-auto border-collapse border border-slate-500">
                                <thead>
                                    <tr>
                                        <th className="border border-slate-600">
                                            Song
                                        </th>
                                        <th className="border border-slate-600">
                                            Artist
                                        </th>
                                        <th className="border border-slate-600">
                                            Year
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-slate-600">
                                            The Sliding Mr. Bones (Next Stop,
                                            Pottersville)
                                        </td>
                                        <td className="border border-slate-600">
                                            Malcolm Lockyer
                                        </td>
                                        <td className="border border-slate-600">
                                            1961
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border border-slate-600">
                                            Witchy Woman
                                        </td>
                                        <td className="border border-slate-600">
                                            The Eagles
                                        </td>
                                        <td className="border border-slate-600">
                                            1972
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border border-slate-600">
                                            Shining Star
                                        </td>
                                        <td className="border border-slate-600">
                                            Earth, Wind, and Fire
                                        </td>
                                        <td className="border border-slate-600">
                                            1975
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
