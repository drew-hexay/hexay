import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import HexayLogo from "../public/vercel.svg";
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid';

import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  ChartBarSquareIcon,
  HomeIcon,
  ArrowUpRightIcon,
  UsersIcon,
  XMarkIcon,
  Square3Stack3DIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  ReceiptPercentIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/outline";
import SlideOver from '../components/SlideOver';

const navigation = [
  { name: "Home", href: "#", icon: HomeIcon, current: true },
  { name: "Tasks", href: "#", icon: Square3Stack3DIcon, current: false },
  { name: "Integrations", href: "#", icon: ChartBarSquareIcon, current: false },
  { name: "Reports", href: "#", icon: ChartPieIcon, current: false },
  { name: "Documents", href: "#", icon: DocumentDuplicateIcon, current: false },
  { name: "Billing", href: "#", icon: ReceiptPercentIcon, current: false },
  { name: "Users", href: "#", icon: UsersIcon, current: false },
  { name: "Records", href: "#", icon: RectangleStackIcon, current: false },
];

const tabs = [
  { name: "My Workspaces", href: "#", current: true },
  { name: "Teams", href: "#", current: false },
  { name: "Following", href: "#", current: false },
  { name: "Updates", href: "#", count: "2", current: false },
];

const workspaceTabs = [
  { name: "View all", href: "#", current: true },
  { name: "Recently visited", href: "#", current: false },
  { name: "Recently created", href: "#", current: false },
  { name: "Discover", href: "#", current: false },
];

