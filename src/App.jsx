import User from "./components/User.jsx";

function App() {
  const arr = [
    {
      name : "Karlo",
      lName : "Pervan"
    },
    {
      name: "Nikola",
      lName: "Pervan"
    },
    {
      name : "Bela",
      lName: "Mark"
    },
    {
      name : "Luka",
      lName : "Lucic"
    }
  ];

  return (
    <>
        {arr.map(function (user, index) {
          return (
            <User user={user.name} lName={user.lName} key={index}/>
          );
        })}
    </>
  )
}

export default App
