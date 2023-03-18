import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  Page,
  Body,
  InfoGroup,
  CreateAccLink,
  Button,
  Icon,
  Input,
} from "./styles";
import FormControl from "../../components/FormControl";

export default function Profile() {
  return (
    <Page>
      <Header title="Login" />
      <Body>
        <h1>Log-in</h1>
        <FormControl id='email' label='Email' placeholder='your email here'/>
        <FormControl id='password' label='Password' placeholder='your password' password />
        <Button>login</Button>
        <CreateAccLink>
          <p>Don't have an account?</p>
          <a href="/signup">Sign up</a>
        </CreateAccLink>
      </Body>
      <Footer />
    </Page>
  );
}
