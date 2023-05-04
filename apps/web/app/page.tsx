import { API } from '../data-access/axios-client'

export default async function Page() {
  const users = await API.getUsers()
  console.log(users)

  return <>Page</>
}
