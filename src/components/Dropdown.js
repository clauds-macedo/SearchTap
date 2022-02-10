/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useContext, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { ReactCountryFlag } from "react-country-flag";
import { AppContext } from "../context/context";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Dropdown() {
  
  const { lang, saveLang } = useContext(AppContext)

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-gray-200 sm:text-sm md:text-2xl font-medium text-gray-700 hover:bg-gray-50 focus:outline-none">
          {lang}
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 sm:w-36 md:w-56 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none bg-gray-100 ">
          <div className="py-1">
            <Menu.Item>
              {() => (
                <button
                  className="text-gray-700 block px-4 py-2 sm:text-sm md:text-2xl"
                  onClick={() => saveLang("Portuguese")}
                >
                  Portuguese
                  <ReactCountryFlag
                    countryCode="BR"
                    svg
                    cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                    cdnSuffix="svg"
                    title="BR"
                  />
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {() => (
                <button
                  className="text-gray-700 block px-4 py-2 sm:text-sm md:text-2xl"
                  onClick={() => saveLang("English")}
                >
                  English
                  <ReactCountryFlag
                    countryCode="US"
                    svg
                    cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                    cdnSuffix="svg"
                    title="US"
                  />
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
