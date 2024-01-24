import React from 'react'
import { sort } from 'fast-sort';
import Link from 'next/link';

interface User {
    id: number;
    name: string;
    email: string;
  }

  interface Props {
    sortOrder : string;
  }


const UserTables = async ( {sortOrder} : Props) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();

const sorteUsers = sort(users).asc(sortOrder === 'email' ? user => user.email : user => user.name)

  return (
    <table className="table table-bordered">
    <thead>
      <tr>
        <th><Link href="/users?sortOrder=name">Name</Link></th>
        <th><Link href="/users?sortOrder=id">ID</Link></th>
        <th><Link href="/users?sortOrder=email">email</Link></th>
      </tr>
    </thead>
    <tbody>
      {sorteUsers.map((user) => (
        <tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.id}</td>
          <td>{user.email}</td>
        </tr>
      ))}
    </tbody>
  </table>
  )
}

export default UserTables