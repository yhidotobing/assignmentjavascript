function firstNameOnly(fullname) {
  let splitName = fullname.split(" ");
  return `${splitName[0]} ${splitName[1][0]}.`;
}

console.log(firstNameOnly("David Winalda"));
