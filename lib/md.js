import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { mdToHTML } from './mdToHTML'
import readingTime from 'reading-time'

export const getParsedFileContentBySlug = (slug, path) => {
    const fileContent = fs.readFileSync(join(path, `${slug}.mdx`))
    const {data, content} = matter(fileContent)
    const stats = readingTime(content)
    return {
        frontMatter: data,
        content,
        readTime: stats.text
    }
}

export const getAllBlogInfo = async(path) => {
    let dataArray = []
    const files = await fs.promises.readdir(path)
    for (const file of files){
        const currentFile = fs.readFileSync(join(path, file))
        let {data, content} = matter(currentFile)
        data.slug = file.replace(/\.mdx?$/, '')
        dataArray.push(data)
    }
    dataArray.sort((a, b) => {
        return Date.parse(b.date) - Date.parse(a.date)
    })
    return dataArray
}

export const renderMd = async (content) => {
    return await mdToHTML(content || '')
}