import { AutocompleteInputChangeReason } from "@mui/material";
import { ApiCotext, User } from "types";
import { fetcher } from "utils";

export type SigninParams = {
  username: string;
  password: string;
};

const signin = async (
  context: ApiContext,
  params: SigninParams
): Promise<User> => {
  return await fetcher(
    `${context.apiRootUrl.replace(/\/$/g, "")}/auth/signin`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/jaon",
      },
      body: JSON.stringify(params),
    }
  );
};

export default signin;
