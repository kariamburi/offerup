//import userform from "@/components/userform";
"use client";
import { useSession } from "next-auth/react";
import { createUser, updateUser } from "@/lib/actions/user.actions";
import { useEffect } from "react";
const settings = () => {
  // Help check if the user is logged in and help redirect if they are not
  const session: any = useSession<any | null | undefined>();
  //console.log("firstName:" + firstName);
  //console.log(userId);

  const user = {
    email: session.data?.user.email,
    contactName: session.data?.user.name,
    photo: session.data?.user.image,
    contactNumber: "",
    businessName: "",
    facebooklink: "",
    instagramlink: "",
    youtubelink: "",
  };

  useEffect(() => {
    // Function to run once when the page loads
    const creatingUser = async () => {
      const newUser = await createUser(user);
      console.log(newUser);
    };
    creatingUser();

    // Specify an empty dependency array to ensure the effect runs only once
  }, []);

  return (//.;lygyo
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <button type="submit">Create User</button>
      </form>                                       
    </>
  );
};

export default settings;
