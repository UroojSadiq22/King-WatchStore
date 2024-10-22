// "use client";
// import { useState } from "react";
// import { FiUser } from "react-icons/fi";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button"
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog"
// import { Label } from "@/components/ui/label"

// interface userData{
//     username: string
//     email: string
//     password: string
// }


// export default function User() {
//     const [data , setData] = useState<userData>({
//         username:"",
//         email:"",
//         password:""
//     })

//     const handleLogin = () => {
//         setData(data)
//     }
    

//   return (
//     <>
//       <Dialog>
//       <DialogTrigger asChild>
//       <FiUser className="text-xl cursor-pointer" />
//       </DialogTrigger>
//       <DialogContent className="sm:max-w-[825px] sm:h-[425px]">

//         <DialogHeader>
//           <DialogTitle>Login</DialogTitle>
//           <DialogDescription>
//             Login to your profile here. Click save when you're done.
//           </DialogDescription>
//         </DialogHeader>
//         <div className="grid gap-4 py-4">
//           <div className="grid grid-cols-4 items-center gap-4">
//             <Label htmlFor="username" className="text-right">
//               Username
//             </Label>
//             <Input
//               id="username"
//               name="username"
//               value={data.username}
//               onChange={(e) => setData(e.target.value)}
//               className="col-span-2"
//             />
//           </div>

//           <div className="grid grid-cols-4 items-center gap-4">
//             <Label htmlFor="email" className="text-right">
//               Email
//             </Label>
//             <Input
//               id="email"
//               name="email"
//               value={data.email}
//               onChange={(e) => setData(e.target.value)}
//               className="col-span-2"
//             />
//           </div>

//           <div className="grid grid-cols-4 items-center gap-4">
//             <Label htmlFor="password" className="text-right">
//               Password
//             </Label>
//             <Input
//               id="password"
//               name="password"
//               value={data.password}
//               onChange={(e) => setData(e.target.value)}
//               className="col-span-2"
//             />
//           </div>
//         </div>
//         <DialogFooter>
//           <Button type="submit" onClick={handleLogin}>Login</Button>
//         </DialogFooter>
//       </DialogContent>
//     </Dialog>
//     </>
//   );
// }


"use client";

import { useState } from "react";
import { FiUser } from "react-icons/fi";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast , Toaster } from "sonner"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

interface UserProps {
  setUsername: (name: string) => void;
}

export default function User({ setUsername }: UserProps) {
  const [usernameInput, setUsernameInput] = useState("");

  const handleLogin = () => {
    if (usernameInput) {
      setUsername(usernameInput);
      toast.success("Login successful!", {
        description: "Welcome, " + usernameInput,
        action: {
          label: "Undo",
          onClick: () => console.log("Undo action"),
        },
      });
    }
    
  };

  return (
    <>

    <Toaster position="top-center" richColors />
    <Dialog>
      <DialogTrigger asChild>
        <FiUser className="text-xl cursor-pointer" />
      </DialogTrigger>
      <DialogContent className="w-full max-w-[90%] sm:max-w-[625px] p-6 sm:h-[425px] bg-gray-300 rounded-lg border-2 border-orange-400">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center mb-4">Login</DialogTitle>
          <DialogDescription>
            Login to your profile here. Click login when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input
              id="username"
              value={usernameInput}
              onChange={(e) => setUsernameInput(e.target.value)}
              className="col-span-3 outline-none focus:ring-orange-400"
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input id="email" className="col-span-3 outline-none focus:ring-orange-400" />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="password" className="text-right">
              Password
            </Label>
            <Input id="password" className="col-span-3 outline-none focus:ring-orange-400" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleLogin}>
            Login
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    </>
    
  );
}
