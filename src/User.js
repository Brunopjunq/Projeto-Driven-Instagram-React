export default function User(props) {
    const {userId, userName, userImg} = props;
    
    return (
        <div class="usuario">
            <img src={userImg} />
            <div class="texto">
              <strong>{userId}</strong>
              {userName}
            </div>
        </div>
    )
}