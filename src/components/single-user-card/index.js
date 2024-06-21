'use client'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "../ui/button"
import { deleteUserAction } from "@/actions"
import { useContext } from "react"
import { UserContext } from "@/context"

export default function singleUserCard({user}){

  const {setOpenPopup, setAddNewUserFormData, setCurrentEditedID}= useContext(UserContext)

  async function handleUserDelete(currentUserID){
    const res = await deleteUserAction(currentUserID, '/user-management')
  }

  function handleEdit(currentUser){
    setOpenPopup(true)
    setAddNewUserFormData({
      firstName: currentUser?.firstName,
      lastName: currentUser?.lastName,
      email: currentUser?.email,
      address: currentUser?.address
    })
    setCurrentEditedID(currentUser?._id)
  }

  return(
    <div>
      <Card className="w-[350px] m-5">
      <CardHeader>
        <CardTitle>{user?.firstName} {user?.lastName}</CardTitle>
        <CardDescription>{user?.email}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{user?.address}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button onClick={()=>handleEdit(user)}>Edit</Button>
        <Button onClick={()=> handleUserDelete(user?._id)}>Delete</Button>
        {/* arrow function to prevent infinite call stack */}
      </CardFooter>
    </Card>
    </div>
  )
}