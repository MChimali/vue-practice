import { Member } from '../types/types'
export const getMember = (id: string): Promise<Member> =>
  fetch(`https://api.github.com/user/${id}`).then((member) => member.json())
