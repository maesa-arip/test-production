import React, { useState } from "react";
import App from "@/Layouts/App";
import { Head } from "@inertiajs/inertia-react";
import Container from "@/Components/Container";
import { Switch } from "@headlessui/react";
import DatePicker from "@/Components/DatePicker/DatePicker";
import { Terbilang } from "@/Libs/helper"

export default function Form() {
    const [enabled, setEnabled] = useState(false);
    const [anggaran, setAnggaran] = useState("");
    const [dariAnggaran, setDariAnggaran] = useState("");
    const [sampaiAnggaran, setSampaiAnggaran] = useState("");

    const onChangeAnggaranHandler = (e) => {
        setAnggaran(e.target.value);
    };
    const formatRupiahAnggaran = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
    }).format(anggaran);

    const onChangeDariAnggaranHandler = (e) => {
        setDariAnggaran(e.target.value);
    };
    const formatRupiahDariAnggaran = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
    }).format(dariAnggaran);

    const onChangeSampaiAnggaranHandler = (e) => {
        setSampaiAnggaran(e.target.value);
    };
    const formatRupiahSampaiAnggaran = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
    }).format(sampaiAnggaran);

    return (
        <div>
            <Head title="Plan Create" />

            <Container>
                <div className="mt-10 sm:mt-0">
                    <div className="md:grid md:grid-cols-3 md:gap-6">
                        <div className="md:col-span-1">
                            <div className="px-4 sm:px-0">
                                <h3 className="text-lg font-medium leading-6 text-gray-900">
                                    Data Perencanaan
                                </h3>
                                <p className="mt-1 text-sm text-gray-600">
                                    Use a permanent address where you can
                                    receive mail.
                                </p>
                            </div>
                        </div>
                        <div className="mt-5 md:mt-0 md:col-span-2">
                            <form action="#" method="POST">
                                <div className="shadow overflow-hidden sm:rounded-md">
                                    <div className="px-4 py-5 bg-white sm:p-6">
                                        <div className="grid grid-cols-6 gap-6">
                                            <div className="col-span-6 sm:col-span-5">
                                                <label
                                                    htmlFor="name"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Nama Perencanaan
                                                </label>
                                                <div className="mt-1 flex rounded-md">
                                                    <div className="flex items-center gap-x-0 shadow-sm sm:text-sm rounded-md bg-white px-2 border-gray-300 border focus-within:border-indigo-500 focus-within:ring-indigo-500 focus-within:ring-1 w-full">
                                                        <div className="inline-flex items-center rounded-l-md text-gray-500 text-sm">
                                                            Perencanaan
                                                        </div>
                                                        <input
                                                            type="text"
                                                            name="name"
                                                            id="name"
                                                            autoComplete="off"
                                                            className="border-0 focus:ring-0 form-text w-full"
                                                            placeholder=""
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                                <label
                                                    htmlFor="jangka_waktu_penawaran"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Jangka Waktu Penawaran
                                                </label>
                                                <input
                                                    type="text"
                                                    name="jangka_waktu_penawaran"
                                                    id="jangka_waktu_penawaran"
                                                    autoComplete="off"
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />

                                            </div>

                                            <div className="col-span-6 sm:col-span-3 lg:col-span-3">
                                                <label
                                                    htmlFor="jangka_waktu_pelaksanaan"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Jangka Waktu Pelaksanaan
                                                </label>
                                                <input
                                                    type="text"
                                                    name="jangka_waktu_pelaksanaan"
                                                    id="jangka_waktu_pelaksanaan"
                                                    autoComplete="off"
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-3 lg:col-span-3">
                                                <label
                                                    htmlFor="jumlah_revisi"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Jumlah Revisi
                                                </label>
                                                <input
                                                    type="text"
                                                    name="jumlah_revisi"
                                                    id="jumlah_revisi"
                                                    autoComplete="off"
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-3">
                                                <label
                                                    htmlFor="luas_bangunan"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Luas Bangunan
                                                </label>
                                                <input
                                                    type="text"
                                                    name="luas_bangunan"
                                                    id="luas_bangunan"
                                                    autoComplete="off"
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label
                                                    htmlFor="acuan_anggaran"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Acuan Anggaran Proyek
                                                </label>
                                                <input
                                                    type="text"
                                                    name="acuan_anggaran"
                                                    id="acuan_anggaran"
                                                    autoComplete="off"
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label
                                                    htmlFor="anggaran_proyek"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Anggaran Proyek
                                                </label>
                                                <input
                                                    type="number"
                                                    name="anggaran_proyek"
                                                    id="anggaran_proyek"
                                                    onChange={onChangeAnggaranHandler}
                                                    onWheel={(e) => e.target.blur()}
                                                    autoComplete="off"
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />
                                                <div className="flex">
                                                <div className="text-xs font-semibold mt-1 text-indigo-500 ml-1 inline">{anggaran && formatRupiahAnggaran} <span className="text-xs font-semibold mt-1 text-indigo-500 ml-1 inline italic">{anggaran && '('+Terbilang(anggaran)+' Rupiah)'}</span></div>
                                                </div>
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label
                                                    htmlFor="dari_anggaran"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Anggaran Perencanaan (dari)
                                                </label>
                                                <input
                                                    type="number"
                                                    name="dari_anggaran"
                                                    id="dari_anggaran"
                                                    onChange={onChangeDariAnggaranHandler}
                                                    onWheel={(e) => e.target.blur()}
                                                    autoComplete="off"
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />
                                                <div className="flex">
                                                <div className="text-xs font-semibold mt-1 text-indigo-500 ml-1 inline">{dariAnggaran && formatRupiahDariAnggaran} <span className="text-xs font-semibold mt-1 text-indigo-500 ml-1 inline italic">{dariAnggaran && '('+Terbilang(dariAnggaran)+' Rupiah)'}</span></div>
                                                </div>
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label
                                                    htmlFor="sampai_anggaran"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Anggaran Perencanaan (sampai)
                                                </label>
                                                <input
                                                    type="number"
                                                    name="sampai_anggaran"
                                                    id="sampai_anggaran"
                                                    onChange={onChangeSampaiAnggaranHandler}
                                                    onWheel={(e) => e.target.blur()}
                                                    autoComplete="off"
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />
                                                <div className="flex">
                                                <div className="text-xs font-semibold mt-1 text-indigo-500 ml-1 inline">{sampaiAnggaran && formatRupiahSampaiAnggaran} <span className="text-xs font-semibold mt-1 text-indigo-500 ml-1 inline italic">{sampaiAnggaran && '('+Terbilang(sampaiAnggaran)+' Rupiah)'}</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>


                <div className="hidden sm:block" aria-hidden="true">
                    <div className="py-5">
                        <div className="border-t border-gray-200" />
                    </div>
                </div>

                <div className="mt-10 sm:mt-0">
                    <div className="md:grid md:grid-cols-3 md:gap-6">
                        <div className="md:col-span-1">
                            <div className="px-4 sm:px-0">
                                <h3 className="text-lg font-medium leading-6 text-gray-900">
                                    Biaya dan Anggaran
                                </h3>
                                <p className="mt-1 text-sm text-gray-600">
                                    Use a permanent address where you can
                                    receive mail.
                                </p>
                            </div>
                        </div>
                        <div className="mt-5 md:mt-0 md:col-span-2">
                            <form action="#" method="POST">
                                <div className="shadow overflow-hidden sm:rounded-md">
                                    <div className="px-4 py-5 bg-white sm:p-6">
                                        <div className="grid grid-cols-6 gap-6">
                                            <div className="col-span-6 sm:col-span-3">
                                                <label
                                                    htmlFor="first-name"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    First name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="first-name"
                                                    id="first-name"
                                                    autoComplete="given-name"
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3 mt-5">
                                                <DatePicker />
                                            </div>

                                            <div className="col-span-6 sm:col-span-3">
                                                <label
                                                    htmlFor="last-name"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Last name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="last-name"
                                                    id="last-name"
                                                    autoComplete="family-name"
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-4">
                                                <label
                                                    htmlFor="email-address"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Email address
                                                </label>
                                                <input
                                                    type="text"
                                                    name="email-address"
                                                    id="email-address"
                                                    autoComplete="email"
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-3">
                                                <label
                                                    htmlFor="country"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Country
                                                </label>
                                                <select
                                                    id="country"
                                                    name="country"
                                                    autoComplete="country-name"
                                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                >
                                                    <option>
                                                        United States
                                                    </option>
                                                    <option>Canada</option>
                                                    <option>Mexico</option>
                                                </select>
                                            </div>

                                            <div className="col-span-6">
                                                <label
                                                    htmlFor="street-address"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Street address
                                                </label>
                                                <input
                                                    type="text"
                                                    name="street-address"
                                                    id="street-address"
                                                    autoComplete="street-address"
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                                <label
                                                    htmlFor="city"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    City
                                                </label>
                                                <input
                                                    type="text"
                                                    name="city"
                                                    id="city"
                                                    autoComplete="address-level2"
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                                <label
                                                    htmlFor="region"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    State / Province
                                                </label>
                                                <input
                                                    type="text"
                                                    name="region"
                                                    id="region"
                                                    autoComplete="address-level1"
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                                <label
                                                    htmlFor="postal-code"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    ZIP / Postal code
                                                </label>
                                                <input
                                                    type="text"
                                                    name="postal-code"
                                                    id="postal-code"
                                                    autoComplete="postal-code"
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="hidden sm:block" aria-hidden="true">
                    <div className="py-5">
                        <div className="border-t border-gray-200" />
                    </div>
                </div>

                <div className="mt-10 sm:mt-0">
                    <div className="md:grid md:grid-cols-3 md:gap-6">
                        <div className="md:col-span-1">
                            <div className="px-4 sm:px-0">
                                <h3 className="text-lg font-medium leading-6 text-gray-900">
                                    Kebutuhan Perencanaan
                                </h3>
                                <p className="mt-1 text-sm text-gray-600">
                                    Decide which communications you'd like to
                                    receive and how.
                                </p>
                            </div>
                        </div>
                        <div className="mt-5 md:mt-0 md:col-span-2">
                            <form action="#" method="POST">
                                <div className="shadow overflow-hidden sm:rounded-md">
                                    <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                                        <Switch.Group>
                                            <div className="flex items-center">
                                                <Switch.Label className="mr-4">
                                                    Enable notifications
                                                </Switch.Label>
                                                <Switch
                                                    checked={enabled}
                                                    onChange={setEnabled}
                                                    className={`${
                                                        enabled
                                                            ? "bg-blue-600"
                                                            : "bg-gray-200"
                                                    } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
                                                >
                                                    <span
                                                        className={`${
                                                            enabled
                                                                ? "translate-x-6"
                                                                : "translate-x-1"
                                                        } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                                                    />
                                                </Switch>
                                            </div>
                                        </Switch.Group>
                                        <fieldset>
                                            <legend className="sr-only">
                                                By Email
                                            </legend>
                                            <div
                                                className="text-base font-medium text-gray-900"
                                                aria-hidden="true"
                                            >
                                                By Email
                                            </div>
                                            <div className="mt-4 space-y-4">
                                                <div className="flex items-start">
                                                    <div className="flex items-center h-5">
                                                        <input
                                                            id="comments"
                                                            name="comments"
                                                            type="checkbox"
                                                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                                        />
                                                    </div>
                                                    <div className="ml-3 text-sm">
                                                        <label
                                                            htmlFor="comments"
                                                            className="font-medium text-gray-700"
                                                        >
                                                            Comments
                                                        </label>
                                                        <p className="text-gray-500">
                                                            Get notified when
                                                            someones posts a
                                                            comment on a
                                                            posting.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start">
                                                    <div className="flex items-center h-5">
                                                        <input
                                                            id="candidates"
                                                            name="candidates"
                                                            type="checkbox"
                                                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                                        />
                                                    </div>
                                                    <div className="ml-3 text-sm">
                                                        <label
                                                            htmlFor="candidates"
                                                            className="font-medium text-gray-700"
                                                        >
                                                            Candidates
                                                        </label>
                                                        <p className="text-gray-500">
                                                            Get notified when a
                                                            candidate applies
                                                            for a job.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start">
                                                    <div className="flex items-center h-5">
                                                        <input
                                                            id="offers"
                                                            name="offers"
                                                            type="checkbox"
                                                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                                        />
                                                    </div>
                                                    <div className="ml-3 text-sm">
                                                        <label
                                                            htmlFor="offers"
                                                            className="font-medium text-gray-700"
                                                        >
                                                            Offers
                                                        </label>
                                                        <p className="text-gray-500">
                                                            Get notified when a
                                                            candidate accepts or
                                                            rejects an offer.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </fieldset>
                                        <fieldset>
                                            <legend className="contents text-base font-medium text-gray-900">
                                                Push Notifications
                                            </legend>
                                            <p className="text-sm text-gray-500">
                                                These are delivered via SMS to
                                                your mobile phone.
                                            </p>
                                            <div className="mt-4 space-y-4">
                                                <div className="flex items-center">
                                                    <input
                                                        id="push-everything"
                                                        name="push-notifications"
                                                        type="radio"
                                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                    />
                                                    <label
                                                        htmlFor="push-everything"
                                                        className="ml-3 block text-sm font-medium text-gray-700"
                                                    >
                                                        Everything
                                                    </label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input
                                                        id="push-email"
                                                        name="push-notifications"
                                                        type="radio"
                                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                    />
                                                    <label
                                                        htmlFor="push-email"
                                                        className="ml-3 block text-sm font-medium text-gray-700"
                                                    >
                                                        Same as email
                                                    </label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input
                                                        id="push-nothing"
                                                        name="push-notifications"
                                                        type="radio"
                                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                    />
                                                    <label
                                                        htmlFor="push-nothing"
                                                        className="ml-3 block text-sm font-medium text-gray-700"
                                                    >
                                                        No push notifications
                                                    </label>
                                                </div>
                                            </div>
                                        </fieldset>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="hidden sm:block" aria-hidden="true">
                    <div className="py-5">
                        <div className="border-t border-gray-200" />
                    </div>
                </div>
                <div className="mt-10 sm:mt-0">
                    <div className="md:grid md:grid-cols-3 md:gap-6">
                        <div className="md:col-span-1">
                            <div className="px-4 sm:px-0">
                                <h3 className="text-lg font-medium leading-6 text-gray-900">
                                    Gambar Perencanaan
                                </h3>
                                <p className="mt-1 text-sm text-gray-600">
                                    This information will be displayed publicly
                                    so be careful what you share.
                                </p>
                            </div>
                        </div>
                        <div className="mt-5 md:mt-0 md:col-span-2">
                            <form action="#" method="POST">
                                <div className="shadow sm:rounded-md sm:overflow-hidden">
                                    <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                                        <div className="grid grid-cols-3 gap-6">
                                            <div className="col-span-3 sm:col-span-2">
                                                <label
                                                    htmlFor="company-website"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Website
                                                </label>
                                                <div className="mt-1 flex rounded-md shadow-sm">
                                                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                                        http://
                                                    </span>
                                                    <input
                                                        type="text"
                                                        name="company-website"
                                                        id="company-website"
                                                        className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                                                        placeholder="www.example.com"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="about"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                About
                                            </label>
                                            <div className="mt-1">
                                                <textarea
                                                    id="about"
                                                    name="about"
                                                    rows={3}
                                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                                    placeholder="you@example.com"
                                                    defaultValue={""}
                                                />
                                            </div>
                                            <p className="mt-2 text-sm text-gray-500">
                                                Brief description for your
                                                profile. URLs are hyperlinked.
                                            </p>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">
                                                Photo
                                            </label>
                                            <div className="mt-1 flex items-center">
                                                <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                                                    <svg
                                                        className="h-full w-full text-gray-300"
                                                        fill="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                                    </svg>
                                                </span>
                                                <button
                                                    type="button"
                                                    className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                >
                                                    Change
                                                </button>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">
                                                Cover photo
                                            </label>
                                            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                                <div className="space-y-1 text-center">
                                                    <svg
                                                        className="mx-auto h-12 w-12 text-gray-400"
                                                        stroke="currentColor"
                                                        fill="none"
                                                        viewBox="0 0 48 48"
                                                        aria-hidden="true"
                                                    >
                                                        <path
                                                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                    <div className="flex text-sm text-gray-600">
                                                        <label
                                                            htmlFor="file-upload"
                                                            className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                                        >
                                                            <span>
                                                                Upload a file
                                                            </span>
                                                            <input
                                                                id="file-upload"
                                                                name="file-upload"
                                                                type="file"
                                                                className="sr-only"
                                                            />
                                                        </label>
                                                        <p className="pl-1">
                                                            or drag and drop
                                                        </p>
                                                    </div>
                                                    <p className="text-xs text-gray-500">
                                                        PNG, JPG, GIF up to 10MB
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                        <button
                                            type="submit"
                                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

Form.layout = (page) => <App children={page}></App>;
