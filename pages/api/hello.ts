// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    try {
        const response = await (await fetch('http://rampart:8080/jwt/issue', {method: 'POST'})).json();
        console.log(response.token);
        res.status(200).json({ name: 'FOO' });
    } catch (err) {
        console.log(err);
        res.status(400).json({name: 'Error: ' + JSON.stringify(err)});
    }
}
