import { ChangeEvent, useState } from "react";

export default function ArtistForm() {
  const [person] = useState({
    firstName: "Barbara",
    lastName: "Hepworth",
    email: "bhepworth@sculpture.com",
    artwork: {
      title: "Blue Nana",
      image: "https://i.imgur.com/Sd1AgUOm.jpg",
    },
  });

  function handleFirstNameChange(e: ChangeEvent<HTMLInputElement>) {
    person.firstName = e.target.value;
  }

  function handleLastNameChange(e: ChangeEvent<HTMLInputElement>) {
    person.lastName = e.target.value;
  }

  function handleEmailChange(e: ChangeEvent<HTMLInputElement>) {
    person.email = e.target.value;
  }

  function handleImageChange(e: ChangeEvent<HTMLInputElement>) {
    person.artwork.image = e.target.value;
  }

  return (
    <div className="flex flex-col gap-2">
      <label>
        First name:
        <input value={person.firstName} onChange={handleFirstNameChange} />
      </label>
      <label>
        Last name:
        <input value={person.lastName} onChange={handleLastNameChange} />
      </label>
      <label>
        Email:
        <input value={person.email} onChange={handleEmailChange} />
      </label>
      <p>
        {person.firstName} {person.lastName} ({person.email})
      </p>
      <label>
        Image:
        <input value={person.artwork.image} onChange={handleImageChange} />
      </label>
      <p>
        <i>{person.artwork.title}</i>
        {" by "}
        {person.firstName} {person.lastName}
      </p>
      <img className="w-60" src={person.artwork.image} alt={person.artwork.title} />
    </div>
  );
}
