import FormControl from "../../../components/FormControl";

export default function RegisterPageOne() {
  return (
    <>
      <h1>Sign Up</h1>
      <div>
        <FormControl id="name" label="Name" placeholder="Your Full Name" />
        <FormControl
          id="email"
          label="Email"
          placeholder="Your email address"
        />
        <FormControl
          id="password"
          label="Password"
          placeholder="Create new password"
          password
        />
        <FormControl
          id="confirmpass"
          label="Confirm Password"
          placeholder="Confirm your password"
          password
        />
      </div>
    </>
  );
}
