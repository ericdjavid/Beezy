import React from 'react'
// import Link from 'next/link'
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import Image from 'next/image';


export default function TheNavbar() {
    return (
   <Navbar
  fluid={true}
  rounded={true}
  className=" bg-transparent w-9/12 mx-auto pt-5"

>
  <Navbar.Brand href="/">
    <img
      src="https://flowbite.com/docs/images/logo.svg"
      className="mr-3 h-6 sm:h-9"
      alt=" Logo"
    />
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
     Beezy
    </span>
  </Navbar.Brand>
  <div className="flex md:order-2 ">
    <Dropdown
      arrowIcon={false}
      inline={true}
      label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true}/>}
    >
      <Dropdown.Header>
        <span className="block text-sm">
          Bonnie Green
        </span>
        <span className="block truncate text-sm font-medium">
          name@flowbite.com
        </span>
      </Dropdown.Header>
      <Dropdown.Item>
        Dashboard
      </Dropdown.Item>
      <Dropdown.Item>
        Settings
      </Dropdown.Item>
      <Dropdown.Item>
        Earnings
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item>
        Sign out
      </Dropdown.Item>
    </Dropdown>
    <Navbar.Toggle />
  </div>
  <Navbar.Collapse>
    <Navbar.Link
      href="/navbars"
      active={true}
    >
      Home
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      About
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Services
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Pricing
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Contact
    </Navbar.Link>    <Navbar.Link href="/connect">
      Connect
    </Navbar.Link>
  </Navbar.Collapse>
</Navbar>
    )
}
