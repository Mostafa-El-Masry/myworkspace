import React from "react";
import UserTables from "./UserTables";

interface Props {
  searchParams :  {sortOrder : string}
}

const UsersPage = async ( { searchParams: {sortOrder}}: Props ) => {
  
  return (
    <>
      <h1>Users</h1>
      <UserTables sortOrder={sortOrder}/>
    </>
  );
};

export default UsersPage;
