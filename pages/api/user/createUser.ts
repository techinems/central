import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react';
import { MemberFormEntries, memberFormToServerUser } from '../../../utils/common/user';

type APIResponse = {
  success: boolean
  error?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<APIResponse>
) {
  if (req.method !== 'POST') {
    return;
  }
  try {
    // This secret is used to authenticate the service with Rampart (the centralized API backend)
    // Additionally it is used a seed to have rampart sign all JWTs for this service
    const rampartSecret = process.env.JWT_SECRET;
    const rampartUrl = process.env.NEXT_PUBLIC_RAMPART_URL;
    const memberFormEntries: MemberFormEntries = req.body;
    if (!rampartSecret || !memberFormEntries || !rampartUrl) {
      res.status(400).json({ success: false, error: "Malformed request" });
      return;
    }
    const session = await getSession({ req });
    if (!session) {
      res.status(503).json({ success: false, error: "Session not found" });
      return;
    }
    await axios.put(`${rampartUrl}/metadata/createUser`,
      { ...memberFormToServerUser(memberFormEntries), g_id: session.googleId },
      {
        headers: { 'service-secret': rampartSecret }
      });
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(400).json({ success: false, error: JSON.stringify(err) })
  }
}
