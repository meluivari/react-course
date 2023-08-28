import { useEffect, useState } from "react";

export function PlaygroundEffect() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <div className="flex flex-col gap-2">
      <input
        placeholder="First name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        placeholder="Last name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <UserInfo firstName={firstName} lastName={lastName} />
    </div>
  );
}

function UserInfo({
  firstName,
  lastName,
}: {
  firstName: string;
  lastName: string;
}) {
  const [fullName, setFullName] = useState("");
  console.log("Render UserInfo", fullName);

  useEffect(() => {
    setFullName(firstName + " " + lastName);
  }, [firstName, lastName]);

  return (
    <div>
      <span>{`Fullname: ${fullName}`}</span>
    </div>
  );
}

//   const [renderCount, setRenderCount] = useState(0);
//   useEffect(() => {
//     sendAnalyticsEvents();
//     setRenderCount(renderCount + 1);
//   });

function sendAnalyticsEvents() {
  console.log("View rendered");
}
