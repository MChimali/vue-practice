import { Member } from '../types/types'
export const getMembers = (): Promise<Member[]> =>
  fetch('https://api.github.com/orgs/lemoncode/members').then((members) =>
    members.json()
  )

export const members = () =>
  Promise.resolve([
    {
      id: 123,
      avatar_url: 'https://cdn2.thecatapi.com/images/KBroiVNCM.jpg',
    },
    {
      id: 456,
      avatar_url: 'https://cdn2.thecatapi.com/images/bjf.jpg',
    },
    {
      id: 789,
      avatar_url: 'https://images.dog.ceo/breeds/dalmatian/cooper1.jpg',
    },
    {
      id: 123,
      avatar_url: 'https://cdn2.thecatapi.com/images/W653b2S_F.jpg',
    },
  ])
