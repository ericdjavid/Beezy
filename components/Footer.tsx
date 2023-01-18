import React from 'react'
import { Footer } from 'flowbite-react'
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

export default function FooterProj() {
  return (
    <Footer container className="bg-greybeeliz">
      <div className="w-full">
        <Footer.Divider />
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex ">
          <div>
            <Footer.Brand
              href="https://flowbite.com"
              src="/assets/bee.png"
              alt="Logo"
              name="Beeliz"
            />
          </div>
          <div className="flex p-4 gap-4">
            <div>
              <Footer.Title title="À PROPOS" />
              <Footer.LinkGroup col>
              <Footer.Link href="#">Aide</Footer.Link>
              <Footer.Link href="#">Compte</Footer.Link>
              <Footer.Link href="#">Qui sommes-nous ?</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="MENTIONS LÉGALES" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Confidentialité</Footer.Link>
                <Footer.Link href="#">Préférences de coookies</Footer.Link>
                <Footer.Link href="#">Conditons d'utilisation</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Beeliz™" year={2023} />
          <div className="mt-4 flex space-x-4 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  )
}
