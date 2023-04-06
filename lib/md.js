import { remark } from "remark"
import html from "remark-html"
import {rehype} from 'rehype'
import addclasses from 'rehype-add-classes'

export async function mdToHTML(markdownContent) {
    const result = await remark().use(html).process(markdownContent)
    const processor = rehype().data('settings', {fragment: true}).use(addclasses, {h2: "text-xl sm:text-xl md:text-2xl lg:text-2xl", a: "underline", img: "ml-auto mr-auto rounded-xl"})
    const {contents} = processor.processSync(result)
    return result.value
}

export const renderMd = async (content) => {
    return await mdToHTML(content || '')
}