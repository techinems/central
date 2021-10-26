import axios from "axios";

/** 
 * Helper function to get whether the user has a website account
 * @param userId The user id as a google id.
 * @returns Whether or not the user has a website account
 */
export async function hasWebsiteAccount(googleId: string): Promise<boolean> {
  if (process.env.NEXT_PUBLIC_RAMPART_URL) {
    let isNewUser = true;
    try {
      isNewUser = (await axios.get<{ isNewUser: boolean }>(`${process.env.NEXT_PUBLIC_RAMPART_URL}/metadata/isNewUser/${googleId}`)).data.isNewUser;
      return isNewUser
    } catch (err) {
      console.error(err);
    }
  }
  return true;
}

export async function getRampartToken(googleId: string): Promise<string | undefined> {
  if (!process.env.NEXT_PUBLIC_RAMPART_URL || !process.env.JWT_SECRET) {
    return;
  }
  const rampartUrl = process.env.NEXT_PUBLIC_RAMPART_URL;
  const rampartSecret = process.env.JWT_SECRET;

  try {
    const token = (await axios.post<{ token: string }>(`${rampartUrl}/jwt/issue`,
      { googleId },
      {
        headers: { 'service-secret': rampartSecret }
      })).data.token;
    return token;
  } catch (err) {
    console.error(err);
  }
  return;
}