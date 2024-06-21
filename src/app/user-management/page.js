import { fetchUserAction } from "@/actions";
import AddNewUser from "@/components/add-new-user";
import SingleUserCard from "@/components/single-user-card";

export default async function UserManagement(){
  const getListOfUsers= await fetchUserAction()
  //console.log(getListOfUsers)
  return(
    <div className="p-20 max-w-6xl">
      <div className="flex justify-between">
        <h1>User Management</h1>
        <AddNewUser />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-5">
        {getListOfUsers && getListOfUsers.data && getListOfUsers.data.length > 0 ?
        getListOfUsers.data.map(user=> <SingleUserCard user={user} />): <h2>NO USERS REGISTERED</h2>  
        }
      </div>
    </div>
  )
}