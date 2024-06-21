'use server'

import connectToDB from "@/database"
import User from "@/models/user"
import { revalidatePath } from "next/cache"

//add new user action
export async function addNewUserAction(formData, pathToRevalidate){
  await connectToDB()
  try{
    //validate data using joi
    const newlyCreatedUser= await User.create(formData)
    if(newlyCreatedUser){
      revalidatePath(pathToRevalidate)
      return{
        success: true,
        message: 'User added successfully'
      }
    }else{
      return{
        success: false,
        message: 'Some error occurred! Please try again'
      }
    }
  }catch(error){
    console.log(error)
    return{
      success: false,
      message: 'Some error occurred! Please try again'
    }
  }
}

//fetch users action
export async function fetchUserAction(){
  await connectToDB()
  try {
    const listOfUsers = await User.find({})
    if(listOfUsers){
      return{
        success: true,
        data: JSON.parse(JSON.stringify(listOfUsers))
      }
    }else{
      return{
        success: false,
        message: "Some error occurred! Please try again"
      }
    }
  } catch (error) {
    console.log(error)
    return{
      success: false,
      message: "Some error occurred! Please try again"
    }
  }
}

//edit a user action
export async function editUserAction(currentUserID, formData, pathToRevalidate){
  await connectToDB()
  try {
    const {firstName, lastName, email, address}= formData
    const updatedUser= await User.findByIdAndUpdate(currentUserID, {firstName, lastName, email, address}, {new:true})
    if(updatedUser){
      revalidatePath(pathToRevalidate)
      return{
        success: true,
        message: 'User updated successfully'
      }
    }else{
      return{
        success: false,
        message: "Some error occurred! Please try again"
      }
    }
  } catch (error) {
    console.log(error)
    return{
      success: false,
      message: "Some error occurred! Please try again"
    }
  }
}

//delete a user action
export async function deleteUserAction(currentUserID, pathToRevalidate){
  await connectToDB()
  try {
    const deletedUser = await User.findByIdAndDelete(currentUserID)
    if(deletedUser){
      revalidatePath(pathToRevalidate)
      return {
        success: true,
        message: 'User deleted successfully'
      }
    }else{
      return{
        success: false,
        message: "Some error occurred! Please try again"
      }
    }
  } catch (error) {
    console.log(error)
    return{
      success: false,
      message: "Some error occurred! Please try again"
    }
  }
}
