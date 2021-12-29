import axios, { AxiosError } from 'axios';

// This contains properties that are editable for a user
export interface MemberFormEntries {
  firstName: string;
  lastName: string;
  month: string;
  day: string;
  year: string;
  email: string;
  homeStreet?: string;
  homeApartment?: string;
  homeCity?: string;
  homeState?: string;
  homeZip?: string;
  localStreet?: string;
  localApartment?: string;
  localCity?: string;
  localState?: string;
  localZip?: string;
  phone: string;
  rcsId?: string;
  rin?: string;
}

export interface ClientUser extends MemberFormEntries {
  g_id: string;
}

// This contains the shape a user is saved in the database, this may be less friendly than the client model
export interface ServerUser {
  id: number,
  g_id: string,
  first_name: string;
  last_name: string;
  dob: string
  email: string;
  home_street?: string;
  home_city?: string;
  home_state?: string;
  home_zip?: string;
  local_street?: string;
  local_city?: string;
  local_state?: string
  local_zip?: string;
  phone: string;
  rcs_id?: string;
  rin?: string;
}

export function memberFormToServerUser(form: MemberFormEntries): Partial<ServerUser> {
    return {
        first_name: form.firstName,
        last_name: form.lastName,
        dob: `${form.year}-${form.month}-${form.day}`,
        email: form.email,
        home_street: form.homeStreet,
        home_city: form.homeCity,
        home_state: form.homeState,
        home_zip: form.homeZip,
        local_street: form.localStreet,
        local_city: form.localCity,
        local_state: form.localState,
        local_zip: form.localZip,
        phone: form.phone,
        rcs_id: form.rcsId,
        rin: form.rin
    };
}

/**
 * Given an id and the authoization token, get the user from the database
 * @param idOrGoogleId The id or google id of the user
 * @param rampartToken The authorized token
 * @returns A user or undefined if one does not exist
 */
export async function getUser(idOrGoogleId: string, rampartToken: string): Promise<ServerUser | undefined> {
    if (!process.env.NEXT_PUBLIC_RAMPART_URL) {
        return;
    }
    const rampartUrl = process.env.NEXT_PUBLIC_RAMPART_URL;
    try {
    // Request the user from Rampart passing the rampart token in as a header
        const user: ServerUser = (await axios.get<ServerUser>(`${rampartUrl}/user/${idOrGoogleId}`,
            {
                headers: { 'rampart-token': rampartToken }
            })).data;
        return user;
    } catch (err: any) {
        if (axios.isAxiosError(err)) {
            console.error(err.response?.data);
        } else {
            console.error(err);
        }
    }
}