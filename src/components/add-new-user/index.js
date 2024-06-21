'use client'

const { Button } = require("../ui/button")
import { addNewUserAction, editUserAction } from "@/actions"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { UserContext } from "@/context"
import { addNewUserFormControls, addNewUserFormInitialState } from "@/utils"
import { useContext, useState } from "react"
export default function AddNewUser(){
  const {openPopup, setOpenPopup, addNewUserFormData, setAddNewUserFormData, currentEditedID, setCurrentEditedID}= useContext(UserContext)
  //console.log(addNewUserFormData)
  function handleSaveButtonValid(){
    return Object.keys(addNewUserFormData).every(key => addNewUserFormData[key].trim() !== '')
  }
  async function handleAddNewUserAction(){
    const result= currentEditedID ?  await editUserAction(currentEditedID,addNewUserFormData, '/user-management') :await addNewUserAction(addNewUserFormData, '/user-management')
    console.log(result)
    setOpenPopup(false)
    setAddNewUserFormData(addNewUserFormInitialState)
    setCurrentEditedID(null)
  }

  return(
    <div>
      <Button onClick={()=>setOpenPopup(true)}>Add New User</Button>
      <Dialog open={openPopup} onOpenChange={()=>{    setOpenPopup(false)
           setAddNewUserFormData(addNewUserFormInitialState)
           setCurrentEditedID(null)
      }}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {currentEditedID ? 'Edit User' : 'Add a New User'}
          </DialogTitle>
        </DialogHeader>
        <form action={handleAddNewUserAction} className="grid gap-4 py-4">
            {
              addNewUserFormControls.map(controlItem=> <div className="mb-4" key={controlItem.name}>
                <Label htmlFor={controlItem.name} className="text-right pb-5">
              {controlItem.label}
              </Label>
              <Input
                id={controlItem.name}
                name={controlItem.name}
                placeholder={controlItem.placeholder}
                type={controlItem.type}
                value={addNewUserFormData[controlItem.name]}
                onChange={(event)=> setAddNewUserFormData({
                  ...addNewUserFormData,
                  [controlItem.name] : event.target.value
                })}
              />
              </div>
              )
            }
          <DialogFooter>
            <Button className="disabled:opacity-55" disabled={!handleSaveButtonValid()} type="submit">Save changes</Button>
          </DialogFooter>
        </form>
        
      </DialogContent>
    </Dialog>
    </div>
  )
}