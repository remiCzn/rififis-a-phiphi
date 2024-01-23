import profile1 from "../../assets/profiles/1.jpeg";
import profile2 from "../../assets/profiles/2.jpeg";
import profile3 from "../../assets/profiles/3.jpeg";
import profile4 from "../../assets/profiles/4.jpeg";
import profile5 from "../../assets/profiles/5.jpeg";

export function profilePic() {
  return [profile1, profile2, profile3, profile4, profile5][
    Math.floor(Math.random() * 5)
  ];
}
