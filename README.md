npx create-next-app@latest

inside app folder there is page.tsx => that is landing page
you create users folder, inside that folder you create page.tsx => so whenever you go to localhost:3000/users that page.tsx content will be loaded

if you create user folder, inside that create admin folder, inside that page.tsx => so at localhost:3000/user/admin at this route the content of page.tsx will be loaded

layout.tsx :-
whatever you render first that will render and then children will render
if you want to keep header intact, then inside auth, make layout.tsx
export default function AuthLayout({ children }) {
return (

<div>
<Navbar />
{children}
</div>
);
} like this.
whever you go to auth/signup or auth/signin or any router inside auth, then first navbar will be loaded, then children will be loaded

nextauth tutorial
npm install next-auth
make directory api/auth/[...nextauth]/route.tsx
import NextAuth from "next-auth"

const handler = NextAuth({
...
})

export { handler as GET, handler as POST }
