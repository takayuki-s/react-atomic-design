import { BrowserRouter } from "react-router-dom";
import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import { HeaderOnly } from "./components/templetes/HeaderOnly";
import "./styles.css";

const user = {
  name: "てけ",
  image: "https://source.unsplash.com/oMpAz-DN-9I",
  email: "test@test.com",
  phone: "090-1234-5678",
  company: {
    name: "テスト株式会社"
  },
  website: "https://google.com"
};

export default function App() {
  return (
    <BrowserRouter>
      <HeaderOnly>
        <PrimaryButton>テスト</PrimaryButton>
        <SecondaryButton>検索</SecondaryButton>
        <br />
        <SearchInput />
        <UserCard user={user} />
      </HeaderOnly>
    </BrowserRouter>
  );
}
