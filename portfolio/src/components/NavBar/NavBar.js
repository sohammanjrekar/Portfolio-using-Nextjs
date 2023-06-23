import Link from 'next/link'
import React from 'react'

function NavBar() {
  const links=[{
    id:1,
    name:"Home",
    URL:"/"
  },
  {
    id:2,
    name:"Portfolio",
    URL:"/portfolio"
  },
  {
    id:3,
    name:"Blog",
    URL:"/blog"
  },
  
  {
    id:4,
    name:"About",
    URL:"/about"
  },
  {
    id:5,
    name:"Contact",
    URL:"/contact"
  }
]
    
  return (
    <>
   <nav  className='py-3 text-white'>
    {links.map((item)=>{
      return(
        <Link className="mx-2" href={item.URL} key={item.key}>{item.name}</Link>
      )
    })}
    
   </nav>
    </>
  )
}

export default NavBar