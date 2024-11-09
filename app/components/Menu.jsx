"use client"

import { useState } from "react"
import { XMarkIcon, PlusIcon, EllipsisHorizontalIcon } from "@heroicons/react/20/solid"

export default function Menu() {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(!open)

  return (
    <div className="fixed left-4 top-4 z-20">
      <div className="max-w-[400px] rounded border border-neutral-400 bg-white px-4 py-3">
        <div className="flex w-full justify-between gap-3">
          <h1 className="font-bold">Trudere Secretum</h1>
          <button onClick={handleOpen}>{open ? <XMarkIcon className="size-4" /> : <EllipsisHorizontalIcon className="size-4" />}</button>
        </div>
        {open && (
          <>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quasi debitis doloremque repellat? Doloremque, sapiente? A
              mollitia explicabo inventore facilis maiores eveniet necessitatibus alias, qui quaerat blanditiis, exercitationem repudiandae
              dolorum?
            </p>
          </>
        )}
      </div>
    </div>
  )
}
