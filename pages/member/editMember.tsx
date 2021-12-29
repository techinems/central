import { useSession } from 'next-auth/react';
import Head from 'next/head';
import { NextAuthPage } from '../../utils/common/authTypings';

export interface EditMemberProps {
  memberId?: string;
}

const EditMemberPage: NextAuthPage<EditMemberProps> = ({memberId}) => {
    const { data: session } = useSession();
    return (
        <div className={'container'}>
            <Head>
                <title>Editing Member</title>
            </Head>

            <main className="justify-center">
                <h1 className="font-bold">
          Member ID: {memberId || session?.googleId || 'Unknown'}
                </h1>

                <div className="grid">
                    <div className="col-span-1">
                        {JSON.stringify(session?.user) || 'Unknown user'}
                    </div>
                </div>
            </main>

            <footer>
        RPI Ambulance 2022
            </footer>
        </div>
    );
};

// Make it require auth by adding auth information
EditMemberPage.authOptions = { requiresAuth: true };

export default EditMemberPage;
