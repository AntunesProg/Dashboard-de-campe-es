import { readFile } from 'fs/promises'
import { join } from 'path'

export async function GET() {
  try {
    const filePath = join(process.cwd(), 'data', 'dataset.json')
    const fileContent = await readFile(filePath, 'utf-8')
    const data = JSON.parse(fileContent)

    return Response.json(data)
  } catch (error) {
    return Response.json({ error: 'Failed to load data' }, { status: 500 })
  }
}