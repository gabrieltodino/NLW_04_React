import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options = {
    providers: [
        Providers.GitHub({
            clientId: e372a68989302b87f106,
            clientSecret: c0880bf964d9a9b6531a7b035d948874c87471c2
        }),
    ],
}

export default (req, res) => NextAuth(req, res, options)
