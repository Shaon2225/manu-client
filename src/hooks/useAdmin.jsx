import { useEffect, useState } from "react";

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);
  const email = user?.email;
  useEffect(()=>{
    if (email) {
        const url1 = `https://fathomless-woodland-51722.herokuapp.com/admin/${email}`;
        fetch(url1, {
          method: "GET",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            setAdmin(data);
            setAdminLoading(false);
          });
      }
    
  },[email])
  return [admin, adminLoading];
};

export default useAdmin;