const workspaceCards = [
  {
    name: 'Referral campaign',
    tag: 'Admin',
    description: 'We are launching a new referral campaign in three states: California, Florida, and Texas. The new campaign is intended to drive conversions.',
    lastUpdated: '2',
    slackLogo: 'https://www.svgrepo.com/show/303320/slack-new-logo-logo.svg',
    notionLogo: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png'
  },
  {
    name: 'Referral campaign',
    tag: 'Admin',
    description: 'We are launching a new referral campaign in three states: California, Florida, and Texas. The new campaign is intended to drive conversions.',
    lastUpdated: '2',
    slackLogo: 'https://www.svgrepo.com/show/303320/slack-new-logo-logo.svg',
    notionLogo: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png'
  },
  {
    name: 'Referral campaign',
    tag: 'Admin',
    description: 'We are launching a new referral campaign in three states: California, Florida, and Texas. The new campaign is intended to drive conversions.',
    lastUpdated: '2',
    slackLogo: 'https://www.svgrepo.com/show/303320/slack-new-logo-logo.svg',
    notionLogo: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png'
  },
  {
    name: 'Referral campaign',
    tag: 'Admin',
    description: 'We are launching a new referral campaign in three states: California, Florida, and Texas. The new campaign is intended to drive conversions.',
    lastUpdated: '2',
    slackLogo: 'https://www.svgrepo.com/show/303320/slack-new-logo-logo.svg',
    notionLogo: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png'
  },
  {
    name: 'Referral campaign',
    tag: 'Admin',
    description: 'We are launching a new referral campaign in three states: California, Florida, and Texas. The new campaign is intended to drive conversions.',
    lastUpdated: '2',
    slackLogo: 'https://www.svgrepo.com/show/303320/slack-new-logo-logo.svg',
    notionLogo: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png'
  },
  {
    name: 'Referral campaign',
    tag: 'Admin',
    description: 'We are launching a new referral campaign in three states: California, Florida, and Texas. The new campaign is intended to drive conversions.',
    lastUpdated: '2',
    slackLogo: 'https://www.svgrepo.com/show/303320/slack-new-logo-logo.svg',
    notionLogo: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png'
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function WorkspaceGrid(props) {
  return (
    <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 md:px-8">
      {props.workspaceCards.map((workspaceCard) => (
        <li key={workspaceCard.name} className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
          <div className="flex w-full items-center justify-between space-x-6 p-4">
            <div className="flex-1 truncate">
              <div className="flex items-center space-x-3 flow-root">
                <h3 className="truncate text-lg font-medium text-gray-900 float-left">
                  {workspaceCard.name}
                </h3>
                <div className="float-right">
                  <div className="flex items-center justify-center mb-2">
                    <img
                      className="h-5 w-5 flex-shrink-0 bg-white"
                      src={workspaceCard.slackLogo}
                      alt=""
                    />
                    <p className="truncate text-sm text-gray-900 mx-2">
                      Message team
                    </p>
                    <ArrowUpRightIcon className="flex-shrink-0 h-4 w-4" />
                  </div>
                  <div className="flex">
                    <img
                      className="h-5 w-5 flex-shrink-0 bg-white"
                      src={workspaceCard.notionLogo}
                      alt=""
                    />
                    <p className="truncate text-sm text-gray-900 mx-2">
                      View docs
                    </p>
                    <ArrowUpRightIcon className="flex-shrink-0 h-4 w-4" />
                  </div>
                </div>
              </div>
              <span className="inline-block flex-shrink-0 rounded-full bg-green-100 px-3 py-1 mr-2 text-xs font-medium text-green-800">
                {workspaceCard.tag}
              </span>
              <span className="inline-block flex-shrink-0 rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800">
                {workspaceCard.tag}
              </span>
              <p className="mt-1 truncate text-sm text-gray-900 mt-3">
                Description
              </p>
              <p className="mt-1 truncate text-sm text-gray-500 whitespace-normal">
                {workspaceCard.description}
              </p>
            </div>
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="flex w-0 flex-1">
                <a
                  className="relative -mr-px inline-flex w-0 flex-1 items-bottom justify-left rounded-bl-lg border border-transparent py-4 text-sm text-gray-500 hover:text-gray-500"
                >
                  <span className="ml-3">Updated {workspaceCard.lastUpdated} minutes ago</span>
                </a>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}



export default function Example() {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 md:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-white">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                      <button
                        type="button"
                        className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="h-0 flex-1 overflow-y-auto pt-5 pb-4">
                    <div className="flex flex-shrink-0 items-center px-4">
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                      />
                    </div>
                    <nav className="mt-5 space-y-1 px-2">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                            "group flex items-center px-2 py-2 text-base font-medium rounded-md"
                          )}
                        >
                          <item.icon
                            className={classNames(
                              item.current
                                ? "text-gray-500"
                                : "text-gray-400 group-hover:text-gray-500",
                              "mr-4 flex-shrink-0 h-6 w-6"
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      ))}
                    </nav>
                  </div>
                  <div className="flex flex-shrink-0 border-t border-gray-200 p-4">
                    <a href="#" className="group block flex-shrink-0">
                      <div className="flex items-center">
                        <div>
                          <img
                            className="inline-block h-10 w-10 rounded-full"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-base font-medium text-gray-700 group-hover:text-gray-900">
                            Tom Cook
                          </p>
                          <p className="text-sm font-medium text-gray-500 group-hover:text-gray-700">
                            View profile
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div className="w-14 flex-shrink-0">
                {/* Force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-white">
            <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
              <div className="flex flex-shrink-0 items-center px-4">
                <img
                  src="https://flowbite.com/docs/images/logo.svg"
                  class="mr-3 h-6 sm:h-7"
                  alt="Flowbite Logo"
                />
                <h1 className="text-2xl font-semibold text-gray-900">Hexay</h1>
              </div>

              <nav className="mt-5 flex-1 space-y-1 bg-white px-2">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-100 text-gray-900"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                      "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                    )}
                  >
                    <item.icon
                      className={classNames(
                        item.current
                          ? "text-gray-500"
                          : "text-gray-400 group-hover:text-gray-500",
                        "mr-3 flex-shrink-0 h-6 w-6"
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>
            <div className="flex flex-shrink-0 border-t border-gray-200 p-4">
              <a href="#" className="group block w-full flex-shrink-0">
                <div className="flex items-center">
                  <div>
                    <img
                      className="inline-block h-9 w-9 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                      Tom Cook
                    </p>
                    <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">
                      View profile
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col md:pl-64">
          <div className="sticky top-0 z-10 bg-gray-100 pl-1 pt-1 sm:pl-3 sm:pt-3 md:hidden">
            <button
              type="button"
              className="-ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <main className="flex-1">
            <div className="py-6">
              <div className="flow-root mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                <h1 className="float-left text-2xl font-semibold text-gray-900">
                  Welcome back, Hemal!
                </h1>
                <button
                  type="button"
                  className="float-right inline-flex items-center rounded border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  onClick={() => setOpen(true)}
                >
                  + Create
                </button>
              </div>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                <div>
                  <div className="sm:hidden">
                    <label htmlFor="tabs" className="sr-only">
                      Select a tab
                    </label>
                    {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
                    <select
                      id="tabs"
                      name="tabs"
                      className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      defaultValue={tabs.find((tab) => tab.current).name}
                    >
                      {tabs.map((tab) => (
                        <option key={tab.name}>{tab.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="hidden sm:block">
                    <div className="border-b border-gray-200">
                      <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                        {tabs.map((tab) => (
                          <a
                            key={tab.name}
                            href="#"
                            className={classNames(
                              tab.current
                                ? "border-indigo-500 text-indigo-600"
                                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200",
                              "whitespace-nowrap flex py-4 px-1 border-b-2 font-medium text-sm"
                            )}
                            aria-current={tab.current ? "page" : undefined}
                          >
                            {tab.name}
                            {tab.count ? (
                              <span
                                className={classNames(
                                  tab.current
                                    ? "bg-indigo-100 text-indigo-600"
                                    : "bg-gray-100 text-gray-900",
                                  "hidden ml-3 py-0.5 px-2.5 rounded-full text-xs font-medium md:inline-block"
                                )}
                              >
                                {tab.count}
                              </span>
                            ) : null}
                          </a>
                        ))}
                      </nav>
                    </div>
                  </div>
                </div>
                <div className="py-4"></div>
                {/* /End replace */}
              </div>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                <h1 className="text-2xl text-gray-900">
                  My workspaces
                </h1>
                <br />
                <h2 className="text-1xl text-gray-700" >
                  Discover and view your workspaces
                </h2>
              </div>
              <br />
              <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                <div>
                  <div className="sm:hidden">
                    <label htmlFor="workspaceTabs" className="sr-only">
                      Select a tab
                    </label>
                    {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
                    <select
                      id="workspaceTabs"
                      name="workspaceTabs"
                      className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      defaultValue={workspaceTabs.find((tab) => tab.current).name}
                    >
                      {workspaceTabs.map((tab) => (
                        <option key={tab.name}>{tab.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="hidden sm:block">
                    <div className="border-b border-gray-200">
                      <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                        {workspaceTabs.map((tab) => (
                          <a
                            key={tab.name}
                            href="#"
                            className={classNames(
                              tab.current
                                ? "border-indigo-500 text-indigo-600"
                                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200",
                              "whitespace-nowrap flex py-4 px-1 border-b-2 font-medium text-sm"
                            )}
                            aria-current={tab.current ? "page" : undefined}
                          >
                            {tab.name}
                            {tab.count ? (
                              <span
                                className={classNames(
                                  tab.current
                                    ? "bg-indigo-100 text-indigo-600"
                                    : "bg-gray-100 text-gray-900",
                                  "hidden ml-3 py-0.5 px-2.5 rounded-full text-xs font-medium md:inline-block"
                                )}
                              >
                                {tab.count}
                              </span>
                            ) : null}
                          </a>
                        ))}
                      </nav>
                    </div>
                  </div>
                </div>
                <div className="py-4"></div>
                {/* /End replace */}
              </div>
              <WorkspaceGrid workspaceCards={workspaceCards} />
              <SlideOver isOpen={open} setOpen={setOpen} />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
