
const user = {
  firstName: 'Tony',
  lastName: 'Stark'
}

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const Greeting = (props) => {
  if (props.user) {
    return <span>hello, {formatName(props.user)}</span>;
  }
  return <span>hello stranger</span>;
}



export default function Hello(props) {
  return <Greeting user={user} />;
}
