let contacts = [
  {
    id: 1,
    name: "khairul habibie",
    tag: "habibie",
    imageUrl: "/images/habibie.jpeg"
  },
  {
    id: 2,
    name: "solehudin",
    tag: "solehudin",
    imageUrl: "/images/solehudin.jpeg"
  },
  {
    id: 3,
    name: "zulhamdani",
    tag: "zul",
    imageUrl: "/images/zul.jpeg"
  }
];

function getContacts() {
  return contacts;
}

function addContact(contact) {
  contacts = [
    ...contacts,
    { id: +new Date(), imageUrl: "/images/default.jpg", ...contact }
  ];
}

function deleteContact(id) {
  contacts = contacts.filter((contact) => contact.id !== id);
}

export { getContacts, addContact, deleteContact };
