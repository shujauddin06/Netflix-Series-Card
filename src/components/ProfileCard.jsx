 const Profile = () =>{
   
   return(
     <div>
  
      <ProfileCard
       name1 = "shuja"
       age  = {28}
       greetings = {
        <strong>Hello Banglore</strong>
       }
      >
        <p>Hobbies:Reading,Playing</p>
        <button>contact</button>
      </ProfileCard>
    
    
    <ProfileCard
       name1 = "sami"
       age  = {22}
       greetings = {
        <strong>Hello Banglore</strong>
       }
      >
        <p>Hobbies:Reading,Playing</p>
        <button>contact</button>
      </ProfileCard>
    </div>
  )
}

const ProfileCard = ({name1, age, greetings, children} ) =>{
      return(
        <>
          <h2>name:{name1}</h2>
          <p>age:{age}</p>
          <p>{greetings}</p>
          <p>{children}</p>
        </>
      )
}

export default Profile;