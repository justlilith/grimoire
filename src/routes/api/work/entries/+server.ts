import { json } from '@sveltejs/kit'
import { default as fs } from 'fs'

export async function GET({ params }){
  const dirList:DirListT = fs.readdirSync('src/lib/work/entries')
  const entries:WorkEntryT[] = dirList.map(filename => {
    return JSON.parse(
      fs.readFileSync(`src/lib/work/entries/${filename}`,{encoding: 'utf8'})
      )
  })

  return json(entries)
}