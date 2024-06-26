import  './index.css'

const UserCard=({image,fullName,age,gender,email})=>{
    return(
        <div>
            <img src={image} alt={`${fullName} profile`}/>
            <h2 className='image'>{fullName}</h2>
            <p>{age}</p>
            <p>{gender}</p>
            <p>{email}</p>
        </div>
    );
};

export default UserCard;